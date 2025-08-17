import nodemailer from "nodemailer";

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactConfirmation(
  email: string,
  name: string
): Promise<void> {
  try {
    // Verify transporter configuration
    await transporter.verify();
    
    await transporter.sendMail({
      from: '"Bloomwise Tutoring" <noreply@bloomwisetutoring.com>',
      to: email,
      subject: "Thank you for contacting Bloomwise Tutoring",
      text: `Hi ${name},

Thank you for reaching out to Bloomwise Tutoring. We've received your message and will get back to you as soon as possible.

Best regards,
Sister Tope
Bloomwise Tutoring`,
      html: `<p>Hi ${name},</p>
<p>Thank you for reaching out to Bloomwise Tutoring. We've received your message and will get back to you as soon as possible.</p>
<p>Best regards,<br/>
Sister Tope<br/>
Bloomwise Tutoring</p>`,
    });
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    throw new Error(`Failed to send confirmation email: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function notifyTutorOfContact(
  name: string,
  email: string,
  message: string
): Promise<void> {
  try {
    // Verify transporter configuration
    await transporter.verify();
    
    await transporter.sendMail({
      from: '"Bloomwise Tutoring" <noreply@bloomwisetutoring.com>',
      to: process.env.TUTOR_EMAIL || "tutor@bloomwisetutoring.com",
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission from ${name} (${email}):

${message}`,
      html: `<p>You have a new contact form submission from <strong>${name}</strong> (${email}):</p>
<blockquote>${message}</blockquote>`,
    });
  } catch (error) {
    console.error("Failed to notify tutor:", error);
    throw new Error(`Failed to notify tutor: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}