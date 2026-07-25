"use client";

import { useTransition } from "react";
import { updateLeadStatus } from "@/actions/updateLead";

export default function StatusButton({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  const [isPending, startTransition] = useTransition();

  const nextStatus =
    status === "New" ? "Contacted" : "New";

  const styles =
    status === "New"
      ? "bg-emerald-500 text-white hover:bg-emerald-600"
      : status === "Contacted"
      ? "bg-amber-500 text-white hover:bg-amber-600"
      : "bg-blue-500 text-white hover:bg-blue-600";

  const icon =
    status === "New"
      ? "🟢"
      : status === "Contacted"
      ? "🟡"
      : "🔵";

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(() => {
          updateLeadStatus(id, nextStatus);
        })
      }
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${styles} ${
        isPending
          ? "cursor-not-allowed opacity-70"
          : "hover:scale-105"
      }`}
    >
      <span>{icon}</span>

      <span>
        {isPending ? "Updating..." : status}
      </span>
    </button>
  );
}