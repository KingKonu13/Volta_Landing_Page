import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem, RevealText } from "@/components/ui/reveal";
import { WorkflowSplit } from "@/components/variants/c/workflow-split";
import {
  hero,
  cta,
  trustLine,
  outputs,
  trust,
  expertNetwork,
  finalCta,
} from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

const stepBadges = [
  { label: "Data room", tone: "bg-[#0a7795]" },
  { label: "Draft", tone: "bg-[#c97a18]" },
  { label: "Expert review", tone: "bg-[#1f7a3f]" },
  { label: "Package", tone: "bg-[#7a3ea6]" },
] as const;

function StickyLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
      {children}
    </span>
  );
}

export default function VariantCPage() {
  return (
    <>
      <a
        href="#variant-c-top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#1c1612] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#f8f6f2]"
      >
        Skip to content
      </a>

      <main id="variant-c-top" className="bg-[#f8f6f2] text-[#1c1612]">
        {/* ============================ HERO ============================ */}
        <section className="relative overflow-hidden border-b border-[#1c1612]/12">
          <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#0a7795]/[0.06] blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-[#c97a18]/[0.06] blur-3xl" aria-hidden />

          <div className="container-page relative grid grid-cols-1 gap-x-16 gap-y-12 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-28">
            {/* Sticky left — the persistent pitch */}
            <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
              <Reveal>
                <StickyLabel>{hero.eyebrow}</StickyLabel>
                <h1 className="text-display mt-6 max-w-[560px] text-[#1c1612]">
                  <RevealText>{hero.headline}</RevealText>
                </h1>
                <p className="mt-7 max-w-[460px] text-[17px] leading-[1.55] tracking-[-0.002em] text-[#3b3128] sm:text-[18px]">
                  {renderEmphasis(hero.sub)}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={cta.primary.href} variant="primary" size="lg">
                    {cta.primary.label}
                  </Button>
                  <Button href={cta.secondary.href} variant="secondary" size="lg">
                    {cta.secondary.label}
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Scrolling right — supporting detail */}
            <div className="flex flex-col gap-7">
              <Reveal delay={0.1}>
                <div className="relative w-full overflow-hidden rounded-[16px] border border-[#1c1612]/12 bg-[radial-gradient(circle_at_16%_18%,rgba(10,119,149,0.13),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(201,122,24,0.12),transparent_30%),linear-gradient(135deg,#f8f6f2_0%,#f0ece4_100%)] p-6 shadow-[0_24px_80px_-64px_rgba(28,22,18,0.55)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
                        Pre-IND workspace
                      </p>
                      <p className="mt-2 font-display text-[28px] leading-[1.08] tracking-[-0.02em] text-[#1c1612]">
                        Source-linked Pre-IND brief
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1c1612]/10 bg-[#1c1612]/[0.06] px-3 py-1.5 text-[12px] leading-none tracking-[-0.005em] text-[#3b3128]">
                      <ShieldCheck size={13} strokeWidth={1.25} aria-hidden />
                      Expert reviewed
                    </span>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#6c5e4e]">
                    {stepBadges.map((item, i) => (
                      <span key={item.label} className="inline-flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${item.tone}`} aria-hidden />
                        {item.label}
                        {i < stepBadges.length - 1 && (
                          <ArrowRight size={13} strokeWidth={1.25} className="ml-1 text-[#1c1612]/30" aria-hidden />
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-px overflow-hidden rounded-[8px] border border-[#1c1612]/10 bg-[#1c1612]/10">
                    {["Nonclinical study summary", "CMC narrative", "Clinical plan", "FDA question prep"].map((item, i) => (
                      <div key={item} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-[#f8f6f2]/90 px-4 py-3">
                        <FileText size={15} strokeWidth={1.15} className="text-[#6c5e4e]" aria-hidden />
                        <span className="text-[13px] leading-[1.5] text-[#3b3128]">{item}</span>
                        <span className={i === 0 ? "text-[#1f7a3f]" : "text-[#6c5e4e]"}>
                          <Check size={14} strokeWidth={1.4} aria-hidden />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="flex flex-wrap gap-2.5">
                  {hero.badges.map((badge) => (
                    <span key={badge} className="inline-flex items-center rounded-full border border-[#1c1612]/10 bg-[#1c1612]/[0.04] px-3 py-1.5 text-[12px] leading-none tracking-[-0.005em] text-[#3b3128]">
                      {badge}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="grid gap-3 border-t border-[#1c1612]/12 pt-6">
                  {hero.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.5] tracking-[-0.005em] text-[#3b3128]">
                      <span className="mt-1.5 inline-flex h-px w-6 shrink-0 bg-[#0a7795]/70" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.24}>
                <p className="flex items-center gap-2.5 border-t border-[#1c1612]/12 pt-6 text-[13px] leading-[1.5] text-[#3b3128]/80">
                  <ArrowUpRight size={14} className="shrink-0 text-[#0a7795]/80" aria-hidden />
                  <span>{renderEmphasis(trustLine)}</span>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================== WORKFLOW ========================== */}
        <section id="volta-workflow" className="border-b border-[#1c1612]/12">
          <div className="container-page py-20 lg:py-28">
            <WorkflowSplit />
          </div>
        </section>

        {/* =========================== OUTPUTS ========================== */}
        <section id="outputs" className="border-b border-[#1c1612]/12 bg-[#f0ece4]/40">
          <div className="container-page grid grid-cols-1 gap-x-16 gap-y-10 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-28">
            {/* Sticky left context */}
            <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
              <Reveal>
                <StickyLabel>What Volta delivers</StickyLabel>
                <h2 className="text-display-sm mt-5 max-w-[420px] text-[#1c1612]">
                  {outputs.heading}
                </h2>
                <p className="mt-5 max-w-[400px] text-[15px] leading-[1.6] text-[#3b3128]/85">
                  {renderEmphasis(outputs.intro)}
                </p>

                <div className="mt-8 rounded-[14px] border border-[#1c1612]/12 bg-[#f8f6f2] p-6">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
                    {outputs.summary.label}
                  </p>
                  <p className="mt-3 text-[17px] leading-[1.4] tracking-[-0.01em] text-[#1c1612]">
                    {outputs.summary.title}
                  </p>
                  <ul className="mt-5 grid gap-2.5">
                    {outputs.summary.checks.map((check) => (
                      <li key={check} className="flex items-center gap-2.5 text-[14px] leading-[1.5] text-[#3b3128]">
                        <Check size={15} strokeWidth={1.5} className="shrink-0 text-[#1f7a3f]" aria-hidden />
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Scrolling right — output items */}
            <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[#1c1612]/12 bg-[#1c1612]/10 sm:grid-cols-2">
              {outputs.items.map((item) => (
                <RevealItem key={item.title} className="flex flex-col bg-[#f8f6f2] p-6">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#948572]">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-[19px] leading-[1.2] tracking-[-0.01em] text-[#1c1612]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[#3b3128]">
                    {renderEmphasis(item.desc)}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-[#1c1612]/10 bg-[#1c1612]/[0.03] px-2.5 py-1 text-[11px] leading-none tracking-[-0.005em] text-[#3b3128]">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="container-page pb-20 lg:pb-28">
            <Reveal>
              <div className="rounded-[14px] border border-[#1c1612]/12 bg-[#1c1612] p-8 text-[#f8f6f2] lg:p-10">
                <h3 className="font-display text-[24px] leading-[1.2] tracking-[-0.01em]">
                  {outputs.completion.title}
                </h3>
                <p className="mt-4 max-w-[720px] text-[15px] leading-[1.6] text-[#f8f6f2]/75">
                  {outputs.completion.desc}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================ TRUST =========================== */}
        <section id="trust" className="border-b border-[#1c1612]/12">
          <div className="container-page grid grid-cols-1 gap-x-16 gap-y-10 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-28">
            <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
              <Reveal>
                <StickyLabel>Trust</StickyLabel>
                <h2 className="text-display-sm mt-5 max-w-[420px] text-[#1c1612]">
                  {trust.heading}
                </h2>
                <p className="mt-5 max-w-[420px] text-[16px] leading-[1.6] text-[#3b3128]">
                  {renderEmphasis(trust.sub)}
                </p>
                <p className="mt-5 max-w-[420px] text-[15px] leading-[1.6] text-[#3b3128]/85">
                  {trust.body}
                </p>
              </Reveal>
            </div>

            <RevealGroup className="flex flex-col gap-px overflow-hidden rounded-[14px] border border-[#1c1612]/12 bg-[#1c1612]/10">
              {trust.pillars.map((pillar, i) => (
                <RevealItem key={pillar.title} className="flex items-start gap-5 bg-[#f8f6f2] p-7">
                  <span className="font-mono text-[13px] font-medium tabular-nums text-[#948572]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[19px] leading-[1.2] tracking-[-0.01em] text-[#1c1612]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 max-w-[520px] text-[14px] leading-[1.6] text-[#3b3128]">
                      {renderEmphasis(pillar.desc)}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* ======================= EXPERT NETWORK ======================= */}
        <section id="expert-network" className="border-b border-[#1c1612]/12 bg-[#f0ece4]/40">
          <div className="container-page grid grid-cols-1 gap-x-16 gap-y-10 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-28">
            <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
              <Reveal>
                <StickyLabel>Expert network</StickyLabel>
                <h2 className="text-display-sm mt-5 max-w-[420px] text-[#1c1612]">
                  {expertNetwork.heading}
                </h2>
                <p className="mt-5 max-w-[420px] text-[15px] leading-[1.6] text-[#3b3128]/85">
                  {renderEmphasis(expertNetwork.intro)}
                </p>

                <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-[12px] border border-[#1c1612]/12 bg-[#1c1612]/10">
                  {expertNetwork.stats.map((stat) => (
                    <div key={stat.value} className="bg-[#f8f6f2] px-4 py-5 text-center">
                      <p className="font-display text-[20px] leading-none tracking-[-0.01em] text-[#1c1612]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[12px] leading-[1.3] text-[#6c5e4e]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[#1c1612]/12 bg-[#1c1612]/10 sm:grid-cols-2">
              {expertNetwork.domains.map((domain) => (
                <RevealItem key={domain} className="flex items-center gap-3.5 bg-[#f8f6f2] px-6 py-6">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#7a3ea6]" aria-hidden />
                  <span className="text-[16px] leading-[1.3] tracking-[-0.005em] text-[#1c1612]">
                    {domain}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* =========================== FINAL CTA ======================== */}
        <section id="sponsors" className="bg-[#1c1612] text-[#f8f6f2]">
          <div className="container-page grid grid-cols-1 items-end gap-x-16 gap-y-10 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:py-28">
            <Reveal>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#f8f6f2]/55">
                Next step
              </span>
              <h2 className="text-display mt-6 max-w-[520px] text-[#f8f6f2]">
                <RevealText>{finalCta.heading}</RevealText>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-8 lg:items-end">
                <p className="max-w-[460px] text-[17px] leading-[1.55] tracking-[-0.002em] text-[#f8f6f2]/80 lg:text-right">
                  {renderEmphasis(finalCta.sub)}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={cta.primary.href}
                    className="inline-flex items-center justify-center rounded-[8px] bg-[#f8f6f2] px-6 py-3 text-[15px] font-medium leading-[1.55] tracking-[-0.005em] text-[#1c1612] transition-all duration-200 hover:bg-white active:scale-[0.98]"
                  >
                    {cta.primary.label}
                  </Link>
                  <Link
                    href={cta.secondary.href}
                    className="inline-flex items-center justify-center rounded-[8px] border border-[#f8f6f2]/25 px-6 py-3 text-[15px] font-medium leading-[1.55] tracking-[-0.005em] text-[#f8f6f2] transition-all duration-200 hover:border-[#f8f6f2]/60 active:scale-[0.98]"
                  >
                    {cta.secondary.label}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
