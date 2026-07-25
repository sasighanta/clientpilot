import Link from "next/link";
import {
  Users,
  Search,
  ShieldCheck,
  FolderOpen,
  TrendingUp,
  Clock3,
  FilePlus2,
  LayoutDashboard,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import Navbar from "@/components/Navbar";
import LeadForm from "@/components/forms/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-8 py-16 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Lightweight CRM
          </span>

          <h1 className="mt-6 max-w-xl text-6xl font-black leading-tight text-slate-950">
            Manage Client Leads
            <br />
            Without the Chaos.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Never lose another inquiry.
            <br />
            <br />
            ClientPilot helps agencies capture leads,
            organize conversations and track every client
            from one modern dashboard.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="#lead-form"
              className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-700"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-slate-100"
            >
              Admin Login
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xl text-yellow-500">
              ⭐⭐⭐⭐⭐
            </span>

            <p className="text-sm text-slate-500">
              Designed for digital agencies and
              freelancers.
            </p>
          </div>

          <div className="mt-12 grid gap-4">
            <Card> 
              <Users className="h-8 w-8 text-emerald-600" />

              <div>
                <h3 className="font-semibold">
                  Lead Management
                </h3>

                <p className="text-sm text-slate-500">
                  Capture every inquiry automatically.
                </p>
              </div>
            </Card>

            <Card>
              <Search className="h-8 w-8 text-blue-600" />

              <div>
                <h3 className="font-semibold">
                  Smart Search
                </h3>

                <p className="text-sm text-slate-500">
                  Find clients instantly using powerful
                  search.
                </p>
              </div>
            </Card>

            <Card>
              <CheckCircle2 className="h-8 w-8 text-amber-500" />

              <div>
                <h3 className="font-semibold">
                  Status Tracking
                </h3>

                <p className="text-sm text-slate-500">
                  Monitor every lead from inquiry to
                  follow-up.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div id="lead-form">
          <LeadForm />
        </div>
      </section>

      {/* Why Choose ClientPilot */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-8">
          <SectionHeading
  badge="Why Choose ClientPilot?"
  title="Everything You Need to Manage Leads"
  description="ClientPilot helps agencies capture inquiries, organize client information and manage follow-ups from one intuitive dashboard."
/>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4">
                <ShieldCheck className="h-8 w-8 text-emerald-600" />
              </div>

              <h3 className="text-xl font-bold">
                Secure Data
              </h3>

              <p className="mt-3 text-slate-500">
                Safely store and manage every client
                inquiry.
              </p>
            </Card>

            <Card>
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4">
                <FolderOpen className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold">
                Organized Dashboard
              </h3>

              <p className="mt-3 text-slate-500">
                View every lead in one clean workspace.
              </p>
            </Card>

            <Card>
              <div className="mb-6 inline-flex rounded-2xl bg-amber-100 p-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>

              <h3 className="text-xl font-bold">
                Track Progress
              </h3>

              <p className="mt-3 text-slate-500">
                Monitor each lead from inquiry to
                follow-up.
              </p>
            </Card>

            <Card>
              <div className="mb-6 inline-flex rounded-2xl bg-purple-100 p-4">
                <Clock3 className="h-8 w-8 text-purple-600" />
              </div>

              <h3 className="text-xl font-bold">
                Save Time
              </h3>

              <p className="mt-3 text-slate-500">
                Spend less time managing spreadsheets and
                more time serving clients.
              </p>
            </Card>
          </div>
        </div>
      </section>
            {/* How It Works */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-8">
          <SectionHeading
  badge="How It Works"
  color="blue"
  title="Simple Workflow"
  description="From capturing a new inquiry to tracking its progress, ClientPilot keeps everything organized in one place."
/>

          <div className="mt-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
            {/* Step 1 */}
            <Card>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <FilePlus2 className="h-8 w-8 text-emerald-600" />
              </div>

              <div className="mb-3 text-sm font-bold text-emerald-600">
                STEP 1
              </div>

              <h3 className="text-2xl font-bold">
                Submit Inquiry
              </h3>

              <p className="mt-3 text-slate-500">
                Clients submit their project details through
                the lead form.
              </p>
            </Card>

            <div className="hidden text-5xl text-slate-300 lg:block">
              →
            </div>

            {/* Step 2 */}
            <Card>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <LayoutDashboard className="h-8 w-8 text-blue-600" />
              </div>

              <div className="mb-3 text-sm font-bold text-blue-600">
                STEP 2
              </div>

              <h3 className="text-2xl font-bold">
                Manage Leads
              </h3>

              <p className="mt-3 text-slate-500">
                Review every inquiry inside a centralized
                dashboard.
              </p>
            </Card>

            <div className="hidden text-5xl text-slate-300 lg:block">
              →
            </div>

            {/* Step 3 */}
            <Card>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>

              <div className="mb-3 text-sm font-bold text-emerald-600">
                STEP 3
              </div>

              <h3 className="text-2xl font-bold">
                Track Status
              </h3>

              <p className="mt-3 text-slate-500">
                Update lead progress and keep your pipeline
                organized.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Trusted Platform */}
<section className="bg-slate-900 py-20">
  <div className="mx-auto max-w-7xl px-8">
    <div className="text-center">
      <span className="rounded-full bg-emerald-600/20 px-4 py-2 text-sm font-semibold text-emerald-400">
        Trusted Platform
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white">
        Built for Modern Agencies
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
        ClientPilot simplifies lead management so teams can
        focus on building relationships instead of tracking
        spreadsheets.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* Card 1 */}
      <div className="cursor-pointer rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500">
        <Users className="mx-auto mb-5 h-10 w-10 text-emerald-400" />

        <h3 className="text-5xl font-black text-white">
          100+
        </h3>

        <p className="mt-3 text-slate-400">
          Leads Managed
        </p>
      </div>

      {/* Card 2 */}
      <div className="cursor-pointer rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500">
        <TrendingUp className="mx-auto mb-5 h-10 w-10 text-emerald-400" />

        <h3 className="text-5xl font-black text-white">
          99%
        </h3>

        <p className="mt-3 text-slate-400">
          Response Tracking
        </p>
      </div>

      {/* Card 3 */}
      <div className="cursor-pointer rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500">
        <Clock3 className="mx-auto mb-5 h-10 w-10 text-emerald-400" />

        <h3 className="text-5xl font-black text-white">
          24/7
        </h3>

        <p className="mt-3 text-slate-400">
          Access Anywhere
        </p>
      </div>

      {/* Card 4 */}
      <div className="cursor-pointer rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500">
        <ShieldCheck className="mx-auto mb-5 h-10 w-10 text-emerald-400" />

        <h3 className="text-5xl font-black text-white">
          Secure
        </h3>

        <p className="mt-3 text-slate-400">
          Cookie Authentication
        </p>
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-8">
    <SectionHeading
  badge="Testimonials"
  color="amber"
  title="What People Like About ClientPilot"
  description="Sample testimonials demonstrating the type of feedback a lightweight CRM aims to deliver."
/>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Card 1 */}
      <Card> 
        <Quote className="mb-5 h-10 w-10 text-emerald-600" />

        <div className="mb-4 flex gap-1 text-amber-500">
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
        </div>

        <p className="leading-7 italic text-slate-600">
          "ClientPilot keeps our client inquiries
          organized and easy to manage."
        </p>

        <div className="mt-6">
          <h3 className="font-bold">
            Alex Morgan
          </h3>

          <p className="text-sm text-slate-500">
            Agency Owner
          </p>
        </div>
      </Card>

      {/* Card 2 */}
      <Card>
        <Quote className="mb-5 h-10 w-10 text-emerald-600" />

        <div className="mb-4 flex gap-1 text-amber-500">
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
        </div>

        <p className="leading-7 italic text-slate-600">
          "The dashboard is simple, clean and helps our
          team follow up faster."
        </p>

        <div className="mt-6">
          <h3 className="font-bold">
            Priya Sharma
          </h3>

          <p className="text-sm text-slate-500">
            Marketing Consultant
          </p>
        </div>
      </Card>

      {/* Card 3 */}
      <Card>
        <Quote className="mb-5 h-10 w-10 text-emerald-600" />

        <div className="mb-4 flex gap-1 text-amber-500">
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
        </div>

        <p className="leading-7 italic text-slate-600">
          "Exactly the kind of lightweight CRM small
          agencies need."
        </p>

        <div className="mt-6">
          <h3 className="font-bold">
            Rahul Verma
          </h3>

          <p className="text-sm text-slate-500">
            Freelance Designer
          </p>
        </div>
      </Card>

    </div>

    <p className="mt-8 text-center text-sm text-slate-500">
      These testimonials are sample content included for
      demonstration purposes.
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-slate-500">
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