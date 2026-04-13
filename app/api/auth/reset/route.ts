import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    try {
      await dbConnect();
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { message: "Nie można połączyć się z bazą danych" },
        { status: 503 },
      );
    }

    const body = await request.json();
    const { email, token, password } = body;

    if (!email || !token || !password) {
      return NextResponse.json(
        { message: "Missing parameters" },
        { status: 400 },
      );
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({ email, resetPasswordToken: hashedToken });

    if (!user || !user.resetPasswordExpire) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 },
      );
    }

    if (user.resetPasswordExpire.getTime() < Date.now()) {
      return NextResponse.json({ message: "Token expired" }, { status: 400 });
    }

    // Set new password and clear reset token fields
    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;
    await user.save();

    return NextResponse.json(
      { success: true, message: "Password reset successful" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
