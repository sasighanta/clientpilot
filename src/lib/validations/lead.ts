import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .email("Enter a valid email"),

  company: z.string().optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

export type LeadFormData = z.infer<typeof leadSchema>;