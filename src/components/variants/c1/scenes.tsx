"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  hero,
  voltaWorkflow,
  problem,
  outputs,
  trust,
  expertNetwork,
  cta,
  finalCta,
} from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Warm neutral palette                                                      */
/*    cream    #F4EFE6   off-white base                                        */
/*    sand     #E8DFCE   panel / raised neutral                               */
/*    taupe    #CBBCA3   mid neutral / borders                                */
/*    stone    #8C8273   warm grey text                                       */
/*    ink      #2A251E   primary text                                         */
/*    charcoal #211E18   dark scene background                                */
/*    clay     #A8754F   thin accent stroke only                             */
/* -------------------------------------------------------------------------- */

const display = { fontFamily: "var(--c1-display)" } as const;
const serif = { fontFamily: "var(--c1-serif)" } as const;
const mono = { fontFamily: "var(--c1-mono)" } as const;

const ease = [0.22, 1, 0.36, 1] as const;

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      style={mono}
      className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] ${
        dark ? "text-[#cbbca3]" : "text-[#8C8273]"
      }`}
    >
      <span
        className="h-px w-7"
        style={{ backgroundColor: "#A8754F" }}
        aria-hidden
      />
      {children}
    </span>
  );
}

/* ----------------------------------- Hero --------------------------------- */

function HeroScene() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#F4EFE6" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-12vw] top-1/2 -translate-y-1/2 select-none"
        style={{
          ...display,
          fontSize: "min(46vw, 40rem)",
          lineHeight: 0.8,
          color: "#E8DFCE",
          fontWeight: 700,
        }}
      >
        00
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <Eyebrow>{hero.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.08 }}
          className="mt-8 max-w-4xl text-[12vw] leading-[0.98] tracking-[-0.02em] sm:text-[7rem] lg:text-[8.5rem]"
          style={{ ...display, color: "#2A251E", fontWeight: 500 }}
        >
          You do the{" "}
          <span style={{ ...serif, fontStyle: "italic", fontWeight: 400 }}>
            science.
          </span>{" "}
          Volta handles the filing work.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-10 max-w-2xl text-xl leading-[1.5] sm:text-2xl"
          style={{ ...serif, color: "#4A4338" }}
        >
          {renderEmphasis(hero.sub)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.32 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href={cta.primary.href}
            className="rounded-full px-7 py-3.5 text-sm font-medium tracking-wide text-[#F4EFE6] transition-transform hover:-translate-y-0.5"
            style={{ ...display, backgroundColor: "#2A251E" }}
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className="rounded-full border px-7 py-3.5 text-sm font-medium tracking-wide transition-colors hover:bg-[#E8DFCE]"
            style={{ ...display, borderColor: "#CBBCA3", color: "#2A251E" }}
          >
            {cta.secondary.label}
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
        >
          {hero.badges.map((badge) => (
            <li
              key={badge}
              style={mono}
              className="text-[11px] uppercase tracking-[0.18em] text-[#8C8273]"
            >
              {badge}
            </li>
          ))}
        </motion.ul>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-[#8C8273]"
        style={mono}
      >
        scroll
      </div>
    </section>
  );
}

/* --------------------------------- Problem -------------------------------- */

function ProblemScene() {
  return (
    <section
      className="relative px-6 py-28 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#211E18", color: "#EDE6D8" }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Eyebrow dark>{problem.diagnosis.label}</Eyebrow>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="mt-8 max-w-4xl text-[8vw] leading-[1.02] tracking-[-0.015em] sm:text-5xl lg:text-6xl"
          style={{ ...display, fontWeight: 500 }}
        >
          {problem.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-8 max-w-2xl text-xl leading-[1.5]"
          style={{ ...serif, color: "#CBBCA3" }}
        >
          {renderEmphasis(problem.intro)}
        </motion.p>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#3a342a] bg-[#3a342a] sm:grid-cols-3">
          {problem.points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8"
              style={{ backgroundColor: "#211E18" }}
            >
              <span
                style={{ ...display, color: "#A8754F" }}
                className="text-4xl font-semibold"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={display}
                className="text-xl font-medium text-[#EDE6D8]"
              >
                {point.title}
              </h3>
              <p
                style={serif}
                className="text-base leading-[1.55] text-[#A89C88]"
              >
                {renderEmphasis(point.desc)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mt-20 max-w-3xl text-center text-2xl leading-[1.4] sm:text-3xl"
          style={{ ...serif, fontStyle: "italic", color: "#EDE6D8" }}
        >
          {problem.diagnosis.title}
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------- Workflow — horizontal pinned track ------------------- */

function WorkflowCard({
  card,
  index,
}: {
  card: (typeof voltaWorkflow.cards)[number];
  index: number;
}) {
  return (
    <article
      className="relative flex h-screen w-screen shrink-0 flex-col justify-center px-6 sm:px-16 lg:px-28"
      style={{
        backgroundColor: index % 2 === 0 ? "#F4EFE6" : "#EDE6D8",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-[2vw] top-[6vh] select-none leading-none"
        style={{
          ...display,
          fontSize: "min(40vw, 30rem)",
          color: "#DCD0BA",
          fontWeight: 700,
        }}
      >
        {card.step}
      </span>

      <div className="relative z-10 max-w-2xl">
        <Eyebrow>Step {card.step}</Eyebrow>
        <h3
          className="mt-6 text-[10vw] leading-[1.0] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          style={{ ...display, color: "#2A251E", fontWeight: 500 }}
        >
          {card.title}
        </h3>
        <p
          className="mt-7 max-w-xl text-xl leading-[1.5]"
          style={{ ...serif, color: "#4A4338" }}
        >
          {renderEmphasis(card.desc)}
        </p>
        <ul className="mt-9 flex flex-wrap gap-3">
          {card.tags.map((tag) => (
            <li
              key={tag}
              style={mono}
              className="rounded-full border border-[#CBBCA3] px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#6f6555]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function WorkflowScene() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const cards = voltaWorkflow.cards;
  // intro panel + N cards => translate across (N) widths
  const total = cards.length + 1;
  const x: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(100 * (total - 1)) / total}%`],
  );
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="volta-workflow"
      ref={targetRef}
      style={{ height: `${total * 100}vh`, backgroundColor: "#F4EFE6" }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x, width: `${total * 100}vw` }}
          className="flex h-full"
        >
          {/* intro panel */}
          <div
            className="relative flex h-screen w-screen shrink-0 flex-col justify-center px-6 sm:px-16 lg:px-28"
            style={{ backgroundColor: "#211E18", color: "#EDE6D8" }}
          >
            <Eyebrow dark>Workflow</Eyebrow>
            <h2
              className="mt-8 max-w-3xl text-[11vw] leading-[0.98] tracking-[-0.02em] sm:text-7xl lg:text-8xl"
              style={{ ...display, fontWeight: 500 }}
            >
              {voltaWorkflow.heading}
            </h2>
            <p
              className="mt-8 max-w-xl text-xl leading-[1.5]"
              style={{ ...serif, color: "#CBBCA3" }}
            >
              {voltaWorkflow.intro}
            </p>
            <p
              style={mono}
              className="mt-12 text-[11px] uppercase tracking-[0.3em] text-[#8C8273]"
            >
              scroll → four scenes
            </p>
          </div>

          {cards.map((card, i) => (
            <WorkflowCard key={card.step} card={card} index={i} />
          ))}
        </motion.div>

        {/* progress rail */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#DCD0BA]">
          <motion.div
            style={{ width: progress, backgroundColor: "#A8754F" }}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------- Outputs — horizontal snap filmstrip ------------------ */

function OutputsScene() {
  return (
    <section
      id="outputs"
      className="px-6 py-28 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#E8DFCE" }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Eyebrow>Outputs</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="mt-8 max-w-3xl text-[9vw] leading-[1.0] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          style={{ ...display, color: "#2A251E", fontWeight: 500 }}
        >
          {outputs.heading}
        </motion.h2>
        <p
          className="mt-7 max-w-2xl text-xl leading-[1.5]"
          style={{ ...serif, color: "#4A4338" }}
        >
          {renderEmphasis(outputs.intro)}
        </p>
      </div>

      <div
        className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="shrink-0 pl-[max(1.5rem,calc((100vw-72rem)/2))]" aria-hidden />
        {outputs.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: (i % 3) * 0.08 }}
            className="relative flex w-[80vw] max-w-sm shrink-0 snap-start flex-col rounded-3xl border border-[#CBBCA3] p-8"
            style={{ backgroundColor: "#F4EFE6" }}
          >
            <span
              style={{ ...display, color: "#DCD0BA" }}
              className="text-6xl font-bold leading-none"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p
              style={mono}
              className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[#A8754F]"
            >
              {item.category}
            </p>
            <h3
              style={display}
              className="mt-3 text-2xl font-medium leading-[1.1] text-[#2A251E]"
            >
              {item.title}
            </h3>
            <p
              style={serif}
              className="mt-4 flex-1 text-base leading-[1.55] text-[#4A4338]"
            >
              {renderEmphasis(item.desc)}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-[#CBBCA3] pt-4">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  style={mono}
                  className="text-[10px] uppercase tracking-[0.14em] text-[#8C8273]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
        <div className="shrink-0 pl-2" aria-hidden />
      </div>

      <p
        className="mx-auto mt-12 max-w-3xl text-center text-lg leading-[1.5]"
        style={{ ...serif, color: "#4A4338" }}
      >
        {renderEmphasis(outputs.completion.desc)}
      </p>
    </section>
  );
}

/* ---------------------------------- Trust --------------------------------- */

function TrustScene() {
  return (
    <section
      id="trust"
      className="px-6 py-28 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#F4EFE6" }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <Eyebrow>Trust</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
            className="mt-8 text-[10vw] leading-[1.0] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
            style={{ ...display, color: "#2A251E", fontWeight: 500 }}
          >
            {trust.heading}
          </motion.h2>
          <p
            className="mt-7 max-w-md text-xl leading-[1.5]"
            style={{ ...serif, color: "#4A4338" }}
          >
            {renderEmphasis(trust.sub)}
          </p>
          <p
            className="mt-5 max-w-md text-base leading-[1.55]"
            style={{ ...serif, color: "#6f6555" }}
          >
            {trust.body}
          </p>
        </div>

        <ul className="flex flex-col justify-center gap-px overflow-hidden rounded-3xl border border-[#CBBCA3] bg-[#CBBCA3]">
          {trust.pillars.map((pillar, i) => (
            <motion.li
              key={pillar.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              className="flex items-baseline gap-5 p-7"
              style={{ backgroundColor: "#F4EFE6" }}
            >
              <span
                style={{ ...display, color: "#A8754F" }}
                className="text-2xl font-semibold"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  style={display}
                  className="text-lg font-medium text-[#2A251E]"
                >
                  {pillar.title}
                </h3>
                <p
                  style={serif}
                  className="mt-1.5 text-base leading-[1.5] text-[#4A4338]"
                >
                  {renderEmphasis(pillar.desc)}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- Expert network ----------------------------- */

function ExpertScene() {
  return (
    <section
      id="expert-network"
      className="px-6 py-28 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#211E18", color: "#EDE6D8" }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Eyebrow dark>Experts</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="mt-8 max-w-4xl text-[9vw] leading-[1.0] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          style={{ ...display, fontWeight: 500 }}
        >
          {expertNetwork.heading}
        </motion.h2>
        <p
          className="mt-8 max-w-2xl text-xl leading-[1.5]"
          style={{ ...serif, color: "#CBBCA3" }}
        >
          {renderEmphasis(expertNetwork.intro)}
        </p>

        <div className="mt-16 flex flex-wrap gap-3">
          {expertNetwork.domains.map((domain, i) => (
            <motion.span
              key={domain}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease, delay: i * 0.06 }}
              style={display}
              className="rounded-full border border-[#4a4337] px-6 py-3 text-base text-[#EDE6D8]"
            >
              {domain}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------- */

function FinalCtaScene() {
  return (
    <section
      id="sponsors"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center sm:px-10"
      style={{ backgroundColor: "#E8DFCE" }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-6vh] select-none text-center leading-none"
        style={{
          ...display,
          fontSize: "min(40vw, 26rem)",
          color: "#DCD0BA",
          fontWeight: 700,
        }}
      >
        05
      </span>

      <div className="relative z-10 mx-auto max-w-4xl">
        <Eyebrow>Next step</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="mt-8 text-[11vw] leading-[1.0] tracking-[-0.02em] sm:text-7xl lg:text-8xl"
          style={{ ...display, color: "#2A251E", fontWeight: 500 }}
        >
          {finalCta.heading}
        </motion.h2>
        <p
          className="mx-auto mt-8 max-w-2xl text-xl leading-[1.5]"
          style={{ ...serif, color: "#4A4338" }}
        >
          {renderEmphasis(finalCta.sub)}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={cta.primary.href}
            className="rounded-full px-8 py-4 text-sm font-medium tracking-wide text-[#F4EFE6] transition-transform hover:-translate-y-0.5"
            style={{ ...display, backgroundColor: "#2A251E" }}
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className="rounded-full border px-8 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-[#F4EFE6]"
            style={{ ...display, borderColor: "#A8754F", color: "#2A251E" }}
          >
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Export --------------------------------- */

export function Scenes() {
  return (
    <main style={{ backgroundColor: "#F4EFE6", color: "#2A251E" }}>
      <HeroScene />
      <ProblemScene />
      <WorkflowScene />
      <OutputsScene />
      <TrustScene />
      <ExpertScene />
      <FinalCtaScene />
    </main>
  );
}
