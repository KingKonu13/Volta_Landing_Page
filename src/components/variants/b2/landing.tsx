"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "@/components/ui/contact-form";
import { renderEmphasis } from "@/lib/utils";
import {
  hero,
  voltaWorkflow,
  problem,
  outputs,
  trust,
  audiences,
  expertNetwork,
  cta,
  finalCta,
} from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

/* ------------------------------------------------------------------ *
 *  PALETTE — cool taupe-grey → near-black charcoal (neutral only)
 * ------------------------------------------------------------------ */
const C = {
  ink: "#131311", // near-black charcoal canvas
  charcoal: "#1C1C19", // panel base
  panel: "#26261F", // raised panel
  panelHi: "#2F2F27", // hover / lighter module
  line: "#3A3A31", // hairline on dark
  lineSoft: "#2C2C24",
  muted: "#7E7A6E", // cool taupe-grey text
  mid: "#A29D8E", // mid taupe
  soft: "#C9C5B8", // light taupe-grey
  paper: "#E9E6DD", // off-white readout text
  accent: "#B9AE92", // warm taupe accent stroke
} as const;

const mono = "font-[family-name:var(--font-b2-mono)]";
const sans = "font-[family-name:var(--font-b2-sans)]";

/* ------------------------------------------------------------------ *
 *  Small dashboard primitives
 * ------------------------------------------------------------------ */

function Ticks() {
  // corner registration ticks for panels
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t" style={{ borderColor: C.accent }} />
      <span className="pointer-events-none absolute right-0 top-0 h-2 w-2 border-r border-t" style={{ borderColor: C.accent }} />
      <span className="pointer-events-none absolute bottom-0 left-0 h-2 w-2 border-b border-l" style={{ borderColor: C.accent }} />
      <span className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r" style={{ borderColor: C.accent }} />
    </>
  );
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`${mono} text-[10px] uppercase tracking-[0.32em] ${className}`}
      style={{ color: C.muted }}
    >
      {children}
    </span>
  );
}

function Dot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: C.accent }} />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: C.accent }} />
    </span>
  );
}

function Gauge({ value, total }: { value: number; total: number }) {
  const pct = Math.round((value / total) * 100);
  return (
    <div className="flex items-center gap-2">
      <div className="h-1 w-full overflow-hidden" style={{ background: C.lineSoft }}>
        <div className="h-full" style={{ width: `${pct}%`, background: C.accent }} />
      </div>
      <span className={`${mono} shrink-0 text-[10px]`} style={{ color: C.mid }}>
        {String(pct).padStart(3, "0")}%
      </span>
    </div>
  );
}

/* A module/panel shell with header rail */
function Module({
  code,
  title,
  children,
  className = "",
  bg = C.charcoal,
}: {
  code: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <div
      className={`relative border ${className}`}
      style={{ borderColor: C.line, background: bg }}
    >
      <Ticks />
      <div
        className="flex items-center justify-between border-b px-4 py-2"
        style={{ borderColor: C.lineSoft }}
      >
        <span className={`${mono} text-[10px] tracking-[0.26em]`} style={{ color: C.accent }}>
          {code}
        </span>
        <span className={`${mono} text-[10px] uppercase tracking-[0.26em]`} style={{ color: C.muted }}>
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 *  Status-readout header
 * ------------------------------------------------------------------ */
function StatusHeader() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", { hour12: false }) + " UTC",
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{ borderColor: C.line, background: `${C.ink}f2` }}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <Dot />
          <span className={`${mono} text-[13px] font-semibold tracking-[0.3em]`} style={{ color: C.paper }}>
            VOLTA
          </span>
          <span className="hidden h-3 w-px sm:block" style={{ background: C.line }} />
          <span className={`${mono} hidden text-[10px] uppercase tracking-[0.24em] sm:inline`} style={{ color: C.muted }}>
            PRE-IND CONTROL
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            ["WORKFLOW", "#b2-workflow"],
            ["OUTPUTS", "#b2-outputs"],
            ["TRUST", "#b2-trust"],
            ["EXPERTS", "#b2-experts"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`${mono} text-[10px] uppercase tracking-[0.24em] transition-colors`}
              style={{ color: C.mid }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className={`${mono} hidden text-[10px] tracking-[0.18em] lg:inline`} style={{ color: C.muted }}>
            {time}
          </span>
          <a
            href={cta.primary.href}
            className={`${mono} border px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] transition-colors`}
            style={{ borderColor: C.accent, color: C.paper }}
          >
            {cta.primary.label}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ *
 *  HERO
 * ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-10 lg:pb-20 lg:pt-16">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
        {/* primary readout */}
        <Reveal className="lg:col-span-8">
          <div
            className="relative h-full border p-6 sm:p-9 lg:p-12"
            style={{ borderColor: C.line, background: C.charcoal }}
          >
            <Ticks />
            <div className="flex flex-wrap items-center gap-3">
              <span className={`${mono} text-[10px] tracking-[0.3em]`} style={{ color: C.accent }}>
                SYS://PRE-IND
              </span>
              <span className="h-3 w-px" style={{ background: C.line }} />
              <Label>{hero.eyebrow}</Label>
            </div>

            <h1
              className={`${sans} mt-7 max-w-3xl text-[34px] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[46px] lg:text-[58px]`}
              style={{ color: C.paper }}
            >
              {hero.headline}
            </h1>

            <p
              className={`${sans} mt-6 max-w-xl text-[15px] leading-[1.65] sm:text-base`}
              style={{ color: C.soft }}
            >
              {renderEmphasis(hero.sub)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={cta.primary.href}
                className={`${mono} px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-90`}
                style={{ background: C.paper, color: C.ink }}
              >
                {cta.primary.label}
              </a>
              <a
                href={cta.secondary.href}
                className={`${mono} border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors`}
                style={{ borderColor: C.accent, color: C.paper }}
              >
                {cta.secondary.label}
              </a>
            </div>

            {/* badge gauges */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t pt-6 sm:grid-cols-4" style={{ borderColor: C.lineSoft }}>
              {hero.badges.map((b, i) => (
                <div key={b}>
                  <Label className="block">{`0${i + 1}`}</Label>
                  <p className={`${sans} mt-1.5 text-[13px] leading-snug`} style={{ color: C.soft }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* side telemetry stack */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-4 lg:gap-5">
          <Reveal delay={0.08}>
            <Module code="MOD.01" title="Pipeline status">
              <ul className="space-y-3.5">
                {hero.bullets.map((b, i) => (
                  <li key={b}>
                    <div className="flex items-center justify-between">
                      <span className={`${mono} text-[10px] tracking-[0.2em]`} style={{ color: C.accent }}>
                        {`STG-${i + 1}`}
                      </span>
                      <span className={`${mono} text-[9px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                        active
                      </span>
                    </div>
                    <p className={`${sans} mt-1 text-[13px]`} style={{ color: C.soft }}>
                      {b}
                    </p>
                    <div className="mt-2">
                      <Gauge value={i + 2} total={4} />
                    </div>
                  </li>
                ))}
              </ul>
            </Module>
          </Reveal>

          <Reveal delay={0.16}>
            <Module code="MOD.02" title="Trust readout" bg={C.panel}>
              <p className={`${sans} text-[13px] leading-[1.6]`} style={{ color: C.soft }}>
                {renderEmphasis(trust.sub)}
              </p>
            </Module>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  PROBLEM — fault diagnosis + resolution pipeline
 * ------------------------------------------------------------------ */
function Problem() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[90rem]">
        <Reveal>
          <Label>DIAGNOSTICS</Label>
          <h2 className={`${sans} mt-3 max-w-2xl text-[26px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[34px]`} style={{ color: C.paper }}>
            {problem.heading}
          </h2>
          <p className={`${sans} mt-4 max-w-2xl text-[15px] leading-[1.65]`} style={{ color: C.mid }}>
            {renderEmphasis(problem.intro)}
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-5">
            <Module code="ALERT" title={problem.diagnosis.label} bg={C.panel} className="h-full">
              <h3 className={`${sans} text-[18px] font-medium leading-[1.25]`} style={{ color: C.paper }}>
                {problem.diagnosis.title}
              </h3>
              <p className={`${sans} mt-3 text-[13px] leading-[1.6]`} style={{ color: C.mid }}>
                {problem.diagnosis.desc}
              </p>
            </Module>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7 lg:gap-5">
            {problem.points.map((p, i) => (
              <RevealItem key={p.title}>
                <div className="relative h-full border p-4" style={{ borderColor: C.line, background: C.charcoal }}>
                  <div className="flex items-center justify-between">
                    <span className={`${mono} text-[10px] tracking-[0.2em]`} style={{ color: C.accent }}>
                      {`ERR.0${i + 1}`}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.muted }} />
                  </div>
                  <h4 className={`${sans} mt-4 text-[15px] font-medium`} style={{ color: C.paper }}>
                    {p.title}
                  </h4>
                  <p className={`${sans} mt-2 text-[12.5px] leading-[1.55]`} style={{ color: C.mid }}>
                    {renderEmphasis(p.desc)}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* resolution pipeline */}
        <Reveal className="mt-5">
          <div className="relative border p-5 sm:p-7" style={{ borderColor: C.line, background: C.charcoal }}>
            <Ticks />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <Label>{problem.resolution.label}</Label>
                <h3 className={`${sans} mt-2 max-w-2xl text-[18px] font-medium leading-[1.3]`} style={{ color: C.paper }}>
                  {problem.resolution.title}
                </h3>
              </div>
              <span className={`${mono} text-[10px] tracking-[0.24em]`} style={{ color: C.accent }}>
                RESOLVE →
              </span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: C.line }}>
              {problem.resolution.steps.map((s, i) => (
                <div key={s.title} className="p-4" style={{ background: C.charcoal }}>
                  <span className={`${mono} text-[10px] tracking-[0.2em]`} style={{ color: C.accent }}>
                    {`0${i + 1} / 04`}
                  </span>
                  <h4 className={`${sans} mt-3 text-[14px] font-medium leading-snug`} style={{ color: C.paper }}>
                    {s.title}
                  </h4>
                  <p className={`${sans} mt-2 text-[12px] leading-[1.55]`} style={{ color: C.mid }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className={`${mono} mt-6 text-[11px] leading-[1.6] tracking-[0.04em]`} style={{ color: C.muted }}>
              // {problem.resolution.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  WORKFLOW — console panels
 * ------------------------------------------------------------------ */
function Workflow() {
  return (
    <section id="b2-workflow" className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[90rem]">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Label>RUNTIME / 04 STAGES</Label>
            <h2 className={`${sans} mt-3 text-[26px] font-semibold tracking-[-0.02em] sm:text-[34px]`} style={{ color: C.paper }}>
              {voltaWorkflow.heading}
            </h2>
          </div>
          <p className={`${sans} max-w-sm text-[14px] leading-[1.6]`} style={{ color: C.mid }}>
            {voltaWorkflow.intro}
          </p>
        </Reveal>

        <RevealGroup className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {voltaWorkflow.cards.map((card) => (
            <RevealItem key={card.step}>
              <div
                className="group relative flex h-full flex-col border p-5 transition-colors"
                style={{ borderColor: C.line, background: C.charcoal }}
              >
                <Ticks />
                <div className="flex items-baseline justify-between">
                  <span className={`${mono} text-[28px] font-semibold leading-none tracking-[-0.02em]`} style={{ color: C.paper }}>
                    {card.step}
                  </span>
                  <span className={`${mono} text-[9px] uppercase tracking-[0.24em]`} style={{ color: C.accent }}>
                    proc
                  </span>
                </div>
                <h3 className={`${sans} mt-5 text-[16px] font-medium`} style={{ color: C.paper }}>
                  {card.title}
                </h3>
                <p className={`${sans} mt-2 flex-1 text-[12.5px] leading-[1.55]`} style={{ color: C.mid }}>
                  {renderEmphasis(card.desc)}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5 border-t pt-4" style={{ borderColor: C.lineSoft }}>
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className={`${mono} border px-2 py-1 text-[9px] uppercase tracking-[0.14em]`}
                      style={{ borderColor: C.line, color: C.soft }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  OUTPUTS — deliverable readout
 * ------------------------------------------------------------------ */
function Outputs() {
  return (
    <section id="b2-outputs" className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-4">
            <div className="sticky top-20">
              <Label>OUTPUT BUFFER</Label>
              <h2 className={`${sans} mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[32px]`} style={{ color: C.paper }}>
                {outputs.heading}
              </h2>
              <p className={`${sans} mt-4 text-[14px] leading-[1.65]`} style={{ color: C.mid }}>
                {renderEmphasis(outputs.intro)}
              </p>

              <div className="mt-6 border p-5" style={{ borderColor: C.line, background: C.panel }}>
                <Label className="block">{outputs.summary.label}</Label>
                <h3 className={`${sans} mt-2 text-[16px] font-medium leading-snug`} style={{ color: C.paper }}>
                  {outputs.summary.title}
                </h3>
                <p className={`${sans} mt-3 text-[12.5px] leading-[1.6]`} style={{ color: C.mid }}>
                  {renderEmphasis(outputs.summary.desc)}
                </p>
                <ul className="mt-4 space-y-2">
                  {outputs.summary.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className={`${mono} text-[11px]`} style={{ color: C.accent }}>
                        [✓]
                      </span>
                      <span className={`${sans} text-[12.5px]`} style={{ color: C.soft }}>
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8 lg:gap-5">
            {outputs.items.map((item, i) => (
              <RevealItem key={item.title}>
                <div className="relative h-full border p-5" style={{ borderColor: C.line, background: C.charcoal }}>
                  <div className="flex items-center justify-between">
                    <span className={`${mono} text-[9px] uppercase tracking-[0.2em]`} style={{ color: C.accent }}>
                      {item.category}
                    </span>
                    <span className={`${mono} text-[10px]`} style={{ color: C.muted }}>
                      {`OUT.0${i + 1}`}
                    </span>
                  </div>
                  <h3 className={`${sans} mt-4 text-[16px] font-medium`} style={{ color: C.paper }}>
                    {item.title}
                  </h3>
                  <p className={`${sans} mt-2 text-[12.5px] leading-[1.55]`} style={{ color: C.mid }}>
                    {renderEmphasis(item.desc)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`${mono} border px-2 py-1 text-[9px] uppercase tracking-[0.14em]`}
                        style={{ borderColor: C.line, color: C.soft }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-5">
          <div className="flex flex-col gap-3 border p-5 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: C.accent, background: C.panel }}>
            <div>
              <h3 className={`${sans} text-[16px] font-medium`} style={{ color: C.paper }}>
                {outputs.completion.title}
              </h3>
              <p className={`${sans} mt-1.5 max-w-2xl text-[12.5px] leading-[1.55]`} style={{ color: C.mid }}>
                {outputs.completion.desc}
              </p>
            </div>
            <span className={`${mono} shrink-0 text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.accent }}>
              STATUS · SPONSOR APPROVAL
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  TRUST — gauges
 * ------------------------------------------------------------------ */
function Trust() {
  return (
    <section id="b2-trust" className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-5">
            <Label>INTEGRITY MONITOR</Label>
            <h2 className={`${sans} mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[34px]`} style={{ color: C.paper }}>
              {trust.heading}
            </h2>
            <p className={`${sans} mt-4 max-w-md text-[14px] leading-[1.65]`} style={{ color: C.mid }}>
              {trust.body}
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7 lg:gap-5">
            {trust.pillars.map((p, i) => (
              <RevealItem key={p.title}>
                <div className="relative flex h-full flex-col border p-5" style={{ borderColor: C.line, background: C.charcoal }}>
                  <Ticks />
                  <span className={`${mono} text-[10px] tracking-[0.2em]`} style={{ color: C.accent }}>
                    {`CHK.0${i + 1}`}
                  </span>
                  <h3 className={`${sans} mt-4 text-[15px] font-medium`} style={{ color: C.paper }}>
                    {p.title}
                  </h3>
                  <p className={`${sans} mt-2 flex-1 text-[12.5px] leading-[1.55]`} style={{ color: C.mid }}>
                    {renderEmphasis(p.desc)}
                  </p>
                  <div className="mt-5">
                    <Gauge value={i + 8} total={10} />
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  EXPERT NETWORK — label matrix + readouts
 * ------------------------------------------------------------------ */
function Experts() {
  return (
    <section id="b2-experts" className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[90rem]">
        <Reveal>
          <div className="relative border p-6 sm:p-9" style={{ borderColor: C.line, background: C.panel }}>
            <Ticks />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Label>NETWORK / ROUTING</Label>
                <h2 className={`${sans} mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[32px]`} style={{ color: C.paper }}>
                  {expertNetwork.heading}
                </h2>
                <p className={`${sans} mt-4 max-w-md text-[14px] leading-[1.65]`} style={{ color: C.mid }}>
                  {renderEmphasis(expertNetwork.intro)}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {expertNetwork.domains.map((d) => (
                    <span
                      key={d}
                      className={`${mono} border px-3 py-1.5 text-[10px] uppercase tracking-[0.16em]`}
                      style={{ borderColor: C.line, color: C.soft, background: C.charcoal }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-px sm:grid-cols-3" style={{ background: C.line }}>
                  {expertNetwork.stats.map((s) => (
                    <div key={s.value} className="p-5" style={{ background: C.charcoal }}>
                      <p className={`${sans} text-[22px] font-semibold tracking-[-0.02em]`} style={{ color: C.paper }}>
                        {s.value}
                      </p>
                      <p className={`${mono} mt-1 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  AUDIENCES + CONTACT — dual console terminals
 * ------------------------------------------------------------------ */
function AudiencePanel({
  data,
  type,
  code,
  inverted,
}: {
  data: typeof audiences.sponsors | typeof audiences.experts;
  type: "sponsors" | "experts";
  code: string;
  inverted: boolean;
}) {
  return (
    <div
      className="relative flex h-full flex-col border p-6 sm:p-8"
      style={{
        borderColor: inverted ? C.accent : C.line,
        background: inverted ? C.paper : C.charcoal,
      }}
    >
      <Ticks />
      <div className="flex items-center justify-between">
        <span className={`${mono} text-[10px] tracking-[0.24em]`} style={{ color: inverted ? "#6c5e4e" : C.accent }}>
          {code}
        </span>
        <span className={`${mono} text-[9px] uppercase tracking-[0.22em]`} style={{ color: inverted ? "#8A857B" : C.muted }}>
          {data.eyebrow}
        </span>
      </div>
      <h3 className={`${sans} mt-5 text-[20px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[24px]`} style={{ color: inverted ? "#1c1612" : C.paper }}>
        {data.heading}
      </h3>
      <p className={`${sans} mt-3 text-[13px] leading-[1.6]`} style={{ color: inverted ? "#54483b" : C.mid }}>
        {renderEmphasis(data.desc)}
      </p>
      <ul className="mt-5 space-y-2">
        {data.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className={`${mono} mt-0.5 text-[11px]`} style={{ color: inverted ? "#1c1612" : C.accent }}>
              ›
            </span>
            <span className={`${sans} text-[13px]`} style={{ color: inverted ? "#3b3128" : C.soft }}>
              {renderEmphasis(b)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-7 border-t pt-6" style={{ borderColor: inverted ? "#1c161214" : C.lineSoft }}>
        <ContactForm type={type} inverted={!inverted} />
      </div>
    </div>
  );
}

function Audiences() {
  return (
    <section id="sponsors" className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[90rem]">
        <Reveal>
          <Label>ACCESS TERMINALS</Label>
        </Reveal>
        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal>
            <AudiencePanel data={audiences.sponsors} type="sponsors" code="TERM.A / SPONSOR" inverted />
          </Reveal>
          <Reveal delay={0.08}>
            <div id="experts" className="h-full">
              <AudiencePanel data={audiences.experts} type="experts" code="TERM.B / EXPERT" inverted={false} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  FINAL CTA + FOOTER
 * ------------------------------------------------------------------ */
function FinalCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <Reveal>
          <div className="relative overflow-hidden border p-8 sm:p-12 lg:p-16" style={{ borderColor: C.accent, background: C.charcoal }}>
            <Ticks />
            <span className={`${mono} text-[10px] tracking-[0.3em]`} style={{ color: C.accent }}>
              SYS://INITIATE
            </span>
            <h2 className={`${sans} mt-4 max-w-3xl text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[42px]`} style={{ color: C.paper }}>
              {finalCta.heading}
            </h2>
            <p className={`${sans} mt-5 max-w-xl text-[15px] leading-[1.65]`} style={{ color: C.mid }}>
              {renderEmphasis(finalCta.sub)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cta.primary.href}
                className={`${mono} px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-90`}
                style={{ background: C.paper, color: C.ink }}
              >
                {cta.primary.label}
              </a>
              <a
                href={cta.secondary.href}
                className={`${mono} border px-5 py-3 text-[11px] uppercase tracking-[0.22em]`}
                style={{ borderColor: C.accent, color: C.paper }}
              >
                {cta.secondary.label}
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-6 flex flex-col items-start justify-between gap-3 border-t pt-6 sm:flex-row sm:items-center" style={{ borderColor: C.line }}>
          <div className="flex items-center gap-3">
            <Dot />
            <span className={`${mono} text-[12px] font-semibold tracking-[0.3em]`} style={{ color: C.paper }}>
              VOLTA
            </span>
          </div>
          <span className={`${mono} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            AI drafts · experts review · sponsors approve
          </span>
        </footer>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  ROOT
 * ------------------------------------------------------------------ */
export function VariantB2Landing() {
  return (
    <div
      className={`${sans} min-h-screen`}
      style={{
        background: C.ink,
        backgroundImage: `linear-gradient(${C.lineSoft}55 1px, transparent 1px), linear-gradient(90deg, ${C.lineSoft}55 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    >
      <StatusHeader />
      <main>
        <Hero />
        <Problem />
        <Workflow />
        <Outputs />
        <Trust />
        <Experts />
        <Audiences />
        <FinalCta />
      </main>
    </div>
  );
}
