import Link from "next/link";
import { Building2 } from "lucide-react";

interface NavbarProps {
  showDashboard?: boolean;
}

export default function Navbar({
  showDashboard = false,
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-100 p-2">
            <Building2 className="h-6 w-6 text-emerald-600" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              ClientPilot
            </h1>

            <p className="text-xs text-slate-500">
              Lightweight CRM
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 font-medium text-slate-600 transition hover:bg-slate-100"
          >
            Home
          </Link>

          {showDashboard ? (
            <Link
              href="/admin"
              className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800"
            >
              Admin Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}