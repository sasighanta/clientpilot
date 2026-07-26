"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { createLead } from "@/actions/lead";
import {
  leadSchema,
  LeadFormData,
} from "@/lib/validations/lead";

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);

    const result = await createLead(data);

    if (result.success) {
      toast.success("Lead submitted successfully!");
      reset();
    } else {
      toast.error(result.message || "Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
    >
      <h2 className="mb-2 text-2xl font-bold">
        Start Your Project
      </h2>

      <p className="mb-6 text-slate-500">
        Tell us about your project and we&apos;ll get back to
        you.
      </p>

      <div className="space-y-4">
        <div>
          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full rounded-xl border p-3"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border p-3"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("company")}
            placeholder="Company"
            className="w-full rounded-xl border p-3"
          />

          {errors.company && (
            <p className="mt-1 text-sm text-red-500">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border p-3"
          />

          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
<Button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Submit"}
</Button>
      </div>
    </form>
  );
}