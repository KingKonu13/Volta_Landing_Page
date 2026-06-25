"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { voltaWorkflow } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const accents = ["#0a7795", "#c97a18", "#1f7a3f", "#7a3ea6"] as const;

export function WorkflowSplit() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      {/* Sticky left rail — persistent step indicator */}
      <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
          The Volta Workflow
        </span>
        <h2 className="text-display-sm mt-5 max-w-[420px] text-[#1c1612]">
          {voltaWorkflow.heading}
        </h2>
        <p className="mt-5 max-w-[400px] text-[15px] leading-[1.6] text-[#3b3128]/85">
          {voltaWorkflow.intro}
        </p>

        <ol className="mt-9 flex flex-col gap-px overflow-hidden rounded-[12px] border border-[#1c1612]/12 bg-[#1c1612]/10">
          {voltaWorkflow.cards.map((card, i) => {
            const isActive = i === active;
            return (
              <li key={card.step}>
                <div
                  className="relative flex items-center gap-4 bg-[#f8f6f2] px-4 py-4 transition-colors duration-300"
                  style={{ backgroundColor: isActive ? "#f0ece4" : "#f8f6f2" }}
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[3px] transition-opacity duration-300"
                    style={{ backgroundColor: accents[i], opacity: isActive ? 1 : 0 }}
                    aria-hidden
                  />
                  <span
                    className="font-mono text-[13px] font-medium tabular-nums transition-colors duration-300"
                    style={{ color: isActive ? accents[i] : "#948572" }}
                  >
                    {card.step}
                  </span>
                  <span
                    className="text-[15px] leading-[1.4] tracking-[-0.005em] transition-colors duration-300"
                    style={{ color: isActive ? "#1c1612" : "#6c5e4e" }}
                  >
                    {card.title}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Scrolling right column — step detail */}
      <div className="flex flex-col">
        {voltaWorkflow.cards.map((card, i) => (
          <WorkflowStep
            key={card.step}
            index={i}
            accent={accents[i]}
            step={card.step}
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            onActive={() => setActive(i)}
            isLast={i === voltaWorkflow.cards.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function WorkflowStep({
  index,
  accent,
  step,
  title,
  desc,
  tags,
  onActive,
  isLast,
}: {
  index: number;
  accent: string;
  step: string;
  title: string;
  desc: string;
  tags: readonly string[];
  onActive: () => void;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-45% 0px -45% 0px", amount: 0.2 }}
      transition={{ duration: 0.55, ease }}
      onViewportEnter={onActive}
      className={`flex flex-col py-10 ${isLast ? "" : "border-b border-[#1c1612]/12"}`}
    >
      <div className="flex items-baseline gap-4">
        <span
          className="font-display text-[44px] leading-none tabular-nums"
          style={{ color: accent }}
        >
          {step}
        </span>
        <h3 className="text-heading-card text-[#1c1612]">{title}</h3>
      </div>
      <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] tracking-[-0.002em] text-[#3b3128]">
        {renderEmphasis(desc)}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="inline-flex items-center gap-2 rounded-full border border-[#1c1612]/10 bg-[#1c1612]/[0.03] px-3 py-1.5 text-[12px] leading-none tracking-[-0.005em] text-[#3b3128]"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
