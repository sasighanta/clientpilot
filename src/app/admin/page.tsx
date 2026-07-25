import Link from "next/link";
import { prisma } from "@/lib/prisma";
import StatusButton from "@/components/dashboard/StatusButton";
import { logout } from "@/actions/auth";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  Users,
  UserPlus,
  CheckCircle2,
  CalendarDays,
  Search,
  UserCircle,
  ArrowLeft,
} from "lucide-react";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;

  const leads = await prisma.lead.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayLeads = leads.filter(
    (lead) => new Date(lead.createdAt) >= today
  ).length;

  if (leads.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
        <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
          <div className="mb-4 text-6xl">📂</div>

          <h2 className="text-3xl font-bold">
            No Leads Yet
          </h2>

          <p className="mt-4 text-slate-500">
            Start by submitting a lead from the landing
            page.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Go to Landing Page
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl">

        {/* Premium Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-black">
              Lead Management Dashboard
            </h1>

            <p className="mt-3 text-slate-500">
              Welcome back, Admin 👋
            </p>

            <p className="text-slate-500">
              Manage all incoming client inquiries.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-md">
            <div className="flex items-center gap-3">
              <UserCircle className="h-12 w-12 text-emerald-600" />

              <div>
                <h3 className="font-bold">
                  Admin
                </h3>

                <p className="text-sm text-slate-500">
                  admin@clientpilot.com
                </p>
              </div>
            </div>

            <form action={logout} className="mt-5">
              <Button type="submit" variant="danger">
  Logout
</Button>
            </form>
          </div>
        </div>

        {/* Premium Analytics Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          <Card className="rounded-2xl border p-6 hover:-translate-y-1">
            <Users className="mb-3 h-10 w-10 text-emerald-600" />

            <p className="text-slate-500">
              Total Leads
            </p>

            <h2 className="mt-2 text-5xl font-black">
              {totalLeads}
            </h2>
          </Card>

          <Card className="rounded-2xl p-6 hover:-translate-y-1">
            <UserPlus className="mb-3 h-10 w-10 text-blue-600" />

            <p className="text-slate-500">
              New Leads
            </p>

            <h2 className="mt-2 text-5xl font-black">
              {newLeads}
            </h2>
          </Card>

          <Card className="rounded-2xl p-6 hover:-translate-y-1">
            <CheckCircle2 className="mb-3 h-10 w-10 text-amber-500" />

            <p className="text-slate-500">
              Contacted
            </p>

            <h2 className="mt-2 text-5xl font-black">
              {contactedLeads}
            </h2>
          </Card>

          <Card className="rounded-2xl p-6 hover:-translate-y-1">
            <CalendarDays className="mb-3 h-10 w-10 text-purple-600" />

            <p className="text-slate-500">
              Today's Leads
            </p>

            <h2 className="mt-2 text-5xl font-black">
              {todayLeads}
            </h2>
          </Card>
        </div>
                {/* Search */}
        <form className="mb-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">
              Search Leads
            </h2>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
              <Search className="h-5 w-5 text-slate-400" />

              <input
                name="search"
                defaultValue={search}
                placeholder="Search by client name or email..."
                className="w-full text-lg outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </form>

        {/* Leads Table */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <table className="w-full">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-5 text-left">Name</th>
                <th className="p-5 text-left">Email</th>
                <th className="p-5 text-left">Company</th>
                <th className="p-5 text-left">Submitted</th>
                <th className="p-5 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b transition-colors hover:bg-emerald-50"
                >
                  <td className="p-5 font-medium">
                    {lead.name}
                  </td>

                  <td className="p-5">
                    {lead.email}
                  </td>

                  <td className="p-5">
                    {lead.company || "-"}
                  </td>

                  <td className="p-5">
                    {new Date(
                      lead.createdAt
                    ).toLocaleDateString("en-IN")}
                  </td>

                  <td className="p-5">
                    <StatusButton
                      id={lead.id}
                      status={lead.status}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t py-8 text-center text-sm text-slate-500">
        <p>© 2026 ClientPilot</p>

        <p className="mt-2">
          Built for Digital Heroes Training Task
        </p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-semibold text-emerald-600 hover:underline"
        >
          Digital Heroes
        </a>
      </footer>
    </main>
  );
}