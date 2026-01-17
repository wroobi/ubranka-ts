import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/reset-password";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";

console.log("process.env.RESEND_API_KEY", process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    try {
      await dbConnect();
      console.log("connected");
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { message: "Nie można połączyć się z bazą danych" },
        { status: 503 }
      );
    }

    const body = await request.json();

    const { email } = body;

    const { data, error } = await resend.emails.send({
      from: "Ubranka <onboarding@resend.dev>",
      to: [email],
      subject: "Reset your password",
      react: EmailTemplate({
        resetLink: "https://example.com/reset-password",
      }),
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
