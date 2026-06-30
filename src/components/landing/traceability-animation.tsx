"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText } from "lucide-react";

/* Palette mirrors the cool-neutral system used across the landing page. */
const C = {
  bg: "#f6fafc",
  surface: "#eaf3f8",
  line: "rgba(8,35,63,0.12)",
  muted: "#5e7184",
  soft: "#243b53",
  ink: "#08233f",
  accent: "#2f80ed",
  blue: "#2477d4",
  cyan: "#6ed3f7",
  teal: "#16a394",
  mint: "#dff7f1",
  paper: "#ffffff",
};

/* Bolt gradient — same stops as the favicon, reused for the trace line. */
const BOLT_STOPS = (
  <>
    <stop offset="0" stopColor="#6ed3f7" />
    <stop offset="0.42" stopColor="#2477d4" />
    <stop offset="0.74" stopColor="#2f80ed" />
    <stop offset="1" stopColor="#16a394" />
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

const COMPLETE_LENS = LINES.map((l) => l.t.length);

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
        borderColor: "rgba(255,255,255,0.44)",
        color: traced ? C.ink : C.muted,
        backgroundColor: "rgba(255,255,255,0.52)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.62)",
      }}
    >
      {traced ? (
        <>
          <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden>
            <path
              d="M2.5 6.2 L5 8.6 L9.6 3.6"
              fill="none"
              stroke={C.teal}
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
            style={{ backgroundColor: C.blue }}
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
    if (reduce) return;

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

  const displayTitleLen = reduce ? TITLE.length : titleLen;
  const displayLens = reduce ? COMPLETE_LENS : lens;
  const displayClaimActive = reduce || claimActive;
  const displayTraced = reduce || traced;

  /* measure the connector endpoints once the trace fires */
  useEffect(() => {
    if (!displayTraced) return;
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
  }, [displayTraced, runId]);

  const titleTyping = displayTitleLen < TITLE.length;
  const activeLine = displayLens.findIndex((n, i) => n < LINES[i].t.length);

  const midY = coords ? (coords.y1 + coords.y2) / 2 : 0;

  return (
    <div
      ref={panelRef}
      className="relative w-full overflow-hidden rounded-2xl border p-4 sm:p-5"
      style={{
        borderColor: "rgba(255,255,255,0.42)",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.74), rgba(223,247,241,0.34), rgba(234,243,248,0.46))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -24px 60px rgba(110,211,247,0.14), 0 2px 6px rgba(8,35,63,0.06), 0 24px 50px -24px rgba(8,35,63,0.4), 0 50px 100px -44px rgba(8,35,63,0.55)",
        backdropFilter: "blur(18px)",
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
        <StatusPill traced={displayTraced} />
      </div>

      {/* document / paper */}
      <div
        className="relative z-10 rounded-xl border p-4"
        style={{
          borderColor: "rgba(255,255,255,0.46)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0.62))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.84)",
        }}
      >
        <p
          className="min-h-[1.2em] text-[15px] font-medium tracking-[-0.01em]"
          style={{ fontFamily: "var(--c2-display)", color: C.ink }}
        >
          {TITLE.slice(0, displayTitleLen)}
          {titleTyping && <Caret />}
        </p>

        <div className="mt-3 flex flex-col gap-2">
          {LINES.map((l, i) => {
            const isClaim = Boolean(l.claim);
            const lit = isClaim && displayClaimActive;
            return (
              <p
                key={i}
                className="min-h-[1.2em] rounded-md text-[12.5px] leading-[1.55] transition-colors duration-300"
                style={{
                  color: isClaim && lit ? C.ink : C.soft,
                  backgroundColor: lit ? "rgba(110,211,247,0.16)" : "transparent",
                  boxShadow: lit ? `inset 2px 0 0 ${C.accent}` : "none",
                  padding: lit ? "4px 8px" : "0",
                  marginLeft: lit ? "-8px" : "0",
                  marginRight: lit ? "-8px" : "0",
                }}
              >
                {l.t.slice(0, displayLens[i])}
                {isClaim && <CiteChip ref={claimChipRef} show={displayTraced} />}
                {!titleTyping && activeLine === i && <Caret />}
              </p>
            );
          })}
        </div>
      </div>

      {/* data room */}
      <div
        className="relative z-10 mt-4 rounded-xl border p-3"
        style={{
          borderColor: "rgba(255,255,255,0.38)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.54), rgba(246,249,252,0.42))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <p
          className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ fontFamily: "var(--c2-mono)", color: C.muted }}
        >
          Data room
        </p>
        <div className="flex flex-col gap-1.5">
          {FILES.map((f) => {
            const lit = Boolean(f.source) && displayTraced;
            return (
              <div
                key={f.name}
                className="flex items-center gap-2.5 rounded-lg border px-2.5 py-2 transition-colors duration-300"
                style={{
                  borderColor: lit ? "rgba(47,128,237,0.24)" : "rgba(255,255,255,0.12)",
                  backgroundColor: lit ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.18)",
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
                  <CiteChip ref={fileChipRef} show={displayTraced} />
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
        {displayTraced && coords && (
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
              fill={C.teal}
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
