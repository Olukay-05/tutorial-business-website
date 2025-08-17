import { POST } from "@/app/api/contacts/route";
import { contactSchema } from "@/lib/validations/contactSchema";

// Mock the Supabase client
jest.mock("@/lib/supabase/server", () => ({
  createClient: jest.fn().mockReturnValue({
    from: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    single: jest.fn().mockResolvedValue({ data: {}, error: null }),
  }),
}));

// Mock the contact service functions
jest.mock("@/lib/services/contactService", () => ({
  sendContactConfirmation: jest.fn().mockResolvedValue(undefined),
  notifyTutorOfContact: jest.fn().mockResolvedValue(undefined),
}));

describe("/api/contacts route", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should successfully handle valid contact form submission", async () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      child_age: 10,
      subjects: ["Math", "Science"],
      message: "Hello, I'm interested in tutoring services.",
    };

    const request = new Request("http://localhost/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validData),
    });

    const response = await POST(request);
    const responseBody = await response.json();

    expect(response.status).toBe(200);
    expect(responseBody.success).toBe(true);
  });

  it("should return 400 for invalid data", async () => {
    const invalidData = {
      name: "J", // Too short
      email: "invalid-email",
      child_age: 10,
      subjects: ["Math"],
      message: "Hello",
    };

    const request = new Request("http://localhost/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invalidData),
    });

    const response = await POST(request);
    const responseBody = await response.json();

    expect(response.status).toBe(400);
    expect(responseBody.error).toBe("Validation failed");
  });

  it("should return 500 if Supabase insertion fails", async () => {
    // Mock Supabase to return an error
    const mockSupabase = require("@/lib/supabase/server");
    mockSupabase.createClient.mockReturnValue({
      from: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      single: jest.fn().mockResolvedValue({
        data: null,
        error: { message: "Database error" },
      }),
    });

    const validData = {
      name: "John Doe",
      email: "john@example.com",
      child_age: 10,
      subjects: ["Math"],
      message: "Hello",
    };

    const request = new Request("http://localhost/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validData),
    });

    const response = await POST(request);
    const responseBody = await response.json();

    expect(response.status).toBe(500);
    expect(responseBody.error).toBe("Failed to submit contact form");
  });
});