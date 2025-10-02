import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number must be less than 15 digits"),
  child_age: z
    .number()
    .int("Age must be a whole number")
    .min(3, "Child must be at least 3 years old")
    .max(18, "Child must be 18 years old or younger"),
  subjects: z
    .array(z.string())
    .min(1, "Please select at least one subject"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
}).refine(data => data.child_age !== undefined, {
  message: "Child's age is required",
  path: ["child_age"], // path of error
});

// Define a schema for the form with optional child_age
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number must be less than 15 digits"),
  child_age: z
    .number()
    .int("Age must be a whole number")
    .min(3, "Child must be at least 3 years old")
    .max(18, "Child must be 18 years old or younger")
    .optional(),
  subjects: z
    .array(z.string())
    .min(1, "Please select at least one subject"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

// Make child_age optional in the type to match form default values
export type ContactFormValuesWithOptionalAge = z.infer<typeof contactFormSchema>;

export const SUBJECTS = [
  "11+ Maths",
  "11+ English", 
  "SEN Support",
  "Phonics",
  "Science",
  "Other",
] as const;