import { Database, Sparkles, UserRoundCheck, FileCheck2 } from "lucide-react";
import { workflow } from "@/content/site";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const icons = [Database, Sparkles, UserRoundCheck, FileCheck2];

export function WorkflowStrip() {
  return (
    <section
      aria-label="How a package is built"
      className="border-y border-[#ddd2c0] bg-[#f0ede8]"
    >
      <div className="container-page py-10 sm:py-12">
        <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item, i) => {
            const Icon = icons[i];
            const isLast = i === workflow.length - 1;
            return (
              <RevealItem key={item.step}>
                <div className="group relative flex items-start gap-4">
                  {/* Step icon */}
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ddd2c0] bg-[#f8f6f2] text-[#1c1612] transition-colors group-hover:border-[#6c5e4e]/40 group-hover:bg-[#f0ece4]">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6c5e4e]">
                      {item.step}
                    </p>
                    <p className="mt-0.5 font-display text-sm font-medium text-[#272626]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-[#9b9b9b]">{item.desc}</p>
                  </div>

                  {/* Thin connector line between steps (desktop only) */}
                  {!isLast && (
                    <div
                      className="absolute -right-4 top-5 hidden h-px w-8 bg-[#ddd2c0] lg:block"
                      aria-hidden
                    />
                  )}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
