import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/reset-password";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { email } = body;

    // Check if user already exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User with this email not found" },
        { status: 404 },
      );
    }

    // Generate reset token
    const token = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Set token and expiry (1 hour)
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = new Date(Date.now() + 60 * 60 * 1000);
    await user.save();

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const resetLink = `${appUrl}/auth/reset-password/confirm?token=${token}&email=${encodeURIComponent(
      email,
    )}`;

    const resp = await resend.emails.send({
      from: "Ubranka <onboarding@resend.dev>",
      to: [email],
      subject: "Reset your password",
      react: EmailTemplate({ resetLink }),
    });

    return NextResponse.json({ success: true, resp }, { status: 200 });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
