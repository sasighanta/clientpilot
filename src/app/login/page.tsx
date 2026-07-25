"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import {
  ArrowLeft,
  Building2,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    // Simulate a short loading state
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    if (
      email === "admin@clientpilot.com" &&
      password === "clientpilot123"
    ) {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      setError("Invalid email or password.");
      setLoading(false);
    }
  }

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
          onSubmit={login}
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
              Secure access to your lead management
              dashboard.
            </p>
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-emerald-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border border-slate-300 p-3 pr-12 outline-none transition focus:border-emerald-500"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          
          </div>

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
 <Button
  type="submit"
  disabled={loading}
  className="w-full"
>
  {loading ? "Signing In..." : "Login"}
</Button>
          

          {/* Demo Credentials */}
          <div className="rounded-xl bg-slate-100 p-4 text-sm">
            <p className="font-semibold">
              Demo Credentials
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