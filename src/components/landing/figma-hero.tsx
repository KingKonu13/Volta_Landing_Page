"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero, cta, nav } from "@/content/site";
import { TraceabilityAnimation } from "@/components/landing/traceability-animation";

/* Cool-neutral palette — same system used across the Volta landing page. */
const C = {
  bg: "#f4f5f6",
  surface: "#e9ebec",
  line: "#d3d7db",
  muted: "#6a7079",
  soft: "#2c3138",
  ink: "#14171b",
  accent: "#4d6470",
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
          <stop offset="0" stopColor="#ff9d3c" />
          <stop offset="0.38" stopColor="#ff5d86" />
          <stop offset="0.72" stopColor="#3f7df0" />
          <stop offset="1" stopColor="#22a07a" />
        </linearGradient>
      </defs>
      <path
        d="M18.5 3 L8 17.5 H14.5 L13 29 L24 13.5 H17.5 Z"
        fill="url(#voltaFigmaBolt)"
        stroke="#14171b"
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
  "linear-gradient(95deg, #ff9d3c, #ff5d86, #3f7df0, #22a07a, #3f7df0, #ff5d86, #ff9d3c)";

export function FigmaHero() {
  const subClean = hero.sub.replace(/\*\*/g, "");
  const subSplit = subClean.indexOf(". ");
  const subLead = subSplit >= 0 ? subClean.slice(0, subSplit + 1) : subClean;
  const subTrail = subSplit >= 0 ? subClean.slice(subSplit + 2) : "";

  return (
    <div className="relative" style={{ color: C.ink }}>
      {/* ambient brand gradient on the base background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundColor: C.bg,
          backgroundImage: `
            radial-gradient(55rem 38rem at 88% -6%, rgba(255, 211, 165, 0.26), transparent 60%),
            radial-gradient(52rem 40rem at 4% 96%, rgba(168, 199, 250, 0.22), transparent 58%),
            radial-gradient(44rem 32rem at 78% 84%, rgba(255, 186, 199, 0.16), transparent 60%),
            radial-gradient(40rem 30rem at 22% 8%, rgba(214, 232, 222, 0.18), transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* ============================ TOP NAV ============================ */}
        <header className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-6 px-6 py-7 md:px-10 lg:px-16 lg:py-9">
          {/* wordmark */}
          <Link href="#" className="flex items-center gap-2.5" aria-label="Volta home">
            <BrandBolt className="h-[32px] w-[32px]" />
            <span
              className="text-[27px] leading-none tracking-[-0.02em]"
              style={{ fontFamily: "var(--c2-display)", color: C.ink }}
            >
              Volta
            </span>
          </Link>

          {/* nav links */}
          <nav className="flex items-center gap-6 lg:gap-8">
            <ul className="hidden items-center gap-7 md:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[15px] transition-opacity hover:opacity-60"
                    style={{ color: C.soft }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* ============================ HERO BODY ============================ */}
        <div className="mx-auto flex w-full max-w-[88rem] flex-1 flex-col px-6 py-12 md:px-10 lg:justify-center lg:px-16 lg:py-0">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-14 xl:grid-cols-[1fr_minmax(0,27rem)] xl:gap-20">
            {/* LEFT — words */}
            <div
              className="flex min-w-0 flex-col"
              style={{ containerType: "inline-size" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="leading-[1.05] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--c2-display)",
                  color: C.ink,
                  fontWeight: 400,
                  fontSize: "clamp(1.25rem, 8cqi, 4.5rem)",
                }}
              >
                {hero.headlineLines.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                className="mt-7 max-w-[52ch] text-[17px] leading-[1.6]"
                style={{ fontFamily: "var(--c2-display)", color: C.soft }}
              >
                {subLead}
                {subTrail && (
                  <>
                    {" "}
                    <motion.span
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
                transition={{ duration: 0.6, delay: 0.18, ease }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Link
                  href={cta.primary.href}
                  className="inline-flex items-center rounded-full px-6 py-3 text-[14px] font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: C.ink, color: C.bg }}
                >
                  {cta.primary.label}
                </Link>
                <Link
                  href={cta.secondary.href}
                  className="inline-flex items-center rounded-full border px-6 py-3 text-[14px] font-medium transition-colors hover:bg-[var(--c2-surface)]"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  {cta.secondary.label}
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — animation (replaces the globe) */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.1,
                y: 0,
                boxShadow: "0 10px 30px -22px rgba(20,23,27,0.4)",
              }}
              animate={{
                opacity: 1,
                scale: 1.22,
                y: -8,
                boxShadow: "0 50px 100px -34px rgba(20,23,27,0.5)",
              }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              whileHover={{ y: -14, scale: 1.25, boxShadow: "0 60px 110px -32px rgba(20,23,27,0.55)" }}
              className="w-full cursor-pointer lg:ml-auto lg:max-w-[27rem]"
              style={{ borderRadius: 16 }}
            >
              <TraceabilityAnimation />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
