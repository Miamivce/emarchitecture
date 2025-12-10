import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'EM Architecture <noreply@emarchitecture.com>',
      to: ['eline@emarchitecture.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #1a1a1a; font-weight: 300; font-size: 24px; margin-bottom: 24px; border-bottom: 1px solid #e5e5e5; padding-bottom: 16px;">
            New Contact Form Submission
          </h2>

          <div style="margin-bottom: 24px;">
            <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Name</p>
            <p style="color: #1a1a1a; font-size: 16px; margin: 0;">${name}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Email</p>
            <p style="color: #1a1a1a; font-size: 16px; margin: 0;">
              <a href="mailto:${email}" style="color: #8b7355; text-decoration: none;">${email}</a>
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
            <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              Sent from emarchitecture.be contact form
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
