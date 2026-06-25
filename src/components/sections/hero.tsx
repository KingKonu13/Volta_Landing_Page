import { ArrowRight, ArrowUpRight, Check, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero, cta, trustLine } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

const heroFlow = [
  { label: "Data room", tone: "bg-[#0a7795]" },
  { label: "Draft", tone: "bg-[#c97a18]" },
  { label: "Expert review", tone: "bg-[#1f7a3f]" },
  { label: "Package", tone: "bg-[#7a3ea6]" },
] as const;

const packageItems = [
  "Nonclinical study summary",
  "CMC narrative",
  "Clinical plan",
  "FDA question prep",
] as const;

function HeroFilingVisual() {
  return (
    <div className="relative w-full overflow-hidden border border-[#1c1612]/12 bg-[radial-gradient(circle_at_16%_18%,rgba(10,119,149,0.13),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(201,122,24,0.12),transparent_30%),linear-gradient(135deg,#f8f6f2_0%,#f0ece4_100%)] p-5 shadow-[0_24px_80px_-64px_rgba(28,22,18,0.55)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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

      <div className="mt-7 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#6c5e4e]">
        {heroFlow.map((item, i) => (
          <div key={item.label} className="contents">
            <div className="flex min-w-0 flex-col items-center gap-2 text-center">
              <span className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
              <span className="truncate">{item.label}</span>
            </div>
            {i < heroFlow.length - 1 && <ArrowRight size={13} strokeWidth={1.25} className="text-[#1c1612]/30" aria-hidden />}
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-px border border-[#1c1612]/10 bg-[#1c1612]/10">
        {packageItems.map((item, i) => (
          <div key={item} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-[#f8f6f2]/88 px-4 py-3">
            <FileText size={15} strokeWidth={1.15} className="text-[#6c5e4e]" aria-hidden />
            <span className="text-[13px] leading-[1.5] text-[#3b3128]">{item}</span>
            <span className={i === 0 ? "text-[#1f7a3f]" : "text-[#6c5e4e]"}>
              <Check size={14} strokeWidth={1.4} aria-hidden />
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#1c1612]/10 pt-4 text-[12px] leading-[1.4] tracking-[-0.005em] text-[#3b3128]/78">
        <span>AI assembles</span>
        <ArrowRight size={13} strokeWidth={1.25} className="text-[#1c1612]/30" aria-hidden />
        <span>experts review</span>
        <ArrowRight size={13} strokeWidth={1.25} className="text-[#1c1612]/30" aria-hidden />
        <span>claims stay sourced</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#f8f6f2] pt-[calc(88px+48px)]">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#0a7795]/[0.055] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full bg-[#c97a18]/[0.06] blur-3xl" aria-hidden />

      <div className="container-page relative pb-24">
        <header className="grid grid-cols-1 items-start gap-y-10 py-12 lg:grid-cols-2 lg:gap-x-[58px] lg:py-[67px]">
          <Reveal>
            <div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
                {hero.eyebrow}
              </span>
              <h1 className="text-display mt-5 max-w-[680px] py-3 text-[#1c1612]">
                {hero.headline}
              </h1>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {hero.badges.map((badge) => (
                  <span key={badge} className="inline-flex items-center rounded-full border border-[#1c1612]/10 bg-[#1c1612]/[0.04] px-3 py-1.5 text-[12px] leading-none tracking-[-0.005em] text-[#3b3128]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex max-w-[620px] flex-col items-start gap-7">
              <p className="text-[17px] leading-[1.5] tracking-[-0.002em] text-[#3b3128] sm:text-[18px]">
                {renderEmphasis(hero.sub)}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={cta.primary.href} variant="primary" size="lg">
                  {cta.primary.label}
                </Button>
                <Button href={cta.secondary.href} variant="secondary" size="lg">
                  {cta.secondary.label}
                </Button>
              </div>
              <HeroFilingVisual />
            </div>
          </Reveal>
        </header>

        <Reveal delay={0.14}>
          <div className="border-y border-[#1c1612]/12 py-5">
            <div className="flex flex-col gap-5 text-[13px] leading-[1.5] text-[#3b3128]/75 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md">{renderEmphasis(trustLine)}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {hero.bullets.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <ArrowUpRight size={13} className="text-[#0a7795]/80" aria-hidden />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
