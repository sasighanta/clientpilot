"use client";

import { useFormStatus } from "react-dom";
import Button from "@/components/ui/Button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full"
    >
      {pending ? "Signing In..." : "Login"}
    </Button>
  );
}