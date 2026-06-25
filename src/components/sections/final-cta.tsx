import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { finalCta, cta } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="border-t border-[#1c1612]/12 bg-[#f8f6f2] py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
                Next milestone
              </span>
              <h2 id="final-cta-heading" className="text-display-sm mx-auto mt-4 max-w-3xl text-[#1c1612]">
                {finalCta.heading}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-8 max-w-xl border-t border-[#1c1612]/12 pt-6">
              <p className="text-[16px] leading-[1.5] tracking-[-0.002em] text-[#3b3128]">
                {renderEmphasis(finalCta.sub)}
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={cta.primary.href} variant="primary" size="lg">
                  {cta.primary.label}
                </Button>
                <Button href={cta.secondary.href} variant="secondary" size="lg">
                  {cta.secondary.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
