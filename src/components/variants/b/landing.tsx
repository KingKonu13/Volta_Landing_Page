"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  FileText,
  PackageCheck,
  ShieldCheck,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";
import { cn, renderEmphasis } from "@/lib/utils";
import {
  hero,
  voltaWorkflow,
  outputs,
  trust,
  audiences,
  expertNetwork,
  finalCta,
  cta,
} from "@/content/site";
import { Reveal, RevealGrid, RevealTile } from "@/components/variants/b/reveal";

/* ------------------------------------------------------------------ */
/* Shared tile primitives                                              */
/* ------------------------------------------------------------------ */

function Tile({
  children,
  className,
  inverted = false,
}: {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <RevealTile className={className}>
      <div
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[24px] p-6 transition-all duration-300 sm:p-7",
          inverted
            ? "bg-[#1c1612] text-[#f0ece4] shadow-[0_30px_80px_-50px_rgba(28,22,18,0.85)]"
            : "border border-[#1c1612]/10 bg-[#f0ece4] text-[#1c1612] hover:border-[#1c1612]/20",
        )}
      >
        {children}
      </div>
    </RevealTile>
  );
}

function TileLabel({
  children,
  inverted = false,
}: {
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[10px] font-medium uppercase tracking-[0.18em]",
        inverted ? "text-[#beae93]" : "text-[#6c5e4e]",
      )}
    >
      {children}
    </span>
  );
}

const stepColors = ["text-[#0a7795]", "text-[#c97a18]", "text-[#1f7a3f]", "text-[#7a3ea6]"];
const stepIcons: LucideIcon[] = [Database, FileText, UserRoundCheck, PackageCheck];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroBlock() {
  return (
    <section id="top" className="container-page relative pt-28 pb-6 sm:pt-32">
      <div
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[44rem] max-w-full -translate-x-1/2 rounded-full bg-[#c97a18]/[0.07] blur-3xl"
        aria-hidden
      />
      <Reveal className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1c1612]/12 bg-[#f0ece4] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1f7a3f]" aria-hidden />
            {hero.eyebrow}
          </span>
        </div>
        <h1 className="text-display mt-6 max-w-[16ch] text-[#1c1612]">{hero.headline}</h1>
        <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.5] tracking-[-0.002em] text-[#3b3128] sm:text-[18px]">
          {renderEmphasis(hero.sub)}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={cta.primary.href}
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#1c1612] px-6 py-3 text-[15px] font-medium tracking-[-0.005em] text-[#f8f6f2] transition-all duration-200 hover:bg-[#131110] active:scale-[0.98]"
          >
            {cta.primary.label}
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
          </Link>
          <Link
            href={cta.secondary.href}
            className="inline-flex items-center justify-center rounded-[10px] border border-[#1c1612]/15 px-6 py-3 text-[15px] font-medium tracking-[-0.005em] text-[#1c1612] transition-all duration-200 hover:border-[#1c1612]/40 hover:bg-[#1c1612]/[0.025] active:scale-[0.98]"
          >
            {cta.secondary.label}
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {hero.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-[#1c1612]/10 bg-[#1c1612]/[0.04] px-3 py-1.5 text-[12px] leading-none tracking-[-0.005em] text-[#3b3128]"
            >
              {badge}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bento grid                                                          */
/* ------------------------------------------------------------------ */

function BentoGrid() {
  const [s1, s2, s3, s4] = voltaWorkflow.cards;
  const [o1, o2, o3] = outputs.items;

  return (
    <section className="container-page py-10 sm:py-14">
      <RevealGrid className="grid auto-rows-auto grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
        {/* Big feature tile — what Volta delivers */}
        <Tile inverted className="lg:col-span-7 lg:row-span-2">
          <TileLabel inverted>{outputs.summary.label}</TileLabel>
          <h2 className="text-display-sm mt-5 max-w-[20ch] text-[#f8f6f2]">
            {outputs.summary.title}
          </h2>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-[1.55] tracking-[-0.002em] text-[#ddd2c0]">
            {renderEmphasis(outputs.summary.desc)}
          </p>
          <ul className="mt-auto grid gap-2.5 pt-8">
            {outputs.summary.checks.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 text-[14px] leading-[1.5] text-[#f0ece4]"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0ece4]/12">
                  <Check size={12} strokeWidth={1.8} className="text-[#beae93]" aria-hidden />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Tile>

        {/* Trust pillars stacked */}
        <Tile className="lg:col-span-5">
          <TileLabel>Trust</TileLabel>
          <h3 className="font-display mt-4 text-[24px] leading-[1.1] tracking-[-0.015em] text-[#1c1612]">
            {trust.heading}
          </h3>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-[16px] border border-[#1c1612]/10 bg-[#1c1612]/10">
            {trust.pillars.map((p, i) => (
              <li
                key={p.title}
                className="flex items-start gap-3 bg-[#f8f6f2] px-4 py-3.5"
              >
                <span
                  className={cn(
                    "mt-0.5 font-mono text-[11px] font-medium",
                    stepColors[i % stepColors.length],
                  )}
                >
                  0{i + 1}
                </span>
                <div>
                  <p className="text-[14px] font-medium tracking-[-0.005em] text-[#1c1612]">
                    {p.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.5] text-[#6c5e4e]">
                    {renderEmphasis(p.desc)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Tile>

        {/* Two small stat / assurance tiles */}
        <Tile className="lg:col-span-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <TileLabel>Scope</TileLabel>
              <p className="font-display mt-3 text-[34px] leading-[0.95] tracking-[-0.02em] text-[#1c1612]">
                Fixed
              </p>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-[#6c5e4e]">
                Milestone pricing and review boundaries defined before work starts.
              </p>
            </div>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1c1612]/12 bg-[#f8f6f2]">
              <ShieldCheck size={18} strokeWidth={1.3} className="text-[#1f7a3f]" aria-hidden />
            </span>
          </div>
        </Tile>

        {/* Workflow tile — full width band of 4 steps */}
        <Tile className="lg:col-span-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <TileLabel>Workflow</TileLabel>
              <h3 className="font-display mt-3 text-[26px] leading-[1.08] tracking-[-0.015em] text-[#1c1612]">
                {voltaWorkflow.heading}
              </h3>
            </div>
            <p className="max-w-[42ch] text-[13px] leading-[1.5] text-[#6c5e4e]">
              {voltaWorkflow.intro}
            </p>
          </div>
          <div className="mt-7 grid gap-px overflow-hidden rounded-[16px] border border-[#1c1612]/10 bg-[#1c1612]/10 sm:grid-cols-2 lg:grid-cols-4">
            {voltaWorkflow.cards.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={step.step} className="flex flex-col bg-[#f8f6f2] p-5">
                  <div className="flex items-center justify-between">
                    <Icon
                      size={20}
                      strokeWidth={1.2}
                      className={stepColors[i]}
                      aria-hidden
                    />
                    <span className="font-mono text-[11px] font-medium text-[#6c5e4e]">
                      {step.step}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] font-medium tracking-[-0.01em] text-[#1c1612]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.5] text-[#6c5e4e]">
                    {renderEmphasis(step.desc)}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-[#1c1612]/10 pt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#948572]">
                    {step.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Tile>

        {/* Output highlight tiles */}
        {[o1, o2, o3].map((item) => (
          <Tile key={item.title} className="lg:col-span-4">
            <TileLabel>{item.category}</TileLabel>
            <h3 className="font-display mt-4 text-[20px] leading-[1.12] tracking-[-0.012em] text-[#1c1612]">
              {item.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.55] text-[#6c5e4e]">
              {renderEmphasis(item.desc)}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-[#1c1612]/10 bg-[#f8f6f2] px-2.5 py-1 text-[11px] leading-none text-[#54483b]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Tile>
        ))}
      </RevealGrid>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Audiences                                                           */
/* ------------------------------------------------------------------ */

type AudienceData = {
  eyebrow: string;
  heading: string;
  desc: string;
  bullets: readonly string[];
};

function AudienceTile({
  id,
  data,
  inverted = false,
}: {
  id: string;
  data: AudienceData;
  inverted?: boolean;
}) {
  return (
    <Tile inverted={inverted} className="scroll-mt-28">
      <div id={id} className="contents" />
      <TileLabel inverted={inverted}>{data.eyebrow}</TileLabel>
      <h3
        className={cn(
          "font-display mt-4 text-[26px] leading-[1.08] tracking-[-0.015em]",
          inverted ? "text-[#f8f6f2]" : "text-[#1c1612]",
        )}
      >
        {data.heading}
      </h3>
      <p
        className={cn(
          "mt-4 text-[14px] leading-[1.55]",
          inverted ? "text-[#ddd2c0]" : "text-[#6c5e4e]",
        )}
      >
        {renderEmphasis(data.desc)}
      </p>
      <ul className="mt-6 grid gap-2.5">
        {data.bullets.map((b) => (
          <li
            key={b}
            className={cn(
              "flex items-start gap-3 text-[14px] leading-[1.5]",
              inverted ? "text-[#f0ece4]" : "text-[#3b3128]",
            )}
          >
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className={cn("mt-0.5 shrink-0", inverted ? "text-[#beae93]" : "text-[#0a7795]")}
              aria-hidden
            />
            <span>{renderEmphasis(b)}</span>
          </li>
        ))}
      </ul>
    </Tile>
  );
}

function AudiencesBlock() {
  return (
    <section className="container-page py-10 sm:py-14">
      <RevealGrid className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <AudienceTile id="sponsors" data={audiences.sponsors} inverted />
        </div>
        <div className="lg:col-span-6">
          <AudienceTile id="experts" data={audiences.experts} />
        </div>

        {/* Expert network domains */}
        <Tile className="scroll-mt-28 lg:col-span-12">
          <div id="expert-network" className="contents" />
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <TileLabel>Expert network</TileLabel>
              <h3 className="font-display mt-3 text-[24px] leading-[1.1] tracking-[-0.015em] text-[#1c1612]">
                {expertNetwork.heading}
              </h3>
            </div>
            <p className="max-w-[48ch] text-[13px] leading-[1.5] text-[#6c5e4e]">
              {renderEmphasis(expertNetwork.intro)}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {expertNetwork.domains.map((d) => (
              <span
                key={d}
                className="inline-flex items-center rounded-full border border-[#1c1612]/12 bg-[#f8f6f2] px-3.5 py-2 text-[13px] leading-none tracking-[-0.005em] text-[#3b3128]"
              >
                {d}
              </span>
            ))}
          </div>
        </Tile>
      </RevealGrid>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

function FinalCtaBlock() {
  return (
    <section className="container-page pb-20 pt-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-[#1c1612] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-[#c97a18]/15 blur-3xl"
            aria-hidden
          />
          <h2 className="text-display-sm relative mx-auto max-w-[22ch] text-[#f8f6f2]">
            {finalCta.heading}
          </h2>
          <p className="relative mx-auto mt-5 max-w-[52ch] text-[15px] leading-[1.55] text-[#ddd2c0] sm:text-[16px]">
            {renderEmphasis(finalCta.sub)}
          </p>
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={cta.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#f8f6f2] px-6 py-3 text-[15px] font-medium tracking-[-0.005em] text-[#1c1612] transition-all duration-200 hover:bg-[#f0ece4] active:scale-[0.98]"
            >
              {cta.primary.label}
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </Link>
            <Link
              href={cta.secondary.href}
              className="inline-flex items-center justify-center rounded-[10px] border border-[#f8f6f2]/25 px-6 py-3 text-[15px] font-medium tracking-[-0.005em] text-[#f8f6f2] transition-all duration-200 hover:border-[#f8f6f2]/50 hover:bg-[#f8f6f2]/[0.06] active:scale-[0.98]"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function VariantBLanding() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#1c1612]">
      <HeroBlock />
      <BentoGrid />
      <AudiencesBlock />
      <FinalCtaBlock />
    </main>
  );
}
