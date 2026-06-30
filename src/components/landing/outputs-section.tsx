"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  FileText,
  FlaskConical,
  Factory,
  ClipboardList,
  MessagesSquare,
  History,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { outputs } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Palette (cool neutral / charcoal) — defined locally for isolation
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

/* Map each of the 6 item titles to a fitting lucide icon */
const ICONS: Record<string, LucideIcon> = {
  "Pre-IND briefing book": FileText,
  "Nonclinical study summary": FlaskConical,
  "CMC narrative": Factory,
  "Clinical development plan": ClipboardList,
  "Anticipated FDA questions": MessagesSquare,
  "Review record": History,
};

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

/* Stagger container for the 6 cards on scroll-into-view */
const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Icon entrance: scale/fade with a slight spring */
const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -12 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 16, delay: 0.1 },
  },
};

function OutputCard({ item }: { item: (typeof outputs.items)[number] }) {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const Icon = ICONS[item.title] ?? FileText;

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
      tabIndex={0}
      className="group relative isolate overflow-hidden rounded-2xl border p-5 outline-none"
      style={{ borderColor: hovered ? C.accent : C.line, backgroundColor: C.bg }}
      animate={
        reduce
          ? undefined
          : {
              scale: hovered ? 1.025 : 1,
              boxShadow: hovered
                ? "0 18px 40px -18px rgba(20,23,27,0.35), 0 2px 6px -2px rgba(20,23,27,0.12)"
                : "0 0px 0px 0px rgba(20,23,27,0)",
            }
      }
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Accent sweep that washes across the card background on hover */}
      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            background: `linear-gradient(120deg, ${C.surface} 0%, rgba(77,100,112,0.10) 55%, rgba(77,100,112,0.02) 100%)`,
          }}
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <p
          className="text-[10px] font-medium uppercase tracking-[0.24em]"
          style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
        >
          {item.category}
        </p>
        {/* Animated icon: enters on scroll, pops/rotates on hover */}
        <motion.span
          variants={reduce ? undefined : iconVariants}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
          style={{
            borderColor: hovered ? C.accent : C.line,
            backgroundColor: hovered ? "rgba(77,100,112,0.10)" : C.surface,
            color: hovered ? C.accent : C.soft,
          }}
          animate={
            reduce
              ? undefined
              : { scale: hovered ? 1.12 : 1, rotate: hovered ? -8 : 0 }
          }
          transition={{ type: "spring", stiffness: 420, damping: 12 }}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
        </motion.span>
      </div>

      <h3
        className="mt-3 text-[17px] font-medium tracking-[-0.01em]"
        style={{ color: C.ink }}
      >
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

      {/* "Get in touch" link — revealed on hover/focus (datacurve-style) */}
      <motion.div
        className="mt-3"
        initial={false}
        animate={
          reduce ? undefined : { opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }
        }
        style={reduce ? { opacity: 1 } : undefined}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <a
          href="#sponsors"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium"
          style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
        >
          Get in touch
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { x: hovered ? 3 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="inline-flex"
          >
            <ArrowRight className="h-[14px] w-[14px]" strokeWidth={1.7} />
          </motion.span>
        </a>
      </motion.div>
    </motion.div>
  );
}

export function OutputsSection() {
  const reduce = useReducedMotion();

  return (
    <>
      <motion.h2
        className="text-[clamp(30px,3.6vw,46px)] leading-[1.05] tracking-[-0.025em]"
        style={{ fontFamily: "var(--c2-display)", color: C.ink }}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {outputs.heading}
      </motion.h2>

      <motion.p
        className="mt-4 max-w-[56ch] text-[17px] leading-[1.6]"
        style={{ color: C.soft }}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        {renderEmphasis(outputs.intro)}
      </motion.p>

      {/* Summary panel */}
      <motion.div
        className="mt-8 rounded-2xl border p-5 sm:p-6"
        style={{ borderColor: C.line, backgroundColor: C.surface }}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-[10px] font-medium uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--c2-mono)", color: C.accent }}
        >
          {outputs.summary.label}
        </p>
        <p
          className="mt-3 max-w-[40ch] text-[22px] leading-[1.25] tracking-[-0.015em]"
          style={{ fontFamily: "var(--c2-display)", color: C.ink }}
        >
          {outputs.summary.title}
        </p>
        <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.6]" style={{ color: C.muted }}>
          {renderEmphasis(outputs.summary.desc)}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {outputs.summary.checks.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </ul>
      </motion.div>

      {/* The 6 animated item cards — stagger in, pop & sweep on hover */}
      <motion.div
        className="mt-6 grid gap-4 sm:grid-cols-2"
        variants={gridVariants}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-60px" }}
      >
        {outputs.items.map((item) => (
          <OutputCard key={item.title} item={item} />
        ))}
      </motion.div>

      {/* Dark pricing panel */}
      <motion.div
        className="mt-6 rounded-2xl px-6 py-6 sm:px-7"
        style={{ backgroundColor: C.ink }}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-[10px] font-medium uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--c2-mono)", color: "#aeb4bb" }}
        >
          {outputs.pricing.label}
        </p>
        <p
          className="mt-3 max-w-[28ch] text-[22px] leading-[1.2] tracking-[-0.015em]"
          style={{ fontFamily: "var(--c2-display)", color: C.bg }}
        >
          {outputs.pricing.title}
        </p>
        <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.6]" style={{ color: "#c7ccd2" }}>
          {renderEmphasis(outputs.pricing.desc)}
        </p>
      </motion.div>

      {/* Completion note */}
      <motion.div
        className="mt-6 flex gap-4 border-l-2 pl-5"
        style={{ borderColor: C.accent }}
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h3 className="text-[16px] font-medium" style={{ color: C.ink }}>
            {outputs.completion.title}
          </h3>
          <p className="mt-2 max-w-[60ch] text-[14px] leading-[1.6]" style={{ color: C.muted }}>
            {outputs.completion.desc}
          </p>
        </div>
      </motion.div>
    </>
  );
}
