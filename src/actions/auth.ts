"use server";

import { cookies } from "next/headers";

export async function login(email: string, password: string) {
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const cookieStore = await cookies();

    cookieStore.set("admin", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return { success: true };
  }

  return {
    success: false,
    message: "Invalid credentials",
  };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin");
}