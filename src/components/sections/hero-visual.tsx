import { Check, Link2, Sparkles, UserRoundCheck } from "lucide-react";

const claims = [
  "No adverse findings in 28-day GLP toxicology study",
  "Drug product stable for 24 months at 2–8°C",
  "Proposed starting dose supported by NOAEL scaling",
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">

      {/* Main document card */}
      <div className="relative rounded-2xl border border-[#ddd2c0] bg-[#fdfcfb] p-6">

        {/* Card header */}
        <div className="flex items-center justify-between border-b border-[#ddd2c0] pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#9b9b9b]">
              Briefing Book
            </p>
            <p className="font-display text-base font-medium text-[#272626]">
              Nonclinical Summary
            </p>
          </div>
          {/* Sage "Expert signed off" badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1c1612]/30 bg-[#f0ece4] px-2.5 py-1 text-xs font-medium text-[#1c1612]">
            <UserRoundCheck size={13} />
            Expert signed off
          </span>
        </div>

        {/* Claims list */}
        <ul className="mt-4 space-y-3">
          {claims.map((c) => (
            <li
              key={c}
              className="group flex items-start gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-[#f0ede8]"
            >
              {/* Sage check */}
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0ece4] text-[#1c1612]">
                <Check size={12} />
              </span>
              <span className="text-sm leading-snug text-[#56524e]">{c}</span>
              {/* Source link chip */}
              <span className="ml-auto inline-flex items-center gap-1 self-center rounded-md border border-[#ddd2c0] bg-[#f8f6f2] px-1.5 py-0.5 text-[11px] font-medium text-[#1c1612]">
                <Link2 size={10} />
                source
              </span>
            </li>
          ))}
        </ul>

        {/* AI draft bar */}
        <div className="mt-5 rounded-xl border border-[#ddd2c0] bg-[#f8f6f2] p-3">
          <div className="flex items-center gap-2 text-xs font-medium text-[#9b9b9b]">
            <Sparkles size={13} className="text-[#1c1612]" />
            AI draft · verified against 142 source pages
          </div>
          {/* Progress bar */}
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#ddd2c0]">
            <div
              className="h-full w-full"
              style={{
                background: "linear-gradient(to right, #1c1612, #3b3128)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating source chip — warm dark */}
      <div className="absolute -left-4 top-16 hidden rounded-xl bg-[#1e1c1a] px-3 py-2 text-xs font-medium text-[#fdfcfb] sm:block">
        <div className="flex items-center gap-2">
          <Link2 size={12} className="text-[#3b3128]" />
          tox_report_v3.pdf · p.14
        </div>
      </div>

      {/* Floating expert chip — cream card */}
      <div className="absolute -right-3 bottom-8 hidden rounded-xl border border-[#ddd2c0] bg-[#fdfcfb] px-3 py-2 sm:block">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1c1612] text-xs font-semibold text-white">
            DR
          </span>
          <div className="leading-tight">
            <p className="text-xs font-medium text-[#272626]">Reviewed</p>
            <p className="text-[11px] text-[#9b9b9b]">Tox expert</p>
          </div>
        </div>
      </div>
    </div>
  );
}
