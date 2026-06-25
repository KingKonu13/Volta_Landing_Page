import type { Metadata } from "next";
import { Space_Grotesk, Newsreader } from "next/font/google";
import { renderEmphasis } from "@/lib/utils";
import { FadeUp, Stagger, StaggerItem } from "@/components/variants/a1/reveal";
import {
  hero,
  problem,
  voltaWorkflow,
  outputs,
  trust,
  expertNetwork,
  finalCta,
  cta,
} from "@/content/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-a1-display",
});

const body = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-a1-body",
});

export const metadata: Metadata = {
  title: "Volta — Index (Variant A1)",
  description:
    "A brutalist index / table-of-contents presentation of the Volta Pre-IND workflow.",
};

// Cool-grey near-white neutral palette.
const C = {
  bg: "#f3f3f1",
  surface: "#e7e7e4",
  ink: "#161616",
  inkSoft: "#3a3a38",
  muted: "#70706c",
  line: "#d6d6d2",
};

const SECTIONS = [
  { n: "01", label: "The problem", href: "#a1-problem" },
  { n: "02", label: "The workflow", href: "#a1-workflow" },
  { n: "03", label: "The deliverable", href: "#a1-outputs" },
  { n: "04", label: "The guardrails", href: "#a1-trust" },
  { n: "05", label: "The network", href: "#a1-experts" },
  { n: "06", label: "Start here", href: "#a1-cta" },
];

const mono = "var(--font-a1-display)";
const serif = "var(--font-a1-body)";

function SectionHead({
  n,
  kicker,
  heading,
  intro,
}: {
  n: string;
  kicker: string;
  heading: string;
  intro?: string;
}) {
  return (
    <FadeUp>
      <div
        className="flex items-baseline gap-4 border-b pb-4"
        style={{ borderColor: C.ink }}
      >
        <span
          className="text-sm tracking-[0.3em]"
          style={{ fontFamily: mono, color: C.muted }}
        >
          {n}
        </span>
        <span
          className="text-[11px] uppercase tracking-[0.3em]"
          style={{ fontFamily: mono, color: C.muted }}
        >
          {kicker}
        </span>
      </div>
      <h2
        className="mt-8 max-w-3xl text-balance text-[2.4rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[3.6rem]"
        style={{ fontFamily: mono, color: C.ink }}
      >
        {heading}
      </h2>
      {intro ? (
        <p
          className="mt-6 max-w-2xl text-xl leading-relaxed"
          style={{ fontFamily: serif, color: C.inkSoft }}
        >
          {renderEmphasis(intro)}
        </p>
      ) : null}
    </FadeUp>
  );
}

export default function VariantA1Page() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.bg, color: C.ink, fontFamily: serif }}
    >
      {/* Masthead */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ borderColor: C.ink, backgroundColor: "rgba(243,243,241,0.82)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <span
            className="text-lg font-bold tracking-[-0.04em]"
            style={{ fontFamily: mono, color: C.ink }}
          >
            VOLTA
          </span>
          <span
            className="hidden text-[11px] uppercase tracking-[0.3em] sm:block"
            style={{ fontFamily: mono, color: C.muted }}
          >
            Pre-IND / Index
          </span>
          <a
            href={cta.primary.href}
            className="text-[11px] uppercase tracking-[0.2em] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-60"
            style={{ fontFamily: mono, color: C.ink }}
          >
            {cta.primary.label}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* HERO — oversized type + index */}
        <section className="grid gap-12 pt-20 pb-24 sm:pt-28 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <FadeUp>
              <span
                className="text-[11px] uppercase tracking-[0.34em]"
                style={{ fontFamily: mono, color: C.muted }}
              >
                {hero.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1
                className="mt-8 max-w-4xl text-balance text-[3rem] font-medium leading-[0.92] tracking-[-0.04em] sm:text-[5rem] lg:text-[6rem]"
                style={{ fontFamily: mono, color: C.ink }}
              >
                {hero.headline}
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p
                className="mt-10 max-w-2xl text-2xl leading-relaxed"
                style={{ fontFamily: serif, color: C.inkSoft }}
              >
                {renderEmphasis(hero.sub)}
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={cta.primary.href}
                  className="px-6 py-3 text-[12px] uppercase tracking-[0.2em] transition-opacity hover:opacity-90"
                  style={{ fontFamily: mono, backgroundColor: C.ink, color: C.bg }}
                >
                  {cta.primary.label}
                </a>
                <a
                  href={cta.secondary.href}
                  className="border px-6 py-3 text-[12px] uppercase tracking-[0.2em] transition-colors hover:bg-[#e7e7e4]"
                  style={{ fontFamily: mono, borderColor: C.ink, color: C.ink }}
                >
                  {cta.secondary.label}
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Table of contents / index */}
          <FadeUp delay={0.2} className="lg:w-64">
            <div
              className="border-t pt-4 lg:sticky lg:top-28"
              style={{ borderColor: C.ink }}
            >
              <div
                className="text-[11px] uppercase tracking-[0.3em]"
                style={{ fontFamily: mono, color: C.muted }}
              >
                Contents
              </div>
              <ul className="mt-5 space-y-3">
                {SECTIONS.map((s) => (
                  <li key={s.n}>
                    <a
                      href={s.href}
                      className="group flex items-baseline gap-3 transition-opacity hover:opacity-60"
                      style={{ fontFamily: mono }}
                    >
                      <span
                        className="text-sm tabular-nums"
                        style={{ color: C.muted }}
                      >
                        {s.n}
                      </span>
                      <span
                        className="text-sm tracking-[-0.01em]"
                        style={{ color: C.ink }}
                      >
                        {s.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </section>

        {/* 01 — PROBLEM */}
        <section id="a1-problem" className="py-24 sm:py-32">
          <SectionHead
            n="01"
            kicker="The problem"
            heading={problem.heading}
            intro={problem.intro}
          />
          <FadeUp delay={0.1}>
            <p
              className="mt-16 max-w-4xl text-balance text-3xl italic leading-snug sm:text-[2.6rem]"
              style={{ fontFamily: serif, color: C.ink }}
            >
              “{problem.diagnosis.title}”
            </p>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ fontFamily: serif, color: C.muted }}
            >
              {problem.diagnosis.desc}
            </p>
          </FadeUp>

          <Stagger className="mt-20 grid gap-px sm:grid-cols-3" style={{ backgroundColor: C.line }}>
            {problem.points.map((p, i) => (
              <StaggerItem
                key={p.title}
                className="px-6 py-8"
                style={{ backgroundColor: C.bg }}
              >
                <span
                  className="text-5xl font-bold tracking-[-0.04em]"
                  style={{ fontFamily: mono, color: C.line }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 text-xl font-medium"
                  style={{ fontFamily: mono, color: C.ink }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-lg leading-relaxed"
                  style={{ fontFamily: serif, color: C.inkSoft }}
                >
                  {renderEmphasis(p.desc)}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* 02 — WORKFLOW */}
        <section id="a1-workflow" className="py-24 sm:py-32">
          <SectionHead
            n="02"
            kicker="The workflow"
            heading={voltaWorkflow.heading}
            intro={voltaWorkflow.intro}
          />
          <Stagger className="mt-16" as="ol">
            {voltaWorkflow.cards.map((card) => (
              <StaggerItem
                key={card.step}
                as="li"
                className="grid items-start gap-4 border-t py-10 sm:grid-cols-[6rem_1fr] sm:gap-10"
                style={{ borderColor: C.line }}
              >
                <span
                  className="text-6xl font-bold leading-none tracking-[-0.05em] sm:text-7xl"
                  style={{ fontFamily: mono, color: C.ink }}
                >
                  {card.step}
                </span>
                <div>
                  <h3
                    className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl"
                    style={{ fontFamily: mono, color: C.ink }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-3 max-w-2xl text-xl leading-relaxed"
                    style={{ fontFamily: serif, color: C.inkSoft }}
                  >
                    {renderEmphasis(card.desc)}
                  </p>
                  <p
                    className="mt-4 text-[11px] uppercase tracking-[0.22em]"
                    style={{ fontFamily: mono, color: C.muted }}
                  >
                    {card.tags.join("  /  ")}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* 03 — OUTPUTS */}
        <section id="a1-outputs" className="py-24 sm:py-32">
          <SectionHead
            n="03"
            kicker="The deliverable"
            heading={outputs.heading}
            intro={outputs.intro}
          />
          <FadeUp delay={0.1}>
            <p
              className="mt-14 max-w-3xl text-balance text-3xl leading-snug sm:text-4xl"
              style={{ fontFamily: mono, color: C.ink }}
            >
              {outputs.summary.title}
            </p>
            <p
              className="mt-5 max-w-2xl text-lg leading-relaxed"
              style={{ fontFamily: serif, color: C.muted }}
            >
              {renderEmphasis(outputs.summary.desc)}
            </p>
          </FadeUp>

          <Stagger className="mt-16" as="ul" stagger={0.07}>
            {outputs.items.map((item, i) => (
              <StaggerItem
                key={item.title}
                as="li"
                className="grid gap-3 border-t py-7 sm:grid-cols-[3rem_12rem_1fr] sm:gap-8"
                style={{ borderColor: C.line }}
              >
                <span
                  className="text-sm tabular-nums"
                  style={{ fontFamily: mono, color: C.muted }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[11px] uppercase tracking-[0.22em] sm:pt-1"
                  style={{ fontFamily: mono, color: C.muted }}
                >
                  {item.category}
                </span>
                <div>
                  <h3
                    className="text-xl font-medium"
                    style={{ fontFamily: mono, color: C.ink }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-lg leading-relaxed"
                    style={{ fontFamily: serif, color: C.inkSoft }}
                  >
                    {renderEmphasis(item.desc)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.1}>
            <div
              className="mt-14 border-l-2 px-8 py-8"
              style={{ borderColor: C.ink, backgroundColor: C.surface }}
            >
              <h3
                className="text-2xl font-medium tracking-[-0.02em]"
                style={{ fontFamily: mono, color: C.ink }}
              >
                {outputs.completion.title}
              </h3>
              <p
                className="mt-3 max-w-2xl text-lg leading-relaxed"
                style={{ fontFamily: serif, color: C.inkSoft }}
              >
                {outputs.completion.desc}
              </p>
            </div>
          </FadeUp>
        </section>

        {/* 04 — TRUST */}
        <section id="a1-trust" className="py-24 sm:py-32">
          <SectionHead
            n="04"
            kicker="The guardrails"
            heading={trust.heading}
            intro={trust.sub}
          />
          <FadeUp delay={0.08}>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ fontFamily: serif, color: C.muted }}
            >
              {trust.body}
            </p>
          </FadeUp>
          <Stagger className="mt-14 grid gap-px sm:grid-cols-3" style={{ backgroundColor: C.line }}>
            {trust.pillars.map((pillar) => (
              <StaggerItem
                key={pillar.title}
                className="px-6 py-8"
                style={{ backgroundColor: C.bg }}
              >
                <h3
                  className="text-xl font-medium tracking-[-0.01em]"
                  style={{ fontFamily: mono, color: C.ink }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="mt-3 text-lg leading-relaxed"
                  style={{ fontFamily: serif, color: C.inkSoft }}
                >
                  {renderEmphasis(pillar.desc)}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* 05 — EXPERT NETWORK */}
        <section id="a1-experts" className="py-24 sm:py-32">
          <SectionHead
            n="05"
            kicker="The network"
            heading={expertNetwork.heading}
            intro={expertNetwork.intro}
          />
          <Stagger className="mt-12 flex flex-wrap gap-3">
            {expertNetwork.domains.map((domain) => (
              <StaggerItem
                key={domain}
                className="border px-5 py-2 text-sm"
                style={{ fontFamily: mono, borderColor: C.ink, color: C.ink }}
              >
                {domain}
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* 06 — CTA */}
        <section id="a1-cta" className="border-t py-28 sm:py-40" style={{ borderColor: C.ink }}>
          <FadeUp>
            <span
              className="text-[11px] uppercase tracking-[0.34em]"
              style={{ fontFamily: mono, color: C.muted }}
            >
              06 / Start here
            </span>
            <h2
              className="mt-8 max-w-4xl text-balance text-[2.6rem] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[5rem]"
              style={{ fontFamily: mono, color: C.ink }}
            >
              {finalCta.heading}
            </h2>
            <p
              className="mt-8 max-w-2xl text-xl leading-relaxed"
              style={{ fontFamily: serif, color: C.inkSoft }}
            >
              {renderEmphasis(finalCta.sub)}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={cta.primary.href}
                className="px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] transition-opacity hover:opacity-90"
                style={{ fontFamily: mono, backgroundColor: C.ink, color: C.bg }}
              >
                {cta.primary.label}
              </a>
              <a
                href={cta.secondary.href}
                className="border px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] transition-colors hover:bg-[#e7e7e4]"
                style={{ fontFamily: mono, borderColor: C.ink, color: C.ink }}
              >
                {cta.secondary.label}
              </a>
            </div>
          </FadeUp>
        </section>
      </main>

      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 sm:px-10">
          <span className="text-lg font-bold tracking-[-0.04em]" style={{ fontFamily: mono, color: C.ink }}>
            VOLTA
          </span>
          <span className="text-[11px] uppercase tracking-[0.24em]" style={{ fontFamily: mono, color: C.muted }}>
            You do the science.
          </span>
        </div>
      </footer>
    </div>
  );
}
