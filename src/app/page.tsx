import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { VoltaWorkflow } from "@/components/sections/volta-workflow";
import { Problem } from "@/components/sections/problem";
import { Outputs } from "@/components/sections/outputs";
import { TrustLayer } from "@/components/sections/trust-layer";
import { AudienceBlocks } from "@/components/sections/audience-blocks";
import { ExpertNetwork } from "@/components/sections/expert-network";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#1c1612] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#f8f6f2]"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <VoltaWorkflow />
        <Problem />
        <Outputs />
        <TrustLayer />
        <AudienceBlocks />
        <ExpertNetwork />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
