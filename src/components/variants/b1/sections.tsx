"use client";

import { motion } from "framer-motion";
import {
  hero,
  problem,
  voltaWorkflow,
  outputs,
  trust,
  audiences,
  expertNetwork,
  finalCta,
  cta,
} from "@/content/site";
import { renderEmphasis } from "@/lib/utils";
import { newsreader, spaceGrotesk } from "./fonts";

/* ------------------------------------------------------------------ *
 * Palette — warm sand / broadsheet neutrals
 *   paper   #f4efe6   page ground
 *   page2   #faf7f1   off-white tiles
 *   sand    #e9ddc8   sand tiles
 *   taupe   #ddccb0   deeper sand
 *   line    #cebd9f   hairline rules
 *   muted   #7c6f5c   warm grey body
 *   ink     #221d18   charcoal text
 *   night   #1f1a15   dark sections
 *   clay    #a9794f   sparing accent stroke / label
 * ------------------------------------------------------------------ */

const serif = newsreader.className;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ============================ MASTHEAD ============================ */

function Masthead() {
  return (
    <header className="border-b-2 border-[#221d18]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center justify-between py-3 text-[11px] uppercase tracking-[0.28em] text-[#7c6f5c]">
          <span>Pre-IND Edition</span>
          <span className="hidden sm:block">AI-native · Expert-reviewed</span>
          <span>Est. for sponsors</span>
        </div>
        <div className="border-t border-[#cebd9f] py-6 md:py-8">
          <div className="flex flex-col items-center text-center">
            <span className="mb-2 text-[10px] uppercase tracking-[0.45em] text-[#a9794f]">
              The regulatory broadsheet
            </span>
            <h1
              className={`${serif} text-[18vw] leading-[0.82] tracking-[-0.04em] text-[#221d18] md:text-[160px]`}
            >
              Volta
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#cebd9f] py-3 text-[11px] uppercase tracking-[0.22em] text-[#7c6f5c]">
          <span>Vol. 01 — Source documents → Briefing package</span>
          <a
            href={cta.primary.href}
            className="border-b border-[#221d18] pb-0.5 text-[#221d18] transition-opacity hover:opacity-60"
          >
            {cta.primary.label} →
          </a>
        </div>
      </div>
    </header>
  );
}

/* ============================== HERO ============================== */

function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Lead column */}
        <div className="lg:col-span-8 lg:border-r lg:border-[#cebd9f] lg:pr-10">
          <Reveal>
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#a9794f]">
              {hero.eyebrow}
            </p>
            <h2
              className={`${serif} text-[clamp(2.6rem,7vw,5.4rem)] font-light leading-[0.95] tracking-[-0.03em] text-[#221d18]`}
            >
              You do the science.{" "}
              <span className="italic text-[#54483b]">Volta</span> handles the
              filing work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#54483b] md:columns-2 md:gap-8">
              {renderEmphasis(hero.sub)}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={cta.primary.href}
                className="rounded-none bg-[#221d18] px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-[#f4efe6] transition-colors hover:bg-[#3b3128]"
              >
                {cta.primary.label}
              </a>
              <a
                href={cta.secondary.href}
                className="border-b border-[#221d18] pb-1 text-sm uppercase tracking-[0.14em] text-[#221d18] transition-opacity hover:opacity-60"
              >
                {cta.secondary.label} →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Sidebar column — index of guarantees */}
        <aside className="lg:col-span-4">
          <Reveal delay={0.12}>
            <div className="border-t-2 border-[#221d18] pt-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#7c6f5c]">
                In this package
              </p>
              <ul className="mt-5 divide-y divide-[#cebd9f]">
                {hero.bullets.map((b, i) => (
                  <li
                    key={b}
                    className="flex items-baseline gap-4 py-3.5 text-[#221d18]"
                  >
                    <span
                      className={`${serif} text-2xl italic leading-none text-[#a9794f]`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="border border-[#cebd9f] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#7c6f5c]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}

/* ============================ INDEX STRIP ========================= */

const indexItems = [
  { no: "I", title: voltaWorkflow.heading, href: "#b1-workflow" },
  { no: "II", title: problem.heading, href: "#b1-problem" },
  { no: "III", title: outputs.heading, href: "#b1-outputs" },
  { no: "IV", title: trust.heading, href: "#b1-trust" },
  { no: "V", title: expertNetwork.heading, href: "#b1-experts" },
];

function IndexStrip() {
  return (
    <section className="border-y border-[#221d18] bg-[#e9ddc8]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 divide-y divide-[#cebd9f] md:grid-cols-5 md:divide-x md:divide-y-0">
          {indexItems.map((item) => (
            <a
              key={item.no}
              href={item.href}
              className="group flex flex-col gap-3 px-0 py-6 transition-colors hover:bg-[#ddccb0] md:px-5"
            >
              <span
                className={`${serif} text-3xl italic leading-none text-[#a9794f]`}
              >
                {item.no}
              </span>
              <span className="text-[13px] leading-snug text-[#221d18]">
                {item.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ WORKFLOW =========================== */

// varied tile sizing to break the grid rhythm
const workflowSpan = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

function Workflow() {
  return (
    <section
      id="b1-workflow"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <Reveal>
        <SectionLabel no="I" kicker="The Volta Workflow" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2
            className={`${serif} text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-[#221d18] lg:col-span-7`}
          >
            {voltaWorkflow.heading}
          </h2>
          <p className="self-end text-base leading-relaxed text-[#7c6f5c] lg:col-span-5">
            {voltaWorkflow.intro}
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
        {voltaWorkflow.cards.map((card, i) => (
          <Reveal
            key={card.step}
            delay={i * 0.06}
            className={workflowSpan[i % workflowSpan.length]}
          >
            <article
              className={`flex h-full flex-col border border-[#cebd9f] bg-[#faf7f1] p-7 ${
                i % 2 === 1 ? "md:mt-8" : ""
              }`}
            >
              <span
                className={`${serif} text-6xl font-light leading-none text-[#ddccb0]`}
              >
                {card.step}
              </span>
              <h3
                className={`${serif} mt-5 text-2xl leading-tight text-[#221d18]`}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#54483b]">
                {renderEmphasis(card.desc)}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-[#cebd9f] pt-4 text-[11px] uppercase tracking-[0.14em] text-[#7c6f5c]">
                {card.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================= PROBLEM ========================== */

function Problem() {
  return (
    <section
      id="b1-problem"
      className="border-y border-[#221d18] bg-[#ede3d2]"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <SectionLabel no="II" kicker="The hidden cost" />
          <h2
            className={`${serif} max-w-4xl text-[clamp(2rem,5vw,3.8rem)] font-light leading-[1.0] tracking-[-0.025em] text-[#221d18]`}
          >
            {problem.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#54483b]">
            {renderEmphasis(problem.intro)}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Pull-quote diagnosis */}
          <Reveal className="lg:col-span-5">
            <figure className="border-l-2 border-[#a9794f] pl-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#a9794f]">
                {problem.diagnosis.label}
              </p>
              <blockquote
                className={`${serif} mt-4 text-2xl italic leading-snug text-[#221d18] md:text-3xl`}
              >
                {problem.diagnosis.title}
              </blockquote>
              <figcaption className="mt-4 text-[15px] leading-relaxed text-[#7c6f5c]">
                {problem.diagnosis.desc}
              </figcaption>
            </figure>
          </Reveal>

          {/* Broadsheet point columns */}
          <div className="grid grid-cols-1 gap-px bg-[#cebd9f] sm:grid-cols-3 lg:col-span-7">
            {problem.points.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className="bg-[#ede3d2] p-6"
              >
                <span
                  className={`${serif} text-4xl font-light text-[#ddccb0]`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`${serif} mt-4 text-xl text-[#221d18]`}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#54483b]">
                  {renderEmphasis(p.desc)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Resolution */}
        <Reveal className="mt-16">
          <div className="border-t-2 border-[#221d18] pt-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a9794f]">
              {problem.resolution.label}
            </p>
            <h3
              className={`${serif} mt-3 max-w-3xl text-2xl leading-snug text-[#221d18] md:text-3xl`}
            >
              {problem.resolution.title}
            </h3>
            <ol className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {problem.resolution.steps.map((s, i) => (
                <li key={s.title} className="border-t border-[#cebd9f] pt-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#7c6f5c]">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className={`${serif} mt-2 text-lg text-[#221d18]`}>
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#54483b]">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
            <p className={`${serif} mt-8 max-w-2xl text-lg italic text-[#7c6f5c]`}>
              {problem.resolution.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= OUTPUTS ========================== */

// masonry-ish varied heights via columns
function Outputs() {
  return (
    <section
      id="b1-outputs"
      className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28"
    >
      <Reveal>
        <SectionLabel no="III" kicker="The deliverable set" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h2
            className={`${serif} text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-[#221d18] lg:col-span-6`}
          >
            {outputs.heading}
          </h2>
          <p className="self-end text-base leading-relaxed text-[#7c6f5c] lg:col-span-6">
            {renderEmphasis(outputs.intro)}
          </p>
        </div>
      </Reveal>

      {/* Featured summary tile */}
      <Reveal className="mt-12">
        <div className="grid grid-cols-1 gap-0 border border-[#221d18] bg-[#1f1a15] md:grid-cols-12">
          <div className="p-8 md:col-span-7 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c8b89c]">
              {outputs.summary.label}
            </p>
            <h3
              className={`${serif} mt-4 text-3xl leading-tight text-[#f4efe6] md:text-4xl`}
            >
              {outputs.summary.title}
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#c8b89c]">
              {renderEmphasis(outputs.summary.desc)}
            </p>
          </div>
          <ul className="divide-y divide-[#3b3128] border-t border-[#3b3128] md:col-span-5 md:border-l md:border-t-0">
            {outputs.summary.checks.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline gap-4 p-6 md:p-8"
              >
                <span className={`${serif} text-xl italic text-[#a9794f]`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-[#f4efe6]">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Masonry columns of outputs */}
      <div className="mt-6 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
        {outputs.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.05}>
            <article
              className={`border border-[#cebd9f] p-6 ${
                i % 3 === 1 ? "bg-[#e9ddc8]" : "bg-[#faf7f1]"
              }`}
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#a9794f]">
                {item.category}
              </span>
              <h3 className={`${serif} mt-3 text-xl leading-tight text-[#221d18]`}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#54483b]">
                {renderEmphasis(item.desc)}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-[#cebd9f] pt-3 text-[10px] uppercase tracking-[0.14em] text-[#7c6f5c]">
                {item.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="border-t-2 border-[#221d18] pt-6">
          <h3 className={`${serif} text-xl text-[#221d18]`}>
            {outputs.completion.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#7c6f5c]">
            {outputs.completion.desc}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================== TRUST ========================== */

function Trust() {
  return (
    <section id="b1-trust" className="bg-[#1f1a15]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#a9794f]">
            IV — On trust
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <h2
              className={`${serif} text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.0] tracking-[-0.025em] text-[#f4efe6] lg:col-span-6`}
            >
              {trust.heading}
            </h2>
            <div className="lg:col-span-6">
              <p className={`${serif} text-xl italic leading-snug text-[#e9ddc8]`}>
                {renderEmphasis(trust.sub)}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#c8b89c]">
                {trust.body}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-[#3b3128] md:grid-cols-3">
          {trust.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="bg-[#1f1a15] p-8">
              <span className={`${serif} text-5xl font-light text-[#54483b]`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`${serif} mt-5 text-2xl text-[#f4efe6]`}>
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c8b89c]">
                {renderEmphasis(p.desc)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ AUDIENCES ======================== */

function Audiences() {
  const blocks = [
    { ...audiences.sponsors, href: cta.primary.href, label: cta.primary.label },
    { ...audiences.experts, href: cta.secondary.href, label: cta.secondary.label },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <div className="grid grid-cols-1 gap-px bg-[#cebd9f] md:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal
            key={b.eyebrow}
            delay={i * 0.08}
            className={i === 0 ? "bg-[#faf7f1] p-8 md:p-12" : "bg-[#e9ddc8] p-8 md:p-12"}
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#a9794f]">
              {b.eyebrow}
            </p>
            <h3
              className={`${serif} mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-light leading-[1.05] text-[#221d18]`}
            >
              {b.heading}
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#54483b]">
              {renderEmphasis(b.desc)}
            </p>
            <ul className="mt-6 space-y-2.5">
              {b.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-baseline gap-3 border-b border-[#cebd9f] pb-2.5 text-sm text-[#221d18]"
                >
                  <span className="text-[#a9794f]">—</span>
                  <span>{renderEmphasis(bullet)}</span>
                </li>
              ))}
            </ul>
            <a
              href={b.href}
              className="mt-7 inline-block border-b border-[#221d18] pb-1 text-sm uppercase tracking-[0.14em] text-[#221d18] transition-opacity hover:opacity-60"
            >
              {b.label} →
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ========================= EXPERT NETWORK ===================== */

function ExpertNetwork() {
  return (
    <section
      id="b1-experts"
      className="border-y border-[#221d18] bg-[#ede3d2]"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <SectionLabel no="V" kicker="The expert network" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <h2
              className={`${serif} text-[clamp(2rem,4.5vw,3.6rem)] font-light leading-[1.0] tracking-[-0.025em] text-[#221d18] lg:col-span-6`}
            >
              {expertNetwork.heading}
            </h2>
            <p className="self-end text-base leading-relaxed text-[#54483b] lg:col-span-6">
              {renderEmphasis(expertNetwork.intro)}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Domains masthead list */}
          <Reveal className="lg:col-span-8">
            <ul className="divide-y divide-[#cebd9f] border-t-2 border-[#221d18]">
              {expertNetwork.domains.map((d, i) => (
                <li
                  key={d}
                  className="flex items-baseline gap-5 py-4 transition-colors hover:bg-[#e9ddc8]"
                >
                  <span
                    className={`${serif} w-10 text-2xl italic text-[#a9794f]`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`${serif} text-2xl leading-tight text-[#221d18] md:text-3xl`}
                  >
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stats */}
          <Reveal className="lg:col-span-4" delay={0.1}>
            <div className="space-y-px bg-[#cebd9f]">
              {expertNetwork.stats.map((s) => (
                <div key={s.value} className="bg-[#faf7f1] p-6">
                  <p className={`${serif} text-3xl text-[#221d18]`}>{s.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#7c6f5c]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================ FINAL CTA ======================== */

function FinalCta() {
  return (
    <section id="sponsors" className="bg-[#1f1a15]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#a9794f]">
            Last word
          </p>
          <h2
            className={`${serif} mt-6 max-w-4xl text-[clamp(2.4rem,6vw,5rem)] font-light leading-[0.98] tracking-[-0.03em] text-[#f4efe6]`}
          >
            {finalCta.heading}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#c8b89c]">
            {renderEmphasis(finalCta.sub)}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={cta.primary.href}
              className="bg-[#f4efe6] px-8 py-4 text-sm uppercase tracking-[0.14em] text-[#221d18] transition-colors hover:bg-[#e9ddc8]"
            >
              {cta.primary.label}
            </a>
            <a
              id="experts"
              href={cta.secondary.href}
              className="border-b border-[#f4efe6] pb-1 text-sm uppercase tracking-[0.14em] text-[#f4efe6] transition-opacity hover:opacity-60"
            >
              {cta.secondary.label} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= FOOTER ========================== */

function Footer() {
  return (
    <footer className="border-t-2 border-[#221d18] bg-[#f4efe6]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-8 text-[11px] uppercase tracking-[0.22em] text-[#7c6f5c] md:flex-row md:items-center md:justify-between md:px-10">
        <span className={`${serif} text-base normal-case tracking-normal text-[#221d18]`}>
          Volta — The regulatory broadsheet
        </span>
        <span>AI drafts · Experts review · Sponsors approve</span>
        <span>© {new Date().getFullYear()} Volta</span>
      </div>
    </footer>
  );
}

/* ====================== SHARED SECTION LABEL ================== */

function SectionLabel({ no, kicker }: { no: string; kicker: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className={`${serif} text-2xl italic text-[#a9794f]`}>{no}</span>
      <span className="h-px flex-1 bg-[#cebd9f]" />
      <span className="text-[11px] uppercase tracking-[0.28em] text-[#7c6f5c]">
        {kicker}
      </span>
    </div>
  );
}

/* ============================= PAGE =========================== */

export default function VariantB1() {
  return (
    <main className={`${spaceGrotesk.className} min-h-screen bg-[#f4efe6] text-[#221d18]`}>
      <Masthead />
      <Hero />
      <IndexStrip />
      <Workflow />
      <Problem />
      <Outputs />
      <Trust />
      <Audiences />
      <ExpertNetwork />
      <FinalCta />
      <Footer />
    </main>
  );
}
