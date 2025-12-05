import { NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validations/contactSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // You can replace this with your domain
      to: process.env.CONTACT_EMAIL || "richblendconsult@gmail.com", // The email address to receive the form data
      subject: "New Contact Form Submission from BloomWise Tutoring",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Child's Age:</strong> ${validatedData.child_age || 'Not provided'}</p>
        <p><strong>Subjects of Interest:</strong> ${validatedData.subjects.join(', ')}</p>
        <p><strong>Message:</strong> ${validatedData.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to send email",
          details: error.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return success response
    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return new Response(
        JSON.stringify({ error: "Validation failed", details: error.message }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Handle other errors
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
