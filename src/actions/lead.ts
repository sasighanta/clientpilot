"use server";

import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validations/lead";

export async function createLead(data: unknown) {
  const parsed = leadSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data.",
    };
  }

  try {
    await prisma.lead.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company,
        message: parsed.data.message,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to save lead.",
    };
  }
}