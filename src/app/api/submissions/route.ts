import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const SUBMISSIONS_FILE = path.join(process.cwd(), 'submissions.json');

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
  const submissions = await getSubmissions();
  submissions.push(submission);
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
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