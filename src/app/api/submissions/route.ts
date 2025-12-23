import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "submissions.json");

// Ensure data directory exists
if (!fs.existsSync(path.join(process.cwd(), "data"))) {
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

    let submissions = [];
    if (fs.existsSync(DB_PATH)) {
      const fileData = fs.readFileSync(DB_PATH, "utf8");
      submissions = JSON.parse(fileData);
    }

    submissions.push(submission);
    fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2));

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
    if (!fs.existsSync(DB_PATH)) {
      return NextResponse.json([]);
    }
    const fileData = fs.readFileSync(DB_PATH, "utf8");
    return NextResponse.json(JSON.parse(fileData));
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
