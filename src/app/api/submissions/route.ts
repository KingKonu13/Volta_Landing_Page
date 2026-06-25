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
  // Always log so the lead is captured even if the filesystem write fails.
  console.log('[submission]', JSON.stringify(submission));
  try {
    const submissions = await getSubmissions();
    submissions.push(submission);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  } catch (err) {
    console.error('Could not persist submission to disk:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email } = body;

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
      timestamp: new Date().toISOString(),
    };

    await saveSubmission(submission);

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