"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  hero,
  cta,
  trustLine,
  voltaWorkflow,
  problem,
  outputs,
  trust,
  expertNetwork,
  finalCta,
} from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Palette (cool neutral / charcoal)
 *   bg     #f4f5f6   off-white cool
 *   surface#e9ebec   pale grey
 *   line   #d3d7db   cool grey line
 *   muted  #6a7079   slate grey
 *   soft   #2c3138   near-charcoal
 *   ink    #14171b   near-black
 *   accent #4d6470   slate accent stroke (used sparingly)
 * ------------------------------------------------------------------ */

const C = {
  bg: "#f4f5f6",
  surface: "#e9ebec",
  line: "#d3d7db",
  muted: "#6a7079",
  soft: "#2c3138",
  ink: "#14171b",
  accent: "#4d6470",
};

type IndexEntry = { id: string; no: string; label: string };

const ENTRIES: IndexEntry[] = [
  { id: "intro", no: "00", label: "Overview" },
  { id: "problem", no: "01", label: "The problem" },
  { id: "volta-workflow", no: "02", label: "The workflow" },
  { id: "outputs", no: "03", label: "What you receive" },
  { id: "trust", no: "04", label: "How we keep it safe" },
  { id: "expert-network", no: "05", label: "Expert network" },
  { id: "sponsors", no: "06", label: "Start a milestone" },
];

/* --------------------------------- scroll-spy --------------------------------- */

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* ------------------------------------ rail ------------------------------------ */

function IndexRail({ active }: { active: string }) {
  const progress =
    (ENTRIES.findIndex((e) => e.id === active) / (ENTRIES.length - 1)) * 100;

  return (
    <nav
      aria-label="Page index"
      className="sticky top-0 hidden h-screen flex-col justify-center py-16 lg:flex"
    >
      <p
        className="mb-8 text-[10px] font-medium uppercase tracking-[0.34em]"
        style={{ color: C.muted, fontFamily: "var(--c2-mono)" }}
      >
        Volta · index
      </p>

      <div className="relative pl-5">
        {/* vertical track */}
        <span
          aria-hidden
          className="absolute left-0 top-1 bottom-1 w-px"
          style={{ backgroundColor: C.line }}
        />
        <span
          aria-hidden
          className="absolute left-0 top-1 w-px transition-[height] duration-500 ease-out"
          style={{ height: `calc(${progress}% )`, backgroundColor: C.accent }}
        />

        <ul className="flex flex-col gap-5">
          {ENTRIES.map((e) => {
            const on = e.id === active;
            return (
              <li key={e.id}>
                <Link
                  href={`#${e.id}`}
                  className="group flex items-baseline gap-3 transition-colors"
                  aria-current={on ? "true" : undefined}
                >
                  <span
                    className="text-[10px] tabular-nums transition-colors"
                    style={{
                      fontFamily: "var(--c2-mono)",
                      color: on ? C.accent : C.muted,
                    }}
                  >
                    {e.no}
                  </span>
                  <span
                    className="text-[13px] leading-tight transition-all"
                    style={{
                      color: on ? C.ink : C.muted,
                      fontWeight: on ? 500 : 400,
                      letterSpacing: on ? "-0.01em" : "0",
                    }}
                  >
                    {e.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

/* ------------------------- mobile section indicator ------------------------- */

function MobileIndexBar({ active }: { active: string }) {
  const idx = Math.max(
    0,
    ENTRIES.findIndex((e) => e.id === active),
  );
  const current = ENTRIES[idx] ?? ENTRIES[0];
  const progress = (idx / (ENTRIES.length - 1)) * 100;

  return (
    <nav
      aria-label="Page index"
      className="sticky top-0 z-30 -mx-6 flex items-center gap-3 border-b px-6 py-3 backdrop-blur md:-mx-10 md:px-10 lg:hidden"
      style={{ backgroundColor: "rgba(244,245,246,0.82)", borderColor: C.line }}
    >
      <span
        className="text-[11px] tabular-nums"
        style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
      >
        {current.no}
      </span>
      <span
        className="min-w-0 flex-1 truncate text-[13px] font-medium tracking-[-0.01em]"
        style={{ color: C.ink }}
      >
        {current.label}
      </span>
      <span
        className="shrink-0 text-[10px] uppercase tracking-[0.28em] tabular-nums"
        style={{ fontFamily: "var(--c2-mono)", color: C.muted }}
      >
        {idx + 1}/{ENTRIES.length}
      </span>
      {/* progress underline */}
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px" style={{ backgroundColor: C.line }} />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-px transition-[width] duration-500 ease-out"
        style={{ width: `${progress}%`, backgroundColor: C.accent }}
      />
    </nav>
  );
}

/* --------------------------------- primitives --------------------------------- */

function SectionHead({
  no,
  kicker,
}: {
  no: string;
  kicker: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3 sm:gap-4 lg:mb-10">
      <span
        className="text-[32px] leading-none tabular-nums sm:text-[44px]"
        style={{ fontFamily: "var(--c2-display)", color: C.line }}
      >
        {no}
      </span>
      <span aria-hidden className="h-px flex-1" style={{ backgroundColor: C.line }} />
      <span
        className="text-[10px] font-medium uppercase tracking-[0.3em]"
        style={{ fontFamily: "var(--c2-mono)", color: C.muted }}
      >
        {kicker}
      </span>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] leading-none"
      style={{ borderColor: C.line, color: C.muted, backgroundColor: C.bg }}
    >
      {children}
    </span>
  );
}

/* ----------------------------------- form ----------------------------------- */

function CaptureForm({
  type,
  dark = false,
}: {
  type: "experts" | "sponsors";
  dark?: boolean;
}) {
  const [data, setData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name: data.name, email: data.email }),
      });
      if (res.ok) {
        setStatus("done");
        setData({ name: "", email: "" });
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  const fg = dark ? C.bg : C.ink;
  const mutedFg = dark ? "#aeb4bb" : C.muted;
  const fieldBg = dark ? "rgba(255,255,255,0.06)" : C.bg;
  const fieldLine = dark ? "#3a4047" : C.line;
  const btnBg = dark ? C.bg : C.ink;
  const btnFg = dark ? C.ink : C.bg;

  if (status === "done") {
    return (
      <p className="text-[15px] leading-[1.6]" style={{ color: mutedFg }}>
        Thanks — we&apos;ll reach out to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-[420px] flex-col gap-3">
      <input
        type="text"
        required
        placeholder="Full name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full rounded-full border px-5 py-3 text-[14px] outline-none transition-colors focus:border-current"
        style={{ backgroundColor: fieldBg, borderColor: fieldLine, color: fg }}
      />
      <input
        type="email"
        required
        placeholder="Work email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full rounded-full border px-5 py-3 text-[14px] outline-none transition-colors focus:border-current"
        style={{ backgroundColor: fieldBg, borderColor: fieldLine, color: fg }}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: btnBg, color: btnFg }}
      >
        {status === "submitting"
          ? "Sending…"
          : type === "experts"
            ? "Join the expert network"
            : "Request a scope call"}
      </button>
    </form>
  );
}

/* ----------------------------------- page ----------------------------------- */

export function IndexNarrative({
  gradientStrength = 1,
}: {
  gradientStrength?: number;
} = {}) {
  const ids = ENTRIES.map((e) => e.id);
  const active = useScrollSpy(ids);
  const railRef = useRef<HTMLDivElement>(null);

  // scale the ambient gradient alphas by a strength multiplier (clamped)
  const a = (base: number) =>
    Math.min(base * gradientStrength, 0.95).toFixed(3);

  return (
    <div ref={railRef} className="relative" style={{ color: C.ink }}>
      {/* ambient pastel gradient — fixed full-viewport layer carrying the base
          color so it sits above the page background but behind the content */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundColor: C.bg,
          backgroundImage: `
            radial-gradient(55rem 38rem at 88% -6%, rgba(255, 211, 165, ${a(0.22)}), transparent 60%),
            radial-gradient(52rem 40rem at 4% 94%, rgba(168, 199, 250, ${a(0.2)}), transparent 58%),
            radial-gradient(44rem 32rem at 74% 82%, rgba(255, 186, 199, ${a(0.14)}), transparent 60%),
            radial-gradient(40rem 30rem at 24% 12%, rgba(214, 232, 222, ${a(0.16)}), transparent 60%)
          `,
        }}
      />
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:px-4 focus:py-2 focus:text-sm"
        style={{ backgroundColor: C.ink, color: C.bg }}
      >
        Skip to content
      </a>

      <div className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 gap-x-16 px-6 md:px-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:px-16">
        {/* LEFT INDEX RAIL */}
        <IndexRail active={active} />

        {/* CONTENT COLUMN */}
        <main className="min-w-0 pb-20 lg:py-0">
          {/* MOBILE SECTION INDICATOR (hidden on lg, where the rail takes over) */}
          <MobileIndexBar active={active} />

          {/* ============================= 00 — INTRO ============================= */}
          <section
            id="intro"
            className="flex min-h-[80vh] scroll-mt-16 flex-col justify-center lg:min-h-[88vh] lg:scroll-mt-8"
          >
            <Reveal>
              <p
                className="text-[11px] font-medium uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
              >
                {hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1
                className="mt-6 max-w-[18ch] text-[clamp(40px,6vw,76px)] leading-[0.98] tracking-[-0.03em]"
                style={{ fontFamily: "var(--c2-display)", color: C.ink }}
              >
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                className="mt-8 max-w-[52ch] text-[18px] leading-[1.6]"
                style={{ color: C.soft }}
              >
                {renderEmphasis(hero.sub)}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href={cta.primary.href}
                  className="inline-flex items-center rounded-full px-6 py-3 text-[14px] font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: C.ink, color: C.bg }}
                >
                  {cta.primary.label}
                </Link>
                <Link
                  href="#expert-network"
                  className="inline-flex items-center rounded-full border px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[var(--c2-surface)]"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  {cta.secondary.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
                {hero.badges.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-[13px]"
                    style={{ color: C.muted }}
                  >
                    <span
                      aria-hidden
                      className="h-3 w-px"
                      style={{ backgroundColor: C.accent }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          {/* ============================ 01 — PROBLEM =========================== */}
          <section id="problem" className="scroll-mt-16 border-t py-16 sm:py-24 lg:scroll-mt-8 lg:py-32" style={{ borderColor: C.line }}>
            <SectionHead no="01" kicker="The problem" />
            <Reveal>
              <h2
                className="max-w-[20ch] text-[clamp(30px,3.6vw,46px)] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--c2-display)", color: C.ink }}
              >
                {problem.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.6]" style={{ color: C.soft }}>
                {renderEmphasis(problem.intro)}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="mt-12 rounded-2xl border p-7"
                style={{ borderColor: C.line, backgroundColor: C.surface }}
              >
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
                >
                  {problem.diagnosis.label}
                </p>
                <p
                  className="mt-4 max-w-[42ch] text-[22px] leading-[1.25] tracking-[-0.015em]"
                  style={{ fontFamily: "var(--c2-display)", color: C.ink }}
                >
                  {problem.diagnosis.title}
                </p>
                <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6]" style={{ color: C.muted }}>
                  {problem.diagnosis.desc}
                </p>
              </div>
            </Reveal>

            <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-3" style={{ borderColor: C.line, backgroundColor: C.line }}>
              {problem.points.map((pt, i) => (
                <li key={pt.title} style={{ backgroundColor: C.bg }}>
                  <Reveal delay={i * 0.06} className="h-full p-6">
                    <span
                      className="text-[12px] tabular-nums"
                      style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-[17px] font-medium tracking-[-0.01em]" style={{ color: C.ink }}>
                      {pt.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: C.muted }}>
                      {renderEmphasis(pt.desc)}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
                >
                  {problem.resolution.label}
                </p>
                <p
                  className="mt-4 max-w-[36ch] text-[24px] leading-[1.2] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--c2-display)", color: C.ink }}
                >
                  {problem.resolution.title}
                </p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {problem.resolution.steps.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.05} className="flex gap-4">
                      <span
                        className="shrink-0 text-[13px] tabular-nums"
                        style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
                      >
                        →
                      </span>
                      <div>
                        <h4 className="text-[15px] font-medium" style={{ color: C.ink }}>
                          {s.title}
                        </h4>
                        <p className="mt-1.5 text-[14px] leading-[1.55]" style={{ color: C.muted }}>
                          {s.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-8 max-w-[60ch] text-[14px] italic leading-[1.6]" style={{ color: C.muted }}>
                  {problem.resolution.note}
                </p>
              </div>
            </Reveal>
          </section>

          {/* =========================== 02 — WORKFLOW ========================== */}
          <section id="volta-workflow" className="scroll-mt-16 border-t py-16 sm:py-24 lg:scroll-mt-8 lg:py-32" style={{ borderColor: C.line }}>
            <SectionHead no="02" kicker="The workflow" />
            <Reveal>
              <h2
                className="text-[clamp(30px,3.6vw,46px)] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--c2-display)", color: C.ink }}
              >
                {voltaWorkflow.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.6]" style={{ color: C.soft }}>
                {voltaWorkflow.intro}
              </p>
            </Reveal>

            <div className="mt-12 flex flex-col">
              {voltaWorkflow.cards.map((card, i) => (
                <Reveal key={card.step} delay={i * 0.05}>
                  <div
                    className="grid grid-cols-1 gap-6 border-t py-8 md:grid-cols-[8rem_minmax(0,1fr)]"
                    style={{ borderColor: C.line }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="text-[40px] leading-none tabular-nums sm:text-[52px]"
                        style={{ fontFamily: "var(--c2-display)", color: C.line }}
                      >
                        {card.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-medium tracking-[-0.015em]" style={{ color: C.ink }}>
                        {card.title}
                      </h3>
                      <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.6]" style={{ color: C.soft }}>
                        {renderEmphasis(card.desc)}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {card.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ============================ 03 — OUTPUTS ========================== */}
          <section id="outputs" className="scroll-mt-16 border-t py-16 sm:py-24 lg:scroll-mt-8 lg:py-32" style={{ borderColor: C.line }}>
            <SectionHead no="03" kicker="What you receive" />
            <Reveal>
              <h2
                className="text-[clamp(30px,3.6vw,46px)] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--c2-display)", color: C.ink }}
              >
                {outputs.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.6]" style={{ color: C.soft }}>
                {renderEmphasis(outputs.intro)}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="mt-12 rounded-2xl border p-7"
                style={{ borderColor: C.line, backgroundColor: C.surface }}
              >
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
                >
                  {outputs.summary.label}
                </p>
                <p
                  className="mt-4 max-w-[40ch] text-[22px] leading-[1.25] tracking-[-0.015em]"
                  style={{ fontFamily: "var(--c2-display)", color: C.ink }}
                >
                  {outputs.summary.title}
                </p>
                <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.6]" style={{ color: C.muted }}>
                  {renderEmphasis(outputs.summary.desc)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {outputs.summary.checks.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2" style={{ borderColor: C.line, backgroundColor: C.line }}>
              {outputs.items.map((item, i) => (
                <div key={item.title} style={{ backgroundColor: C.bg }}>
                  <Reveal delay={(i % 2) * 0.05} className="h-full p-6">
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.24em]"
                      style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
                    >
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-[17px] font-medium tracking-[-0.01em]" style={{ color: C.ink }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: C.muted }}>
                      {renderEmphasis(item.desc)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-8 flex gap-4 border-l-2 pl-5" style={{ borderColor: C.accent }}>
                <div>
                  <h3 className="text-[16px] font-medium" style={{ color: C.ink }}>
                    {outputs.completion.title}
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-[14px] leading-[1.6]" style={{ color: C.muted }}>
                    {outputs.completion.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ============================= 04 — TRUST ========================== */}
          <section id="trust" className="scroll-mt-16 border-t py-16 sm:py-24 lg:scroll-mt-8 lg:py-32" style={{ borderColor: C.line }}>
            <SectionHead no="04" kicker="How we keep it safe" />
            <Reveal>
              <h2
                className="text-[clamp(30px,3.6vw,46px)] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--c2-display)", color: C.ink }}
              >
                {trust.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.6]" style={{ color: C.soft }}>
                {renderEmphasis(trust.sub)}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.6]" style={{ color: C.muted }}>
                {trust.body}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {trust.pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="border-t pt-5" style={{ borderColor: C.accent }}>
                    <h3 className="text-[16px] font-medium tracking-[-0.01em]" style={{ color: C.ink }}>
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: C.muted }}>
                      {renderEmphasis(p.desc)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p
                className="mt-12 max-w-[64ch] text-[15px] leading-[1.7]"
                style={{ color: C.soft }}
              >
                {renderEmphasis(trustLine)}
              </p>
            </Reveal>
          </section>

          {/* ========================= 05 — EXPERT NETWORK ====================== */}
          <section id="expert-network" className="scroll-mt-16 border-t py-16 sm:py-24 lg:scroll-mt-8 lg:py-32" style={{ borderColor: C.line }}>
            <SectionHead no="05" kicker="Expert network" />
            <Reveal>
              <h2
                className="max-w-[18ch] text-[clamp(30px,3.6vw,46px)] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--c2-display)", color: C.ink }}
              >
                {expertNetwork.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.6]" style={{ color: C.soft }}>
                {renderEmphasis(expertNetwork.intro)}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 flex flex-wrap gap-2.5">
                {expertNetwork.domains.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border px-4 py-2 text-[13px]"
                    style={{ borderColor: C.line, color: C.soft, backgroundColor: C.surface }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3" style={{ borderColor: C.line, backgroundColor: C.line }}>
              {expertNetwork.stats.map((s, i) => (
                <div key={s.value} style={{ backgroundColor: C.bg }}>
                  <Reveal delay={i * 0.06} className="p-7">
                    <p
                      className="text-[28px] leading-none tracking-[-0.02em]"
                      style={{ fontFamily: "var(--c2-display)", color: C.ink }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-2 text-[13px] uppercase tracking-[0.18em]" style={{ fontFamily: "var(--c2-mono)", color: C.muted }}>
                      {s.label}
                    </p>
                  </Reveal>
                </div>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-12 max-w-[480px]">
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.3em]"
                  style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
                >
                  Apply to review
                </p>
                <p className="mt-3 mb-5 text-[15px] leading-[1.6]" style={{ color: C.muted }}>
                  Share your name and email and we&apos;ll reach out about matching review work to your domain.
                </p>
                <CaptureForm type="experts" />
              </div>
            </Reveal>
          </section>

          {/* =========================== 06 — FINAL CTA ========================= */}
          <section
            id="sponsors"
            className="scroll-mt-16 border-t py-16 sm:py-24 lg:scroll-mt-8 lg:py-32"
            style={{ borderColor: C.line }}
          >
            <SectionHead no="06" kicker="Start a milestone" />
            <Reveal>
              <div
                className="rounded-3xl px-6 py-12 text-center sm:px-8 sm:py-16 md:px-16"
                style={{ backgroundColor: C.ink }}
              >
                <h2
                  className="mx-auto max-w-[20ch] text-[clamp(30px,4vw,52px)] leading-[1.04] tracking-[-0.03em]"
                  style={{ fontFamily: "var(--c2-display)", color: C.bg }}
                >
                  {finalCta.heading}
                </h2>
                <p
                  className="mx-auto mt-6 max-w-[54ch] text-[17px] leading-[1.6]"
                  style={{ color: "#aeb4bb" }}
                >
                  {renderEmphasis(finalCta.sub)}
                </p>
                <div className="mt-10 flex justify-center">
                  <CaptureForm type="sponsors" dark />
                </div>
              </div>
            </Reveal>

            <footer className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-8 sm:flex-row sm:items-center" style={{ borderColor: C.line }}>
              <p className="text-[13px]" style={{ color: C.muted }}>
                Volta — AI-native Pre-IND meeting prep
              </p>
              <p className="text-[12px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--c2-mono)", color: C.muted }}>
                Expert-reviewed · Evidence-linked
              </p>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
