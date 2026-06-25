import { Section, SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="muted">
      <SectionHeading
        eyebrow="How it works"
        title={howItWorks.heading}
        intro={howItWorks.intro}
        id="how-it-works-heading"
      />

      {/* Editorial sequential grid — divided by single-pixel sand borders */}
      <RevealGroup className="mt-14 grid grid-cols-1 border-l border-t border-[#1c1612]/12 min-[720px]:grid-cols-2 min-[1100px]:grid-cols-4">
        {howItWorks.steps.map((step, i) => (
          <RevealItem key={step.title}>
            <div className="group flex min-h-[300px] flex-col border-b border-r border-[#1c1612]/12 bg-[#f0ece4] p-8 transition-all duration-200 hover:bg-[#f8f6f2] hover:border-[#1c1612]/20 sm:p-9">
              {/* Quiet step marker */}
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] font-medium leading-none tracking-[-0.005em] text-[#6c5e4e] transition-colors group-hover:text-[#1c1612]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                {i < howItWorks.steps.length - 1 && (
                  <span className="h-px w-10 bg-[#1c1612]/15 transition-all duration-200 group-hover:w-14 group-hover:bg-[#1c1612]/35" />
                )}
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-[24px] leading-[1.12] tracking-[-0.015em] text-[#1c1612]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.5] text-[#3b3128]">
                  {step.desc}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
