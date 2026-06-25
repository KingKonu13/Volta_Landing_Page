import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { problem } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

export function Problem() {
  return (
    <Section id="problem" tone="muted">
      <SectionHeading
        eyebrow="Why it matters"
        title={problem.heading}
        intro={problem.intro}
        id="problem-heading"
      />

      <RevealGroup className="mt-14 overflow-hidden border-y border-[#1c1612]/12">
        <RevealItem className="grid gap-8 border-b border-[#1c1612]/12 py-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:py-12">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
              {problem.diagnosis.label}
            </p>
            <h3 className="mt-5 font-display text-[34px] leading-[1.04] tracking-[-0.022em] text-[#1c1612] sm:text-[42px]">
              {problem.diagnosis.title}
            </h3>
          </div>
          <p className="max-w-2xl text-[17px] leading-[1.55] tracking-[-0.002em] text-[#3b3128] sm:text-[18px]">
            {problem.diagnosis.desc}
          </p>
        </RevealItem>

        <RevealItem className="grid lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]">
          <div className="py-9 pr-0 lg:py-12 lg:pr-12">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
              Where momentum disappears
            </p>
            <ol className="mt-7 border-t border-[#1c1612]/12">
              {problem.points.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-4 border-b border-[#1c1612]/12 py-6">
                  <span className="font-mono text-[11px] font-medium tracking-[-0.005em] text-[#6c5e4e]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[28px] leading-[1.12] tracking-[-0.018em] text-[#1c1612] sm:text-[32px]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-[1.55] tracking-[-0.002em] text-[#3b3128]">
                      {renderEmphasis(p.desc)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-[#1c1612]/12 bg-[#f8f6f2] px-6 py-9 sm:px-7 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
            <div className="lg:pl-2">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
                {problem.resolution.label}
              </p>
              <h3 className="mt-5 max-w-xl font-display text-[32px] leading-[1.06] tracking-[-0.02em] text-[#1c1612] sm:text-[38px]">
                {problem.resolution.title}
              </h3>

              <div className="mt-8 grid gap-px border border-[#1c1612]/10 bg-[#1c1612]/10">
                {problem.resolution.steps.map((step) => (
                  <div key={step.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 bg-[#f8f6f2] px-5 py-4">
                    <ArrowRight size={15} strokeWidth={1.25} className="mt-1 text-[#0a7795]" aria-hidden />
                    <div>
                      <h4 className="font-display text-[22px] leading-[1.12] tracking-[-0.014em] text-[#1c1612]">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-[13px] leading-[1.5] text-[#3b3128]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-[#1c1612]/12 pt-5 text-[14px] leading-[1.55] tracking-[-0.002em] text-[#3b3128]">
                {problem.resolution.note}
              </p>
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}
