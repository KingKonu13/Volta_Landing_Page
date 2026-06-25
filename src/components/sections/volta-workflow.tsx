import { Database, FileText, PackageCheck, UserRoundCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem, RevealText } from "@/components/ui/reveal";
import { voltaWorkflow } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

const workflowIcons = [Database, FileText, UserRoundCheck, PackageCheck];
const workflowIconColors = ["text-[#0a7795]", "text-[#c97a18]", "text-[#1f7a3f]", "text-[#7a3ea6]"];

export function VoltaWorkflow() {
  return (
    <Section id="volta-workflow" tone="light" className="pt-0">
      <SectionHeading
        eyebrow="Workflow"
        title={voltaWorkflow.heading}
        intro={voltaWorkflow.intro}
        id="volta-workflow-heading"
      />

      <RevealGroup className="mt-14 border-y border-[#1c1612]/12">
        {voltaWorkflow.cards.map((step, i) => {
          const Icon = workflowIcons[i];
          const isLast = i === voltaWorkflow.cards.length - 1;

          return (
            <RevealItem
              key={step.step}
              className={i === 0 ? "relative" : "relative border-t border-[#1c1612]/12"}
            >
              <article className="group relative grid gap-6 py-8 min-[760px]:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] min-[760px]:gap-12 min-[760px]:py-11">
                {!isLast && (
                  <span
                    className="absolute left-6 top-[5.75rem] bottom-[-2.75rem] w-px bg-[#1c1612]/12 min-[760px]:top-[6.25rem]"
                    aria-hidden
                  />
                )}

                <div className="relative z-10 flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#1c1612]/12 bg-[#f8f6f2] ring-8 ring-[#f8f6f2] transition-all duration-200 group-hover:border-[#1c1612]/25 group-hover:bg-[#f0ece4]">
                    <Icon
                      size={21}
                      strokeWidth={1.15}
                      className={`${workflowIconColors[i]} transition-colors group-hover:text-[#1c1612]`}
                      aria-hidden
                    />
                  </span>

                  <div className="pt-1">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
                      Step {step.step}
                    </p>
                    <span
                      className="mt-4 hidden h-px w-16 bg-[#1c1612]/12 transition-all duration-200 group-hover:w-20 group-hover:bg-[#1c1612]/30 min-[760px]:block"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="relative z-10 pl-[4.25rem] min-[760px]:pl-0">
                  <div className="grid gap-6 min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(12rem,16rem)] min-[1000px]:gap-12">
                    <div className="max-w-3xl">
                      <h3 className="font-display text-[30px] leading-[1.08] tracking-[-0.018em] text-[#1c1612] sm:text-[34px]">
                        <RevealText>{step.title}</RevealText>
                      </h3>
                      <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] tracking-[-0.002em] text-[#3b3128]">
                        {renderEmphasis(step.desc)}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#1c1612]/10 pt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#6c5e4e] min-[1000px]:border-t-0 min-[1000px]:pt-1">
                      {step.tags.map((tag) => (
                        <li key={tag} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[#1c1612]/25" aria-hidden />
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
