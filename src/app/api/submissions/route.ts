import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "submissions.json");

// Ensure data directory exists (only locally)
if (
  process.env.VERCEL !== "1" &&
  !fs.existsSync(path.join(process.cwd(), "data"))
) {
  fs.mkdirSync(path.join(process.cwd(), "data"));
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const orderId = `YAD-${Math.floor(1000 + Math.random() * 9000)}`;
    const submission = {
      ...data,
      orderId,
      status: "New",
      createdAt: new Date().toISOString(),
    };

    // 1. Try to save to local file system (only in development or if supported)
    const isVercel = process.env.VERCEL === "1";

    if (!isVercel) {
      try {
        let submissions = [];
        if (fs.existsSync(DB_PATH)) {
          const fileData = fs.readFileSync(DB_PATH, "utf8");
          submissions = JSON.parse(fileData);
        }

        submissions.push(submission);
        fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2));
      } catch (fsError) {
        console.warn("Local storage failed (expected on Vercel):", fsError);
      }
    }

    // 2. Send to Google Sheets (Primary storage in production)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        // We use await here to ensure it's sent before the serverless function terminates
        await fetch(webhookUrl, {
          method: "POST",
          body: JSON.stringify(submission),
          headers: { "Content-Type": "application/json" },
        }).catch((err) => console.error("Google Sheets fetch error:", err));
      } catch (webhookError) {
        console.error("Failed to trigger Google Sheets webhook:", webhookError);
      }
    } else {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not set.");
    }

    return NextResponse.json({ success: true, orderId });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const isVercel = process.env.VERCEL === "1";

    // In production/Vercel, we can't read from the local submissions.json (it's not persistent)
    if (isVercel || !fs.existsSync(DB_PATH)) {
      return NextResponse.json([]);
    }

    const fileData = fs.readFileSync(DB_PATH, "utf8");
    return NextResponse.json(JSON.parse(fileData));
  } catch (error) {
    console.error("Fetch submissions error:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
