import { contactSchema, ContactFormValues } from "@/lib/validations/contactSchema";
import { createClient } from "@/lib/supabase/server";
import { sendContactConfirmation, notifyTutorOfContact } from "@/lib/services/contactService";

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Insert data into Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from("contacts")
      .insert(validatedData)
      .select()
      .single();

    if (error) {
      console.error("Supabase insertion error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to submit contact form", details: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send confirmation email and notify tutor
    try {
      await sendContactConfirmation(validatedData.email, validatedData.name);
      await notifyTutorOfContact(
        validatedData.name,
        validatedData.email,
        validatedData.message
      );
    } catch (emailError) {
      console.error("Email notification error:", emailError);
      // We don't return an error here because the form submission was successful
      // We just log the email error for monitoring
    }

    // Return success response
    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    
    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return new Response(
        JSON.stringify({ error: "Validation failed", details: error.message }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Handle other errors
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}