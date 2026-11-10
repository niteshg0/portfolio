import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";

/**
 * Sends contact-form submissions to the site owner over Gmail SMTP.
 *
 * Required environment variables (unchanged from the previous setup):
 *   GMAIL_EMAIL         the Gmail address that sends and receives the mail
 *   GMAIL_APP_PASSWORD  an app password for that account
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { name, email, message, company } = parsed.data;

  // Honeypot tripped: pretend it worked so bots don't retry.
  if (company) {
    return NextResponse.json({ success: true, message: "Message sent." });
  }

  const user = process.env.GMAIL_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("Contact form: GMAIL_EMAIL / GMAIL_APP_PASSWORD not set.");
    return NextResponse.json(
      { success: false, message: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    // Strip characters that could break out of the display name / subject.
    const safeName = name.replace(/["<>\r\n]/g, "");

    await transporter.sendMail({
      from: `"${safeName} via portfolio" <${user}>`,
      to: user,
      replyTo: email,
      subject: `New portfolio message from ${safeName}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true, message: "Message sent." });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
