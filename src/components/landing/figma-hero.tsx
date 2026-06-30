"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { hero, nav } from "@/content/site";
import { TraceabilityAnimation } from "@/components/landing/traceability-animation";

/* Cool-neutral palette — same system used across the Volta landing page. */
const C = {
  bg: "#f6fafc",
  surface: "#eaf3f8",
  paper: "#ffffff",
  line: "rgba(8,35,63,0.12)",
  muted: "#5e7184",
  soft: "#243b53",
  ink: "#08233f",
  accent: "#2f80ed",
  cyan: "#6ed3f7",
  teal: "#16a394",
  mint: "#dff7f1",
  warm: "#f59e73",
};

/* Lightning bolt lifted from the favicon (src/app/icon.svg) so the wordmark,
   the trace line, and the browser tab all share one identity. */
function BrandBolt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient
          id="voltaFigmaBolt"
          x1="4"
          y1="3"
          x2="28"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6ed3f7" />
          <stop offset="0.42" stopColor="#2f80ed" />
          <stop offset="0.76" stopColor="#16a394" />
          <stop offset="1" stopColor="#dff7f1" />
        </linearGradient>
      </defs>
      <path
        d="M18.5 3 L8 17.5 H14.5 L13 29 L24 13.5 H17.5 Z"
        fill="url(#voltaFigmaBolt)"
        stroke="#08233f"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

/* Brand bolt gradient (favicon stops), mirrored so it loops seamlessly
   when animated as a flowing text-fill shimmer. */
const BRAND_GRADIENT =
  "linear-gradient(95deg, #6ed3f7, #2477d4, #2f80ed, #16a394, #dff7f1, #16a394, #2477d4)";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="rounded-2xl border px-4 py-3"
      style={{
        borderColor: "rgba(255,255,255,0.55)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(246,249,252,0.8))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.85), 0 1px 3px rgba(8,35,63,0.06), 0 12px 26px -14px rgba(8,35,63,0.4)",
      }}
      whileHover={{
        y: -4,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 8px rgba(8,35,63,0.08), 0 22px 44px -16px rgba(8,35,63,0.5)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ fontFamily: "var(--c2-mono)", color: C.muted }}
      >
        {label}
      </p>
      <p
        className="mt-1 text-[22px] leading-none tracking-[-0.02em]"
        style={{ fontFamily: "var(--c2-display)", color: C.ink }}
      >
        {value}
      </p>
    </motion.div>
  );
}

function ReviewPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[2rem] border p-5 ${className}`}
      style={{
        borderColor: "rgba(255,255,255,0.38)",
        background: "linear-gradient(145deg, rgba(255,255,255,0.68), rgba(238,244,251,0.46))",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 6px rgba(8,35,63,0.05), 0 22px 44px -22px rgba(8,35,63,0.38), 0 48px 110px -46px rgba(8,35,63,0.6)",
      }}
    >
      <div className="mb-5 flex items-center justify-between">
        <p className="text-[12px] font-semibold" style={{ color: C.ink }}>
          Volta workspace
        </p>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
          style={{ backgroundColor: "rgba(34,160,122,0.1)", color: C.teal }}
        >
          Live review
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Sources" value="28" />
        <StatCard label="Claims" value="64" />
        <StatCard label="Experts" value="04" />
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border" style={{ borderColor: C.line }}>
        <div className="h-2" style={{ background: BRAND_GRADIENT }} />
        <div className="space-y-2 bg-white/70 p-4">
          {["Nonclinical", "CMC", "Clinical"].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: i === 0 ? C.accent : C.line }} />
              <span className="text-[12px]" style={{ color: C.soft }}>{label}</span>
              <span className="ml-auto h-1.5 rounded-full" style={{ width: `${68 - i * 14}%`, backgroundColor: i === 0 ? "rgba(47,128,237,0.28)" : "rgba(8,35,63,0.10)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroEmailCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "sponsors", name: "Hero email capture", email }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="flex w-full max-w-[24rem] items-center rounded-full border bg-white/80 p-1 pl-4"
      style={{
        borderColor: "rgba(8,35,63,0.1)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 18px 38px -28px rgba(8,35,63,0.55)",
        backdropFilter: "blur(16px)",
      }}
    >
      <label htmlFor="hero-email" className="sr-only">
        Email address
      </label>
      <input
        id="hero-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="min-w-0 flex-1 bg-transparent pr-3 text-[14px] outline-none placeholder:text-[#53657d]"
        style={{ color: C.ink }}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-70"
        style={{ backgroundColor: C.ink, color: C.paper }}
      >
        {status === "done" ? "Sent" : status === "submitting" ? "Sending" : "Start now →"}
      </button>
    </form>
  );
}

/* Desktop: overlapping, floating collage. Mobile: stacked cards. */
function WorkspaceCollage() {
  const card = (
    <motion.div
      initial={{ y: 16, scale: 0.96, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.26, ease }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="cursor-pointer"
      style={{
        filter:
          "drop-shadow(0 14px 24px rgba(8,35,63,0.16)) drop-shadow(0 50px 80px rgba(8,35,63,0.28))",
      }}
    >
      <TraceabilityAnimation />
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 28, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.15, ease }}
      className="w-full"
    >
      {/* Mobile / tablet — stacked */}
      <div className="mx-auto flex w-full max-w-[26rem] flex-col gap-5 lg:hidden">
        {card}
        <ReviewPanel />
      </div>

      {/* Desktop — overlapping floating collage */}
      <div className="relative ml-auto hidden h-[31rem] w-[36rem] lg:block">
        <ReviewPanel className="absolute left-2 top-2 z-0 w-[25rem] opacity-95" />
        <div className="absolute left-[34%] top-[6.75rem] z-20 w-[27rem]">{card}</div>
      </div>
    </motion.div>
  );
}

function MobileMenu({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease }}
          className="absolute inset-x-4 top-[4.5rem] z-30 overflow-hidden rounded-2xl border p-2 lg:hidden"
          style={{
            borderColor: "rgba(8,35,63,0.1)",
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 24px 60px -28px rgba(8,35,63,0.5)",
            backdropFilter: "blur(18px)",
          }}
        >
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="block rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors hover:bg-[rgba(8,35,63,0.04)]"
                  style={{ color: C.ink }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-2 border-t pt-2" style={{ borderColor: C.line }}>
            <Link
              href="#sponsors"
              className="rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors hover:bg-[rgba(8,35,63,0.04)]"
              style={{ color: C.ink }}
            >
              Sign in&nbsp;→
            </Link>
            <Link
              href="#sponsors"
              className="rounded-full px-3 py-2.5 text-center text-[14px] font-semibold"
              style={{ backgroundColor: C.ink, color: C.paper }}
            >
              Contact sales
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FigmaHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const subClean = hero.sub.replace(/\*\*/g, "");
  const subSplit = subClean.indexOf(". ");
  const subLead = subSplit >= 0 ? subClean.slice(0, subSplit + 1) : subClean;
  const subTrail = subSplit >= 0 ? subClean.slice(subSplit + 2) : "";

  return (
    <div className="relative overflow-hidden" style={{ color: C.ink, backgroundColor: C.bg }}>
      {/* ambient brand gradient on the base background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] lg:h-[42rem]"
        style={{
          backgroundColor: C.bg,
          backgroundImage: `
            radial-gradient(42rem 30rem at 10% 4%, rgba(36, 119, 212, 0.78), transparent 64%),
            radial-gradient(46rem 32rem at 52% -10%, rgba(110, 211, 247, 0.66), transparent 62%),
            radial-gradient(44rem 30rem at 93% 8%, rgba(22, 163, 148, 0.38), transparent 60%),
            radial-gradient(45rem 32rem at 23% 70%, rgba(223, 247, 241, 0.86), transparent 62%),
            radial-gradient(36rem 24rem at 78% 62%, rgba(245, 158, 115, 0.18), transparent 66%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[17rem] h-[26rem] lg:top-[22rem] lg:h-[28rem]"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.94), #f6f9fc 74%)",
          clipPath: "polygon(0 24%, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ backgroundColor: C.line }}
      />
      {/* top scrim — keeps the nav/account links readable over the gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{ background: "linear-gradient(180deg, rgba(8,35,63,0.45), rgba(8,35,63,0.12) 55%, transparent)" }}
      />

      <div className="relative z-10 flex min-h-[92vh] flex-col lg:min-h-[88vh]">
        {/* ============================ TOP NAV ============================ */}
        <header className="relative mx-auto flex w-full max-w-[88rem] items-center gap-6 px-5 py-5 sm:px-8 lg:gap-12 lg:px-16 lg:py-6">
          {/* wordmark */}
          <Link href="#" className="flex items-center gap-2.5" aria-label="Volta home">
            <BrandBolt className="h-[30px] w-[30px] lg:h-[32px] lg:w-[32px]" />
            <span
              className="text-[24px] leading-none tracking-[-0.02em] lg:text-[27px]"
              style={{ fontFamily: "var(--c2-display)", color: C.paper }}
            >
              Volta
            </span>
          </Link>

          {/* nav links — desktop */}
          <nav className="hidden items-center gap-7 lg:flex">
            <ul className="flex items-center gap-7">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[14px] font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "#ffffff", textShadow: "0 1px 3px rgba(8,35,63,0.4)" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* account actions — desktop */}
          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <Link
              href="#sponsors"
              className="inline-flex items-center gap-1 text-[14px] font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#ffffff", textShadow: "0 1px 3px rgba(8,35,63,0.4)" }}
            >
              Sign in&nbsp;→
            </Link>
            <Link
              href="#sponsors"
              className="inline-flex items-center rounded-full border px-4 py-2 text-[13px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(255,255,255,0.7)",
                color: C.paper,
                backgroundColor: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                textShadow: "0 1px 3px rgba(8,35,63,0.4)",
              }}
            >
              Contact sales
            </Link>
          </div>

          {/* menu toggle — mobile */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
            style={{
              borderColor: "rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.16)",
              backdropFilter: "blur(16px)",
            }}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className="absolute left-0 block h-[2px] w-5 rounded-full bg-white transition-all duration-200"
                style={{ top: menuOpen ? "6px" : "0px", transform: menuOpen ? "rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 top-[6px] block h-[2px] w-5 rounded-full bg-white transition-opacity duration-200"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-[2px] w-5 rounded-full bg-white transition-all duration-200"
                style={{ top: menuOpen ? "6px" : "12px", transform: menuOpen ? "rotate(-45deg)" : "none" }}
              />
            </span>
          </button>

          <MobileMenu open={menuOpen} />
        </header>

        {/* ============================ HERO BODY ============================ */}
        <div className="mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-center px-5 pb-14 pt-8 sm:px-8 lg:px-16 lg:pb-16 lg:pt-6">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(34rem,0.95fr)] xl:grid-cols-[minmax(0,1fr)_minmax(38rem,0.95fr)]">
            {/* LEFT — words */}
            <div className="relative z-20 flex min-w-0 flex-col lg:pb-10">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-semibold lg:mb-7"
                style={{
                  color: C.paper,
                  backgroundColor: "rgba(8,35,63,0.28)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: C.teal }} />
                AI-native Pre-IND prep
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease }}
                className="leading-[1.04] tracking-[-0.03em] lg:leading-[1.02]"
                style={{
                  fontFamily: "var(--c2-display)",
                  color: C.ink,
                  fontWeight: 400,
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                }}
              >
                {hero.headlineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.13, ease }}
                className="mt-5 max-w-[48ch] text-[16px] leading-[1.6] sm:text-[17px] lg:mt-6 lg:text-[18px]"
                style={{ fontFamily: "var(--c2-display)", color: C.soft }}
              >
                {subLead}
                {subTrail && (
                  <>
                    {" "}
                    <motion.span
                      className="font-semibold"
                      style={{
                        backgroundImage: BRAND_GRADIENT,
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                      animate={{ backgroundPosition: ["0% 50%", "-200% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                      {subTrail}
                    </motion.span>
                  </>
                )}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
                className="mt-7 lg:mt-8"
              >
                <HeroEmailCta />
              </motion.div>
            </div>

            {/* RIGHT — animation (replaces the globe) */}
            <WorkspaceCollage />
          </div>
        </div>
      </div>
    </div>
  );
}
