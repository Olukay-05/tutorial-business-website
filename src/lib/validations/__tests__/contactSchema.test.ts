import { contactSchema } from "@/lib/validations/contactSchema";

describe("contactSchema", () => {
  it("should validate correct data", () => {
    const validData = {
      name: "John Doe",
      email: "john@example.com",
      child_age: 10,
      subjects: ["Math", "Science"],
      message: "Hello, I'm interested in tutoring services.",
    };

    expect(() => contactSchema.parse(validData)).not.toThrow();
  });

  it("should reject invalid email", () => {
    const invalidData = {
      name: "John Doe",
      email: "invalid-email",
      child_age: 10,
      subjects: ["Math"],
      message: "Hello",
    };

    expect(() => contactSchema.parse(invalidData)).toThrow();
  });

  it("should reject name shorter than 2 characters", () => {
    const invalidData = {
      name: "J",
      email: "john@example.com",
      child_age: 10,
      subjects: ["Math"],
      message: "Hello",
    };

    expect(() => contactSchema.parse(invalidData)).toThrow();
  });

  it("should reject child age outside 3-18 range", () => {
    const invalidData1 = {
      name: "John Doe",
      email: "john@example.com",
      child_age: 2,
      subjects: ["Math"],
      message: "Hello",
    };

    const invalidData2 = {
      name: "John Doe",
      email: "john@example.com",
      child_age: 19,
      subjects: ["Math"],
      message: "Hello",
    };

    expect(() => contactSchema.parse(invalidData1)).toThrow();
    expect(() => contactSchema.parse(invalidData2)).toThrow();
  });

  it("should reject message longer than 1000 characters", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      child_age: 10,
      subjects: ["Math"],
      message: "A".repeat(1001),
    };

    expect(() => contactSchema.parse(invalidData)).toThrow();
  });

  it("should reject when no subjects are selected", () => {
    const invalidData = {
      name: "John Doe",
      email: "john@example.com",
      child_age: 10,
      subjects: [],
      message: "Hello",
    };

    expect(() => contactSchema.parse(invalidData)).toThrow();
  });
});