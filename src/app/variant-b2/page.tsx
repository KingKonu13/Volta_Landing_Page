import type { Metadata } from "next";
import { JetBrains_Mono, Inter_Tight } from "next/font/google";
import { VariantB2Landing } from "@/components/variants/b2/landing";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-b2-mono",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-b2-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volta — Variant B2 (Mono Control Panel)",
  description:
    "Mono dashboard / control-panel landing variant for the Volta Pre-IND briefing platform.",
};

export default function VariantB2Page() {
  return (
    <div className={`${jetBrainsMono.variable} ${interTight.variable}`}>
      <VariantB2Landing />
    </div>
  );
}
