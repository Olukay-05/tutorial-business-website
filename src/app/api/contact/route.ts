import { NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validations/contactSchema";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Forward the request to the n8n webhook
    const n8nResponse = await fetch(
      process.env.N8N_WEBHOOK_URL || "http://localhost:5678/webhook/380e5511-ce2b-47d5-aa90-3df6445a5b2b",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      }
    );

    if (!n8nResponse.ok) {
      console.error(
        "n8n webhook error:",
        n8nResponse.status,
        n8nResponse.statusText
      );
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to submit contact form",
          details: `n8n webhook returned ${n8nResponse.status}`,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return success response
    return new Response(JSON.stringify({ success: true }), {
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
