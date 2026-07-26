"use client";

import Link from "next/link";
import { useState } from "react";
import SubmitButton from "@/components/forms/SubmitButton";
import Button from "@/components/ui/Button";
import { ArrowLeft, Building2 } from "lucide-react";

import { login } from "@/actions/auth";

export default function LoginPage() {
  const [error, setError] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-slate-600 transition hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <form
          action={async (formData) => {
            setError("");

            const result = await login(formData);

            if (result?.error) {
              setError(result.error);
            }
          }}
          className="space-y-5 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl transition-all duration-300"
        >
          {/* Branding */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
              <Building2 className="h-8 w-8 text-emerald-600" />
            </div>

            <h1 className="text-4xl font-black text-slate-900">
              ClientPilot
            </h1>

            <p className="mt-3 text-slate-500">
  Secure access to the ClientPilot dashboard.
</p>
          </div>

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500"
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500"
          />

          {/* Error */}
          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="rounded"
              />
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <SubmitButton />

          {/* Demo Credentials */}
          <div className="rounded-xl bg-slate-100 p-4 text-sm">
            <p className="font-semibold">
  Demo Admin Credentials
</p>

            <p className="mt-2">
              Email:{" "}
              <span className="font-medium">
                admin@clientpilot.com
              </span>
            </p>

            <p>
              Password:{" "}
              <span className="font-medium">
                clientpilot123
              </span>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}