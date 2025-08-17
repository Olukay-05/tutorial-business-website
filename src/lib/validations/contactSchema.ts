import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  child_age: z
    .number({
      required_error: "Child's age is required",
      invalid_type_error: "Please enter a valid age",
    })
    .int("Age must be a whole number")
    .min(3, "Child must be at least 3 years old")
    .max(18, "Child must be 18 years old or younger"),
  subjects: z
    .array(z.string())
    .min(1, "Please select at least one subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const SUBJECTS = [
  "11+ Maths",
  "11+ English", 
  "SEN Support",
  "Phonics",
  "Science",
  "Other",
] as const;