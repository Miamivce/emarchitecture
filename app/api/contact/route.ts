import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at info@em-architecture.com' },
        { status: 503 }
      );
    }

    // Initialize Resend only when needed
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send confirmation email to requester
    await resend.emails.send({
      from: 'EM Architecture <noreply@em-architecture.com>',
      to: [email],
      subject: 'Thank you for reaching out to EM Architecture',
      html: `
        <div style="font-family: 'Cormorant Garamond', Georgia, serif; max-width: 600px; margin: 0 auto; padding: 60px 40px; background: #faf9f7;">
          <div style="text-align: center; margin-bottom: 48px;">
            <h1 style="color: #1a1a1a; font-weight: 300; font-size: 32px; letter-spacing: 0.02em; margin: 0;">
              EM Architecture
            </h1>
            <p style="color: rgba(26, 26, 26, 0.5); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 12px 0 0 0; font-family: 'Inter', sans-serif;">
              Brasschaat · Antwerp
            </p>
          </div>

          <div style="border-top: 1px solid rgba(26, 26, 26, 0.1); padding-top: 40px;">
            <p style="color: rgba(26, 26, 26, 0.7); font-size: 18px; line-height: 1.8; margin: 0 0 24px 0; font-weight: 300;">
              Dear ${name},
            </p>

            <p style="color: rgba(26, 26, 26, 0.7); font-size: 18px; line-height: 1.8; margin: 0 0 24px 0; font-weight: 300;">
              Thank you for your interest in EM Architecture. We have received your message and appreciate you taking the time to reach out to us.
            </p>

            <p style="color: rgba(26, 26, 26, 0.7); font-size: 18px; line-height: 1.8; margin: 0 0 24px 0; font-weight: 300;">
              We will review your inquiry and respond as soon as possible. In the meantime, should you have any additional questions, please don't hesitate to contact us.
            </p>

            <p style="color: rgba(26, 26, 26, 0.7); font-size: 18px; line-height: 1.8; margin: 40px 0 0 0; font-weight: 300;">
              Kind regards,<br/>
              <span style="color: #1a1a1a;">EM Architecture</span>
            </p>
          </div>

          <div style="margin-top: 60px; padding-top: 32px; border-top: 1px solid rgba(26, 26, 26, 0.1); text-align: center;">
            <p style="color: rgba(26, 26, 26, 0.4); font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; font-family: 'Inter', sans-serif;">
              info@em-architecture.com
            </p>
            <p style="color: rgba(26, 26, 26, 0.3); font-size: 10px; margin: 12px 0 0 0; font-family: 'Inter', sans-serif;">
              emarchitecture.be
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to admin
    await resend.emails.send({
      from: 'EM Architecture <noreply@em-architecture.com>',
      to: ['info@em-architecture.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #ffffff;">
          <div style="background: #faf9f7; padding: 24px; margin-bottom: 32px;">
            <h2 style="color: #1a1a1a; font-weight: 300; font-size: 24px; margin: 0; font-family: 'Cormorant Garamond', Georgia, serif;">
              New Contact Form Submission
            </h2>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: rgba(26, 26, 26, 0.5); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; font-weight: 500;">Name</p>
            <p style="color: #1a1a1a; font-size: 16px; margin: 0; font-weight: 400;">${name}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: rgba(26, 26, 26, 0.5); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; font-weight: 500;">Email</p>
            <p style="color: #1a1a1a; font-size: 16px; margin: 0;">
              <a href="mailto:${email}" style="color: #8b7355; text-decoration: none; font-weight: 400;">${email}</a>
            </p>
          </div>

          <div style="margin-bottom: 32px;">
            <p style="color: rgba(26, 26, 26, 0.5); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; font-weight: 500;">Message</p>
            <div style="background: #faf9f7; padding: 20px; border-left: 2px solid #8b7355;">
              <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap; font-weight: 300;">${message}</p>
            </div>
          </div>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(26, 26, 26, 0.1);">
            <p style="color: rgba(26, 26, 26, 0.4); font-size: 11px; margin: 0; text-align: center;">
              Sent from emarchitecture.be contact form
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
