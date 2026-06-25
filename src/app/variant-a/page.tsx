import type { Metadata } from "next";
import { renderEmphasis } from "@/lib/utils";
import { FadeUp, Stagger, StaggerItem } from "@/components/variants/a/reveal";
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

export const metadata: Metadata = {
  title: "Volta — Editorial (Variant A)",
  description:
    "An editorial, long-form narrative presentation of the Volta Pre-IND workflow.",
};

const COLORS = {
  bg: "#f8f6f2",
  surface: "#f0ece4",
  ink: "#1c1612",
  inkSoft: "#3b3128",
  muted: "#6c5e4e",
  line: "#ddd2c0",
};

/* A thin centered hairline used as a section rhythm marker. */
function Hairline({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto h-px w-full max-w-[2rem] ${className}`}
      style={{ backgroundColor: COLORS.ink }}
    />
  );
}

/* Small uppercase label used to introduce a movement in the narrative. */
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[11px] font-medium uppercase tracking-[0.28em]"
      style={{ color: COLORS.muted }}
    >
      {children}
    </span>
  );
}

export default function VariantAPage() {
  return (
    <div
      id="top"
      className="min-h-screen font-sans antialiased"
      style={{ backgroundColor: COLORS.bg, color: COLORS.ink }}
    >
      {/* ---- Minimal editorial masthead ---- */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: COLORS.line,
          backgroundColor: "rgba(248,246,242,0.78)",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span
            className="font-display text-xl tracking-tight"
            style={{ color: COLORS.ink }}
          >
            Volta
          </span>
          <span
            className="hidden text-[11px] uppercase tracking-[0.28em] sm:block"
            style={{ color: COLORS.muted }}
          >
            Pre-IND, narrated
          </span>
          <a
            href={cta.primary.href}
            className="rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.ink, color: COLORS.bg }}
          >
            {cta.primary.label}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        {/* ============ HERO ============ */}
        <section className="pt-28 pb-24 text-center sm:pt-36 sm:pb-32">
          <FadeUp>
            <Kicker>{hero.eyebrow}</Kicker>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1
              className="font-display mt-8 text-balance text-[2.75rem] leading-[1.02] tracking-[-0.02em] sm:text-6xl"
              style={{ color: COLORS.ink }}
            >
              {hero.headline}
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed"
              style={{ color: COLORS.inkSoft }}
            >
              {renderEmphasis(hero.sub)}
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              <a
                href={cta.primary.href}
                className="rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: COLORS.ink, color: COLORS.bg }}
              >
                {cta.primary.label}
              </a>
              <a
                href={cta.secondary.href}
                className="rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-[#f0ece4]"
                style={{ borderColor: COLORS.line, color: COLORS.ink }}
              >
                {cta.secondary.label}
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.32}>
            <p
              className="mt-10 text-[13px] uppercase tracking-[0.18em]"
              style={{ color: COLORS.muted }}
            >
              {hero.badges.join("  ·  ")}
            </p>
          </FadeUp>
        </section>

        {/* ============ PROBLEM NARRATIVE ============ */}
        <section className="border-t py-24 sm:py-32" style={{ borderColor: COLORS.line }}>
          <FadeUp className="text-center">
            <Kicker>The problem</Kicker>
            <h2
              className="font-display mx-auto mt-6 max-w-2xl text-balance text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl"
              style={{ color: COLORS.ink }}
            >
              {problem.heading}
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: COLORS.inkSoft }}
            >
              {renderEmphasis(problem.intro)}
            </p>
          </FadeUp>

          {/* Pull quote — the diagnosis */}
          <FadeUp delay={0.1}>
            <figure className="mx-auto mt-20 max-w-2xl text-center">
              <Hairline />
              <blockquote
                className="font-display mt-8 text-2xl leading-snug tracking-[-0.01em] sm:text-3xl"
                style={{ color: COLORS.ink }}
              >
                “{problem.diagnosis.title}”
              </blockquote>
              <figcaption
                className="mt-6 text-[11px] uppercase tracking-[0.28em]"
                style={{ color: COLORS.muted }}
              >
                {problem.diagnosis.label}
              </figcaption>
              <p
                className="mx-auto mt-6 max-w-lg text-base leading-relaxed"
                style={{ color: COLORS.inkSoft }}
              >
                {problem.diagnosis.desc}
              </p>
            </figure>
          </FadeUp>

          {/* The three points, as a numbered editorial list */}
          <Stagger className="mx-auto mt-20 max-w-xl space-y-10" as="ol">
            {problem.points.map((point, i) => (
              <StaggerItem key={point.title} as="li" className="flex gap-6">
                <span
                  className="font-display shrink-0 text-2xl leading-none"
                  style={{ color: COLORS.muted }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-lg font-medium"
                    style={{ color: COLORS.ink }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ color: COLORS.inkSoft }}
                  >
                    {renderEmphasis(point.desc)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ============ HOW IT WORKS — THE WORKFLOW ============ */}
        <section
          id="volta-workflow"
          className="border-t py-24 sm:py-32"
          style={{ borderColor: COLORS.line }}
        >
          <FadeUp className="text-center">
            <Kicker>How it works</Kicker>
            <h2
              className="font-display mx-auto mt-6 max-w-2xl text-balance text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl"
              style={{ color: COLORS.ink }}
            >
              {voltaWorkflow.heading}
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: COLORS.inkSoft }}
            >
              {voltaWorkflow.intro}
            </p>
          </FadeUp>

          {/* Vertical narrative timeline with a hairline spine */}
          <Stagger className="relative mt-20" stagger={0.12} as="ol">
            <div
              className="absolute left-[7px] top-2 bottom-2 hidden w-px sm:block"
              style={{ backgroundColor: COLORS.line }}
              aria-hidden
            />
            {voltaWorkflow.cards.map((card) => (
              <StaggerItem
                key={card.step}
                as="li"
                className="relative pb-16 last:pb-0 sm:pl-12"
              >
                <span
                  className="absolute left-0 top-1 hidden h-[15px] w-[15px] rounded-full border-2 sm:block"
                  style={{ borderColor: COLORS.ink, backgroundColor: COLORS.bg }}
                  aria-hidden
                />
                <div
                  className="font-display text-sm tracking-[0.2em]"
                  style={{ color: COLORS.muted }}
                >
                  STEP {card.step}
                </div>
                <h3
                  className="font-display mt-3 text-2xl tracking-[-0.01em] sm:text-3xl"
                  style={{ color: COLORS.ink }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-3 max-w-xl text-base leading-relaxed"
                  style={{ color: COLORS.inkSoft }}
                >
                  {renderEmphasis(card.desc)}
                </p>
                <p
                  className="mt-4 text-[12px] uppercase tracking-[0.18em]"
                  style={{ color: COLORS.muted }}
                >
                  {card.tags.join("  ·  ")}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ============ OUTPUTS ============ */}
        <section
          id="outputs"
          className="border-t py-24 sm:py-32"
          style={{ borderColor: COLORS.line }}
        >
          <FadeUp className="text-center">
            <Kicker>The deliverable</Kicker>
            <h2
              className="font-display mx-auto mt-6 max-w-2xl text-balance text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl"
              style={{ color: COLORS.ink }}
            >
              {outputs.heading}
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: COLORS.inkSoft }}
            >
              {renderEmphasis(outputs.intro)}
            </p>
          </FadeUp>

          {/* Summary statement */}
          <FadeUp delay={0.1}>
            <div className="mx-auto mt-16 max-w-2xl text-center">
              <Hairline />
              <h3
                className="font-display mt-8 text-2xl leading-snug tracking-[-0.01em] sm:text-3xl"
                style={{ color: COLORS.ink }}
              >
                {outputs.summary.title}
              </h3>
              <p
                className="mx-auto mt-5 max-w-lg text-base leading-relaxed"
                style={{ color: COLORS.inkSoft }}
              >
                {renderEmphasis(outputs.summary.desc)}
              </p>
            </div>
          </FadeUp>

          {/* The items, as an editorial register / list */}
          <Stagger className="mx-auto mt-20 max-w-2xl" stagger={0.08} as="ul">
            {outputs.items.map((item) => (
              <StaggerItem
                key={item.title}
                as="li"
                className="border-t py-8 first:border-t-0 sm:flex sm:gap-10"
                style={{ borderColor: COLORS.line }}
              >
                <div
                  className="mb-2 shrink-0 text-[11px] uppercase tracking-[0.22em] sm:mb-0 sm:w-40 sm:pt-1"
                  style={{ color: COLORS.muted }}
                >
                  {item.category}
                </div>
                <div>
                  <h3
                    className="text-lg font-medium"
                    style={{ color: COLORS.ink }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ color: COLORS.inkSoft }}
                  >
                    {renderEmphasis(item.desc)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.1}>
            <div
              className="mx-auto mt-16 max-w-2xl rounded-2xl px-8 py-10 text-center"
              style={{ backgroundColor: COLORS.surface }}
            >
              <h3
                className="font-display text-2xl tracking-[-0.01em]"
                style={{ color: COLORS.ink }}
              >
                {outputs.completion.title}
              </h3>
              <p
                className="mx-auto mt-4 max-w-lg text-base leading-relaxed"
                style={{ color: COLORS.inkSoft }}
              >
                {outputs.completion.desc}
              </p>
            </div>
          </FadeUp>
        </section>

        {/* ============ TRUST ============ */}
        <section
          id="trust"
          className="border-t py-24 sm:py-32"
          style={{ borderColor: COLORS.line }}
        >
          <FadeUp className="text-center">
            <Kicker>Trust</Kicker>
            <h2
              className="font-display mx-auto mt-6 max-w-2xl text-balance text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl"
              style={{ color: COLORS.ink }}
            >
              {trust.heading}
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: COLORS.inkSoft }}
            >
              {renderEmphasis(trust.sub)}
            </p>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              {trust.body}
            </p>
          </FadeUp>

          <Stagger className="mx-auto mt-20 max-w-2xl space-y-12" stagger={0.1} as="ul">
            {trust.pillars.map((pillar) => (
              <StaggerItem key={pillar.title} as="li" className="text-center">
                <Hairline className="!bg-[#ddd2c0]" />
                <h3
                  className="font-display mt-6 text-2xl tracking-[-0.01em]"
                  style={{ color: COLORS.ink }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="mx-auto mt-3 max-w-md text-base leading-relaxed"
                  style={{ color: COLORS.inkSoft }}
                >
                  {renderEmphasis(pillar.desc)}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ============ EXPERT NETWORK ============ */}
        <section
          id="expert-network"
          className="border-t py-24 sm:py-32"
          style={{ borderColor: COLORS.line }}
        >
          <FadeUp className="text-center">
            <Kicker>Expert network</Kicker>
            <h2
              className="font-display mx-auto mt-6 max-w-2xl text-balance text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl"
              style={{ color: COLORS.ink }}
            >
              {expertNetwork.heading}
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed"
              style={{ color: COLORS.inkSoft }}
            >
              {renderEmphasis(expertNetwork.intro)}
            </p>
          </FadeUp>

          <Stagger
            className="mx-auto mt-16 flex max-w-2xl flex-wrap justify-center gap-x-3 gap-y-4"
            stagger={0.06}
          >
            {expertNetwork.domains.map((domain) => (
              <StaggerItem
                key={domain}
                className="rounded-full border px-5 py-2 text-sm"
                style={{ borderColor: COLORS.line, color: COLORS.inkSoft }}
              >
                {domain}
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section
          id="sponsors"
          className="border-t py-28 text-center sm:py-36"
          style={{ borderColor: COLORS.line }}
        >
          <FadeUp>
            <h2
              className="font-display mx-auto max-w-2xl text-balance text-4xl leading-[1.04] tracking-[-0.02em] sm:text-6xl"
              style={{ color: COLORS.ink }}
            >
              {finalCta.heading}
            </h2>
            <p
              className="mx-auto mt-7 max-w-xl text-lg leading-relaxed"
              style={{ color: COLORS.inkSoft }}
            >
              {renderEmphasis(finalCta.sub)}
            </p>
            <div
              id="experts"
              className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3"
            >
              <a
                href={cta.primary.href}
                className="rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: COLORS.ink, color: COLORS.bg }}
              >
                {cta.primary.label}
              </a>
              <a
                href={cta.secondary.href}
                className="rounded-full border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-[#f0ece4]"
                style={{ borderColor: COLORS.line, color: COLORS.ink }}
              >
                {cta.secondary.label}
              </a>
            </div>
          </FadeUp>
        </section>
      </main>

      {/* ---- Minimal footer ---- */}
      <footer className="border-t" style={{ borderColor: COLORS.line }}>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-6 py-12 text-center">
          <span className="font-display text-lg" style={{ color: COLORS.ink }}>
            Volta
          </span>
          <span className="text-[12px] uppercase tracking-[0.22em]" style={{ color: COLORS.muted }}>
            You do the science. Volta handles the filing work.
          </span>
        </div>
      </footer>
    </div>
  );
}
