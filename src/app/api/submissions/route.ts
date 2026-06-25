import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

// On serverless (Vercel) the project dir is read-only; use the writable temp
// dir. Note: this is ephemeral. Submissions are always logged below so leads
// are captured in the function logs until a real datastore is wired up.
const SUBMISSIONS_FILE = path.join(os.tmpdir(), 'volta-submissions.json');

interface Submission {
  id: string;
  type: 'experts' | 'sponsors';
  name: string;
  email: string;
  phone?: string;
  timestamp: string;
}

async function getSubmissions(): Promise<Submission[]> {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubmission(submission: Submission): Promise<void> {
  // Always log so the lead is captured even if other sinks fail.
  console.log('[submission]', JSON.stringify(submission));
  try {
    const submissions = await getSubmissions();
    submissions.push(submission);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch (err) {
    console.error('Could not persist submission to disk:', err);
  }
}

// Durable lead capture: email the submission via Resend if configured.
// Set RESEND_API_KEY and LEADS_EMAIL in the environment to enable.
async function emailSubmission(submission: Submission): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_EMAIL;
  if (!apiKey || !to) return; // not configured — silently skip

  const from = process.env.LEADS_FROM ?? 'Volta Leads <onboarding@resend.dev>';
  const audience = submission.type === 'experts' ? 'Expert network' : 'Sponsor';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: submission.email,
        subject: `New ${audience} lead — ${submission.name}`,
        text: [
          `Type:  ${audience}`,
          `Name:  ${submission.name}`,
          `Email: ${submission.email}`,
          ...(submission.phone ? [`Phone: ${submission.phone}`] : []),
          `Time:  ${submission.timestamp}`,
        ].join('\n'),
      }),
    });
    if (!res.ok) {
      console.error('Resend email failed:', res.status, await res.text());
    }
  } catch (err) {
    console.error('Could not send lead email:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, phone } = body;

    if (!type || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (type !== 'experts' && type !== 'sponsors') {
      return NextResponse.json(
        { error: 'Invalid type' },
        { status: 400 }
      );
    }

    const submission: Submission = {
      id: Date.now().toString(),
      type,
      name,
      email,
      ...(phone ? { phone: String(phone) } : {}),
      timestamp: new Date().toISOString(),
    };

    await saveSubmission(submission);
    await emailSubmission(submission);

    return NextResponse.json(
      { success: true, message: 'Submission received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}