import { FileSearch, LockKeyhole, ShieldCheck, UserRoundCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { trust } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

const trustIcons = [FileSearch, UserRoundCheck, ShieldCheck];
const assuranceItems = [
  { label: "Source documents stay central", Icon: FileSearch },
  { label: "Access and review steps are visible", Icon: LockKeyhole },
  { label: "Sponsor approval remains final", Icon: ShieldCheck },
] as const;

export function TrustLayer() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="scroll-mt-20 border-t border-[#1c1612] bg-[#1c1612] py-20 text-[#f8f6f2] sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.7fr)] lg:items-start">
          <Reveal>
            <div className="max-w-3xl">
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#ddd2c0]">
                Trust layer
              </span>
              <h2 id="trust-heading" className="text-display-sm mt-5 text-[#f8f6f2]">
                {trust.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.5] tracking-[-0.002em] text-[#f8f6f2]/72 sm:text-[18px]">
                {renderEmphasis(trust.body)}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="border border-[#f8f6f2]/15 bg-[#f8f6f2]/[0.045] p-6">
              <p className="font-display text-[30px] leading-[1.08] tracking-[-0.02em] text-[#f8f6f2]">
                {renderEmphasis(trust.sub)}
              </p>
              <div className="mt-7 grid gap-px border border-[#f8f6f2]/10 bg-[#f8f6f2]/10">
                {assuranceItems.map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-3 bg-[#1c1612]/92 px-4 py-3.5">
                    <Icon size={16} strokeWidth={1.1} className="shrink-0 text-[#ddd2c0]" aria-hidden />
                    <span className="text-[13px] leading-[1.45] text-[#f8f6f2]/70">{label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid auto-rows-fr items-stretch border-l border-t border-[#f8f6f2]/12 md:grid-cols-3">
          {trust.pillars.map((p, i) => {
            const Icon = trustIcons[i];

            return (
              <RevealItem key={p.title} className="h-full">
                <article className="group flex h-full min-h-[260px] flex-col justify-between border-b border-r border-[#f8f6f2]/12 bg-[#1c1612] p-7 transition-all duration-200 hover:bg-[#241d18] sm:p-8">
                  <Icon
                    size={38}
                    strokeWidth={0.85}
                    className="text-[#ddd2c0] transition-colors group-hover:text-[#f8f6f2]"
                    aria-hidden
                  />
                  <div className="mt-10">
                    <h3 className="font-display text-[25px] leading-[1.12] tracking-[-0.015em] text-[#f8f6f2]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#f8f6f2]/65">
                      {renderEmphasis(p.desc)}
                    </p>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
