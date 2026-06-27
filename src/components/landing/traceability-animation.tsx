"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText } from "lucide-react";

/* Palette mirrors the cool-neutral system used across the landing page. */
const C = {
  bg: "#f4f5f6",
  surface: "#e9ebec",
  line: "#d3d7db",
  muted: "#6a7079",
  soft: "#2c3138",
  ink: "#14171b",
  accent: "#4d6470",
  paper: "#ffffff",
};

/* Bolt gradient — same stops as the favicon, reused for the trace line. */
const BOLT_STOPS = (
  <>
    <stop offset="0" stopColor="#ff9d3c" />
    <stop offset="0.4" stopColor="#ff5d86" />
    <stop offset="0.72" stopColor="#3f7df0" />
    <stop offset="1" stopColor="#22a07a" />
  </>
);

const TITLE = "Nonclinical Toxicology Summary";

const LINES: { t: string; claim?: boolean }[] = [
  {
    t: "The nonclinical program characterized the safety profile of VTX-219 across single- and repeat-dose studies.",
  },
  {
    t: "No adverse findings were observed at doses up to 50 mg/kg in the 28-day GLP toxicology study.",
    claim: true,
  },
  { t: "These results support the proposed Phase 1 starting dose." },
];

const FILES: { name: string; meta: string; source?: boolean }[] = [
  { name: "28-Day GLP Tox Report.pdf", meta: "p. 14 · Section 7.2", source: true },
  { name: "IND CMC Summary.docx", meta: "Module 3" },
  { name: "PK / PD Analysis.xlsx", meta: "Study VTX-PK-002" },
];

const CLAIM_INDEX = LINES.findIndex((l) => l.claim);

type Coords = { x1: number; y1: number; x2: number; y2: number };

/* ------------------------------- small parts ------------------------------- */

function Caret() {
  return (
    <motion.span
      aria-hidden
      className="ml-px inline-block h-[1.02em] w-[2px] translate-y-[3px] rounded-full"
      style={{ backgroundColor: C.accent }}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "linear", times: [0, 0.5, 0.5, 1] }}
    />
  );
}

const CiteChip = forwardRef<HTMLSpanElement, { show: boolean }>(
  function CiteChip({ show }, ref) {
    return (
      <motion.span
        ref={ref}
        className="relative ml-1 inline-flex h-[17px] min-w-[17px] items-center justify-center rounded-[5px] px-[3px] align-middle text-[10px] font-semibold leading-none"
        style={{
          fontFamily: "var(--c2-mono)",
          color: C.paper,
          backgroundColor: C.ink,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        1
      </motion.span>
    );
  },
);

function StatusPill({ traced }: { traced: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em]"
      style={{
        fontFamily: "var(--c2-mono)",
        borderColor: C.line,
        color: traced ? C.ink : C.muted,
        backgroundColor: C.bg,
      }}
    >
      {traced ? (
        <>
          <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden>
            <path
              d="M2.5 6.2 L5 8.6 L9.6 3.6"
              fill="none"
              stroke="#22a07a"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Linked to evidence
        </>
      ) : (
        <>
          <motion.span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#ff5d86" }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
          Volta drafting
        </>
      )}
    </span>
  );
}

/* --------------------------------- main --------------------------------- */

export function TraceabilityAnimation() {
  const reduce = useReducedMotion();

  const [runId, setRunId] = useState(0);
  const [titleLen, setTitleLen] = useState(0);
  const [lens, setLens] = useState<number[]>(() => LINES.map(() => 0));
  const [claimActive, setClaimActive] = useState(false);
  const [traced, setTraced] = useState(false);
  const [coords, setCoords] = useState<Coords | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const claimChipRef = useRef<HTMLSpanElement>(null);
  const fileChipRef = useRef<HTMLSpanElement>(null);

  /* sequence driver */
  useEffect(() => {
    if (reduce) {
      setTitleLen(TITLE.length);
      setLens(LINES.map((l) => l.t.length));
      setClaimActive(true);
      setTraced(true);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((res) => timers.push(setTimeout(res, ms)));

    (async () => {
      setTitleLen(0);
      setLens(LINES.map(() => 0));
      setClaimActive(false);
      setTraced(false);
      setCoords(null);
      await sleep(450);

      for (let i = 1; i <= TITLE.length; i++) {
        if (cancelled) return;
        setTitleLen(i);
        await sleep(24);
      }
      await sleep(300);

      for (let li = 0; li < LINES.length; li++) {
        const text = LINES[li].t;
        const speed = LINES[li].claim ? 19 : 13;
        for (let i = 1; i <= text.length; i++) {
          if (cancelled) return;
          setLens((prev) => {
            const next = [...prev];
            next[li] = i;
            return next;
          });
          await sleep(speed);
        }
        await sleep(LINES[li].claim ? 360 : 170);
      }

      if (cancelled) return;
      await sleep(260);
      setClaimActive(true);
      await sleep(560);
      if (cancelled) return;
      setTraced(true);
      await sleep(2800);
      if (cancelled) return;
      setRunId((r) => r + 1);
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [runId, reduce]);

  /* measure the connector endpoints once the trace fires */
  useEffect(() => {
    if (!traced) {
      setCoords(null);
      return;
    }
    let raf = 0;
    let tries = 0;
    const measure = () => {
      const p = panelRef.current;
      const c = claimChipRef.current;
      const f = fileChipRef.current;
      if (p && c && f) {
        const pr = p.getBoundingClientRect();
        const cr = c.getBoundingClientRect();
        const fr = f.getBoundingClientRect();
        // The panel may be visually scaled by an ancestor transform, so
        // getBoundingClientRect returns scaled screen pixels while the SVG
        // draws in the panel's unscaled local coordinates. Convert back.
        const sx = p.offsetWidth ? pr.width / p.offsetWidth : 1;
        const sy = p.offsetHeight ? pr.height / p.offsetHeight : 1;
        setCoords({
          x1: (cr.left + cr.width / 2 - pr.left) / sx,
          y1: (cr.top + cr.height / 2 - pr.top) / sy,
          x2: (fr.left + fr.width / 2 - pr.left) / sx,
          y2: (fr.top + fr.height / 2 - pr.top) / sy,
        });
      } else if (tries++ < 6) {
        raf = requestAnimationFrame(measure);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [traced, runId]);

  const titleTyping = titleLen < TITLE.length;
  const activeLine = lens.findIndex((n, i) => n < LINES[i].t.length);

  const midY = coords ? (coords.y1 + coords.y2) / 2 : 0;

  return (
    <div
      ref={panelRef}
      className="relative w-full overflow-hidden rounded-2xl border p-4 sm:p-5"
      style={{
        borderColor: C.line,
        backgroundColor: C.surface,
        boxShadow: "0 24px 60px -38px rgba(20,23,27,0.5)",
      }}
    >
      {/* header */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <span
          className="text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ fontFamily: "var(--c2-mono)", color: C.muted }}
        >
          Pre-IND draft
        </span>
        <StatusPill traced={traced} />
      </div>

      {/* document / paper */}
      <div
        className="relative z-10 rounded-xl border p-4"
        style={{ borderColor: C.line, backgroundColor: C.paper }}
      >
        <p
          className="min-h-[1.2em] text-[15px] font-medium tracking-[-0.01em]"
          style={{ fontFamily: "var(--c2-display)", color: C.ink }}
        >
          {TITLE.slice(0, titleLen)}
          {titleTyping && <Caret />}
        </p>

        <div className="mt-3 flex flex-col gap-2">
          {LINES.map((l, i) => {
            const isClaim = Boolean(l.claim);
            const lit = isClaim && claimActive;
            return (
              <p
                key={i}
                className="min-h-[1.2em] rounded-md text-[12.5px] leading-[1.55] transition-colors duration-300"
                style={{
                  color: isClaim && lit ? C.ink : C.soft,
                  backgroundColor: lit ? "rgba(63,125,240,0.10)" : "transparent",
                  boxShadow: lit ? `inset 2px 0 0 ${C.accent}` : "none",
                  padding: lit ? "4px 8px" : "0",
                  marginLeft: lit ? "-8px" : "0",
                  marginRight: lit ? "-8px" : "0",
                }}
              >
                {l.t.slice(0, lens[i])}
                {isClaim && <CiteChip ref={claimChipRef} show={traced} />}
                {!titleTyping && activeLine === i && <Caret />}
              </p>
            );
          })}
        </div>
      </div>

      {/* data room */}
      <div
        className="relative z-10 mt-4 rounded-xl border p-3"
        style={{ borderColor: C.line, backgroundColor: C.bg }}
      >
        <p
          className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ fontFamily: "var(--c2-mono)", color: C.muted }}
        >
          Data room
        </p>
        <div className="flex flex-col gap-1.5">
          {FILES.map((f) => {
            const lit = Boolean(f.source) && traced;
            return (
              <div
                key={f.name}
                className="flex items-center gap-2.5 rounded-lg border px-2.5 py-2 transition-colors duration-300"
                style={{
                  borderColor: lit ? C.accent : "transparent",
                  backgroundColor: lit ? C.paper : "transparent",
                }}
              >
                <FileText
                  size={15}
                  strokeWidth={1.5}
                  style={{ color: lit ? C.accent : C.muted }}
                  aria-hidden
                />
                <span
                  className="min-w-0 flex-1 truncate text-[12px]"
                  style={{ color: lit ? C.ink : C.soft }}
                >
                  {f.name}
                </span>
                {f.source ? (
                  <CiteChip ref={fileChipRef} show={traced} />
                ) : null}
                <span
                  className="hidden shrink-0 text-right text-[10px] sm:inline"
                  style={{ fontFamily: "var(--c2-mono)", color: C.muted }}
                >
                  {f.meta}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* connector — drawn once the trace fires */}
      <svg
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="traceLine" x1="0" y1="0" x2="0" y2="1">
            {BOLT_STOPS}
          </linearGradient>
        </defs>
        {coords && (
          <>
            <motion.path
              key={runId}
              d={`M ${coords.x1} ${coords.y1} C ${coords.x1} ${midY}, ${coords.x2} ${midY}, ${coords.x2} ${coords.y2}`}
              fill="none"
              stroke="url(#traceLine)"
              strokeWidth={2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.circle
              r={2.5}
              fill={C.accent}
              cx={coords.x1}
              cy={coords.y1}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.circle
              r={3}
              fill="#22a07a"
              cx={coords.x2}
              cy={coords.y2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.6, 1], opacity: [0, 1, 1] }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
