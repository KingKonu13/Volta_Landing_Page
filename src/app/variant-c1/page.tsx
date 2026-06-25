import type { Metadata } from "next";
import { Space_Grotesk, Newsreader, IBM_Plex_Mono } from "next/font/google";
import { Scenes } from "@/components/variants/c1/scenes";

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--c1-display",
});

const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  variable: "--c1-serif",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--c1-mono",
});

export const metadata: Metadata = {
  title: "Volta — Scroll-driven scenes (Variant C1)",
  description:
    "Volta turns source documents into an expert-reviewed Pre-IND briefing package.",
};

export default function VariantC1Page() {
  return (
    <div
      className={`${display.variable} ${serif.variable} ${mono.variable}`}
      style={{ fontFamily: "var(--c1-serif)" }}
    >
      <Scenes />
    </div>
  );
}
