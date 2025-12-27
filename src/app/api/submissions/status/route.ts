import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "submissions.json");

export async function PATCH(request: Request) {
  try {
    const { orderId, status } = await request.json();

    const isVercel = process.env.VERCEL === "1";
    if (isVercel) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Status updates are currently only supported in development mode (local) while using local file storage.",
        },
        { status: 403 }
      );
    }

    if (!fs.existsSync(DB_PATH)) {
      return NextResponse.json(
        { success: false, error: "DB not found" },
        { status: 404 }
      );
    }

    const fileData = fs.readFileSync(DB_PATH, "utf8");
    const submissions = JSON.parse(fileData);

    const index = submissions.findIndex((s: any) => s.orderId === orderId);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    submissions[index].status = status;
    fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Status update error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update" },
      { status: 500 }
    );
  }
}
