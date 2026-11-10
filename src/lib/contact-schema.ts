import { z } from "zod";

/** Shared by the contact form and the /api/contact route. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "That name is a little long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(120),
  message: z
    .string()
    .trim()
    .min(10, "A sentence or two helps me reply properly.")
    .max(4000, "Please keep it under 4,000 characters."),
  /** Honeypot — real visitors never see or fill this. */
  company: z.string().max(200).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;
