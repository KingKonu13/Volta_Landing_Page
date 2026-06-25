import type { Metadata } from "next";
import { Space_Grotesk, Spline_Sans, IBM_Plex_Mono } from "next/font/google";
import { IndexNarrative } from "@/components/variants/c2/index-narrative";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--c2-display-font",
  display: "swap",
});

const body = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--c2-body-font",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--c2-mono-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volta — Pre-IND meeting prep",
  description:
    "Turn source documents into a well-organized, expert-reviewed Pre-IND briefing package.",
};

export default function VariantC2Page() {
  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={
        {
          // expose the fonts as the names the component references
          "--c2-display": "var(--c2-display-font)",
          "--c2-mono": "var(--c2-mono-font)",
          "--c2-surface": "#e9ebec",
          fontFamily: "var(--c2-body-font)",
        } as React.CSSProperties
      }
    >
      <IndexNarrative />
    </div>
  );
}
