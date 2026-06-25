import type { Metadata } from "next";
import { VariantBLanding } from "@/components/variants/b/landing";

export const metadata: Metadata = {
  title: "Volta — Variant B (Bento)",
  description:
    "Bento / modular grid landing variant for the Volta Pre-IND briefing platform.",
};

export default function VariantBPage() {
  return <VariantBLanding />;
}
