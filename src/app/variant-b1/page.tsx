import type { Metadata } from "next";
import VariantB1 from "@/components/variants/b1/sections";

export const metadata: Metadata = {
  title: "Volta — Editorial Broadsheet (B1)",
  description:
    "Volta turns source documents into an expert-reviewed Pre-IND briefing package. Editorial masonry / broadsheet variant.",
};

export default function Page() {
  return <VariantB1 />;
}
