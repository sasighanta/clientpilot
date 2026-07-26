"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;

export async function login(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return {
      error: "Invalid email or password.",
    };
  }

  const cookieStore = await cookies();

 cookieStore.set("admin", "true", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
  maxAge: 60 * 60 * 24,
});
  redirect("/admin");
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("admin");

  redirect("/login");
}