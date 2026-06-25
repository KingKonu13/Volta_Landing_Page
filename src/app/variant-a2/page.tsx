import type { Metadata } from "next";
import { DM_Serif_Display, Work_Sans } from "next/font/google";
import { renderEmphasis } from "@/lib/utils";
import { FadeUp, Stagger, StaggerItem } from "@/components/variants/a2/reveal";
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

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-a2-display",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-a2-body",
});

export const metadata: Metadata = {
  title: "Volta — Statements (Variant A2)",
  description:
    "A full-bleed, statement-driven presentation of the Volta Pre-IND workflow.",
};

// Warm sand / taupe neutral palette.
const C = {
  bg: "#e9e2d6",
  surface: "#ddd3c2",
  deep: "#2a2420",
  ink: "#2a2420",
  inkSoft: "#4b4035",
  muted: "#6f6353",
  line: "#c9bda8",
};

const disp = "var(--font-a2-display)";
const sans = "var(--font-a2-body)";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] font-medium uppercase tracking-[0.36em]"
      style={{ fontFamily: sans, color: C.muted }}
    >
      {children}
    </span>
  );
}

export default function VariantA2Page() {
  return (
    <div
      id="top"
      className={`${display.variable} ${body.variable} min-h-screen overflow-x-hidden antialiased`}
      style={{ backgroundColor: C.bg, color: C.ink, fontFamily: sans }}
    >
      {/* Masthead */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-12">
          <span className="text-2xl" style={{ fontFamily: disp, color: C.ink }}>
            Volta
          </span>
          <a
            href={cta.primary.href}
            className="rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
            style={{ fontFamily: sans, backgroundColor: C.deep, color: C.bg }}
          >
            {cta.primary.label}
          </a>
        </div>
      </header>

      <main>
        {/* HERO — full-bleed oversized serif statement */}
        <section className="flex min-h-screen flex-col justify-center px-6 pt-28 pb-16 sm:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <FadeUp>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1
                className="mt-8 max-w-[16ch] text-balance text-[3.4rem] leading-[0.98] tracking-[-0.01em] sm:text-[6rem] lg:text-[7.5rem]"
                style={{ fontFamily: disp, color: C.ink }}
              >
                {hero.headline}
              </h1>
            </FadeUp>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <FadeUp delay={0.2}>
                <p
                  className="max-w-xl text-xl font-light leading-relaxed"
                  style={{ fontFamily: sans, color: C.inkSoft }}
                >
                  {renderEmphasis(hero.sub)}
                </p>
              </FadeUp>
              <FadeUp delay={0.28}>
                <ul className="flex flex-col gap-2 lg:items-end">
                  {hero.badges.map((badge) => (
                    <li
                      key={badge}
                      className="text-sm uppercase tracking-[0.18em]"
                      style={{ fontFamily: sans, color: C.muted }}
                    >
                      {badge}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
            <FadeUp delay={0.34}>
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href={cta.primary.href}
                  className="rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ fontFamily: sans, backgroundColor: C.deep, color: C.bg }}
                >
                  {cta.primary.label}
                </a>
                <a
                  href={cta.secondary.href}
                  className="rounded-full border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-[#ddd3c2]"
                  style={{ fontFamily: sans, borderColor: C.muted, color: C.ink }}
                >
                  {cta.secondary.label}
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* PROBLEM — full-bleed dark statement */}
        <section className="px-6 py-28 sm:px-12 sm:py-40" style={{ backgroundColor: C.deep }}>
          <div className="mx-auto w-full max-w-7xl">
            <FadeUp>
              <Eyebrow>The problem</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                className="mt-8 max-w-[18ch] text-balance text-[2.6rem] leading-[1.02] sm:text-[4.5rem]"
                style={{ fontFamily: disp, color: C.bg }}
              >
                {problem.heading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p
                className="mt-8 max-w-2xl text-xl font-light leading-relaxed"
                style={{ fontFamily: sans, color: "#ccc1ad" }}
              >
                {renderEmphasis(problem.intro)}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <blockquote
                className="mt-20 max-w-4xl text-balance text-3xl italic leading-snug sm:text-[2.8rem]"
                style={{ fontFamily: disp, color: C.bg }}
              >
                “{problem.diagnosis.title}”
              </blockquote>
            </FadeUp>

            <Stagger className="mt-16 grid gap-10 sm:grid-cols-3">
              {problem.points.map((p, i) => (
                <StaggerItem key={p.title}>
                  <span
                    className="text-sm tracking-[0.2em]"
                    style={{ fontFamily: sans, color: "#9b8e78" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-4 text-2xl"
                    style={{ fontFamily: disp, color: C.bg }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-3 text-lg font-light leading-relaxed"
                    style={{ fontFamily: sans, color: "#ccc1ad" }}
                  >
                    {renderEmphasis(p.desc)}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* WORKFLOW — alternating asymmetric rows */}
        <section className="px-6 py-28 sm:px-12 sm:py-40">
          <div className="mx-auto w-full max-w-7xl">
            <FadeUp>
              <Eyebrow>The workflow</Eyebrow>
              <h2
                className="mt-8 max-w-[16ch] text-balance text-[2.6rem] leading-[1.02] sm:text-[4.5rem]"
                style={{ fontFamily: disp, color: C.ink }}
              >
                {voltaWorkflow.heading}
              </h2>
              <p
                className="mt-6 max-w-xl text-xl font-light leading-relaxed"
                style={{ fontFamily: sans, color: C.inkSoft }}
              >
                {voltaWorkflow.intro}
              </p>
            </FadeUp>

            <div className="mt-20 space-y-16 sm:space-y-24">
              {voltaWorkflow.cards.map((card, i) => (
                <FadeUp key={card.step} delay={0.05}>
                  <div
                    className={`grid items-center gap-8 sm:grid-cols-2 sm:gap-16 ${
                      i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <span
                      className="text-[7rem] leading-none sm:text-[12rem]"
                      style={{ fontFamily: disp, color: C.line }}
                    >
                      {card.step}
                    </span>
                    <div>
                      <h3
                        className="text-3xl sm:text-4xl"
                        style={{ fontFamily: disp, color: C.ink }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="mt-4 max-w-md text-lg font-light leading-relaxed"
                        style={{ fontFamily: sans, color: C.inkSoft }}
                      >
                        {renderEmphasis(card.desc)}
                      </p>
                      <p
                        className="mt-5 text-xs uppercase tracking-[0.22em]"
                        style={{ fontFamily: sans, color: C.muted }}
                      >
                        {card.tags.join("  ·  ")}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* OUTPUTS — editorial register on surface */}
        <section className="px-6 py-28 sm:px-12 sm:py-40" style={{ backgroundColor: C.surface }}>
          <div className="mx-auto w-full max-w-7xl">
            <FadeUp>
              <Eyebrow>The deliverable</Eyebrow>
              <h2
                className="mt-8 max-w-[14ch] text-balance text-[2.6rem] leading-[1.02] sm:text-[4.5rem]"
                style={{ fontFamily: disp, color: C.ink }}
              >
                {outputs.heading}
              </h2>
              <p
                className="mt-6 max-w-xl text-xl font-light leading-relaxed"
                style={{ fontFamily: sans, color: C.inkSoft }}
              >
                {renderEmphasis(outputs.intro)}
              </p>
            </FadeUp>

            <Stagger className="mt-16" as="ul" stagger={0.07}>
              {outputs.items.map((item) => (
                <StaggerItem
                  key={item.title}
                  as="li"
                  className="grid gap-4 border-t py-8 sm:grid-cols-[1fr_2fr] sm:gap-12"
                  style={{ borderColor: C.line }}
                >
                  <div>
                    <span
                      className="text-xs uppercase tracking-[0.22em]"
                      style={{ fontFamily: sans, color: C.muted }}
                    >
                      {item.category}
                    </span>
                    <h3
                      className="mt-2 text-2xl sm:text-3xl"
                      style={{ fontFamily: disp, color: C.ink }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-lg font-light leading-relaxed sm:pt-2"
                    style={{ fontFamily: sans, color: C.inkSoft }}
                  >
                    {renderEmphasis(item.desc)}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp delay={0.1}>
              <div className="mt-16 max-w-3xl">
                <h3
                  className="text-balance text-3xl italic leading-snug sm:text-4xl"
                  style={{ fontFamily: disp, color: C.ink }}
                >
                  {outputs.completion.title}
                </h3>
                <p
                  className="mt-4 text-lg font-light leading-relaxed"
                  style={{ fontFamily: sans, color: C.inkSoft }}
                >
                  {outputs.completion.desc}
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* TRUST — big statement + pillars */}
        <section className="px-6 py-28 sm:px-12 sm:py-40">
          <div className="mx-auto w-full max-w-7xl">
            <FadeUp>
              <Eyebrow>The guardrails</Eyebrow>
              <h2
                className="mt-8 max-w-[14ch] text-balance text-[2.6rem] leading-[1.02] sm:text-[4.5rem]"
                style={{ fontFamily: disp, color: C.ink }}
              >
                {trust.heading}
              </h2>
              <p
                className="mt-6 max-w-2xl text-xl font-light leading-relaxed"
                style={{ fontFamily: sans, color: C.inkSoft }}
              >
                {renderEmphasis(trust.sub)}
              </p>
            </FadeUp>
            <Stagger className="mt-16 grid gap-12 sm:grid-cols-3">
              {trust.pillars.map((pillar) => (
                <StaggerItem key={pillar.title}>
                  <div className="mb-5 h-px w-10" style={{ backgroundColor: C.ink }} />
                  <h3 className="text-2xl" style={{ fontFamily: disp, color: C.ink }}>
                    {pillar.title}
                  </h3>
                  <p
                    className="mt-3 text-lg font-light leading-relaxed"
                    style={{ fontFamily: sans, color: C.inkSoft }}
                  >
                    {renderEmphasis(pillar.desc)}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* EXPERT NETWORK */}
        <section className="px-6 py-28 sm:px-12 sm:py-40" style={{ backgroundColor: C.surface }}>
          <div className="mx-auto w-full max-w-7xl">
            <FadeUp>
              <Eyebrow>The network</Eyebrow>
              <h2
                className="mt-8 max-w-[16ch] text-balance text-[2.6rem] leading-[1.02] sm:text-[4.5rem]"
                style={{ fontFamily: disp, color: C.ink }}
              >
                {expertNetwork.heading}
              </h2>
              <p
                className="mt-6 max-w-2xl text-xl font-light leading-relaxed"
                style={{ fontFamily: sans, color: C.inkSoft }}
              >
                {renderEmphasis(expertNetwork.intro)}
              </p>
            </FadeUp>
            <Stagger className="mt-12 flex flex-wrap gap-3">
              {expertNetwork.domains.map((domain) => (
                <StaggerItem
                  key={domain}
                  className="rounded-full border px-5 py-2 text-sm"
                  style={{ fontFamily: sans, borderColor: C.muted, color: C.ink }}
                >
                  {domain}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* FINAL CTA — full-bleed dark statement */}
        <section className="px-6 py-32 sm:px-12 sm:py-48" style={{ backgroundColor: C.deep }}>
          <div className="mx-auto w-full max-w-7xl">
            <FadeUp>
              <h2
                className="max-w-[15ch] text-balance text-[2.8rem] leading-[1.0] sm:text-[6rem]"
                style={{ fontFamily: disp, color: C.bg }}
              >
                {finalCta.heading}
              </h2>
              <p
                className="mt-8 max-w-2xl text-xl font-light leading-relaxed"
                style={{ fontFamily: sans, color: "#ccc1ad" }}
              >
                {renderEmphasis(finalCta.sub)}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={cta.primary.href}
                  className="rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ fontFamily: sans, backgroundColor: C.bg, color: C.deep }}
                >
                  {cta.primary.label}
                </a>
                <a
                  href={cta.secondary.href}
                  className="rounded-full border px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-80"
                  style={{ fontFamily: sans, borderColor: "#6f6353", color: C.bg }}
                >
                  {cta.secondary.label}
                </a>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: C.deep }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 sm:px-12">
          <span className="text-2xl" style={{ fontFamily: disp, color: C.bg }}>
            Volta
          </span>
          <span
            className="text-[11px] uppercase tracking-[0.24em]"
            style={{ fontFamily: sans, color: "#9b8e78" }}
          >
            You do the science.
          </span>
        </div>
      </footer>
    </div>
  );
}
