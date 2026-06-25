import {
  BookText,
  ClipboardList,
  Factory,
  FlaskConical,
  Link2,
  Stethoscope,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem, RevealText } from "@/components/ui/reveal";
import { outputs } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

const outputIcons = [
  BookText,
  FlaskConical,
  Factory,
  Stethoscope,
  ClipboardList,
  Link2,
];
const outputIconColors = [
  "text-[#0a7795]",
  "text-[#1f7a3f]",
  "text-[#c2412a]",
  "text-[#c97a18]",
  "text-[#7a3ea6]",
  "text-[#6c5e4e]",
];

export function Outputs() {
  return (
    <Section id="outputs" tone="light">
      <SectionHeading
        eyebrow="Outputs"
        title={outputs.heading}
        intro={outputs.intro}
        id="outputs-heading"
      />

      <Reveal className="mt-10 border border-[#1c1612]/12 bg-[#f0ece4]">
        <div className="grid gap-7 p-7 sm:p-8 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(16rem,0.42fr)] min-[900px]:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
              {outputs.summary.label}
            </p>
            <h3 className="mt-4 font-display text-[32px] leading-[1.08] tracking-[-0.02em] text-[#1c1612] sm:text-[38px]">
              <RevealText>{outputs.summary.title}</RevealText>
            </h3>
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.55] tracking-[-0.002em] text-[#3b3128]">
              {renderEmphasis(outputs.summary.desc)}
            </p>
          </div>

          <ul className="grid gap-px border border-[#1c1612]/10 bg-[#1c1612]/10">
            {outputs.summary.checks.map((check) => (
              <li
                key={check}
                className="flex items-center gap-3 bg-[#f8f6f2] px-4 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-[#3b3128]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#1c1612]/35" aria-hidden />
                <span>{check}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <RevealGroup className="mt-8 grid auto-rows-fr grid-cols-1 items-stretch border-l border-t border-[#1c1612]/12 min-[720px]:grid-cols-2 min-[1000px]:grid-cols-3">
        {outputs.items.map((item, i) => {
          const Icon = outputIcons[i % outputIcons.length];
          const iconColor = outputIconColors[i % outputIconColors.length];

          return (
            <RevealItem key={item.title} className="h-full">
              <article className="group flex h-full min-h-[360px] flex-col border-b border-r border-[#1c1612]/12 bg-[#f8f6f2] p-8 transition-all duration-200 hover:bg-[#1c1612]/[0.025] hover:border-[#1c1612]/20">
                <div className="flex items-start justify-between gap-6">
                  <Icon
                    size={56}
                    strokeWidth={0.75}
                    className={`${iconColor} transition-colors group-hover:text-[#1c1612]`}
                    aria-hidden
                  />
                  <span className="max-w-[11rem] text-right font-mono text-[10px] font-medium uppercase leading-[1.45] tracking-[0.16em] text-[#6c5e4e]">
                    {item.category}
                  </span>
                </div>

                <div className="mt-9 flex flex-col items-start gap-2">
                  <h3 className="font-display text-heading-card py-2 text-[#1c1612]">
                    <RevealText>{item.title}</RevealText>
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-[#3b3128]">
                    {renderEmphasis(item.desc)}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2.5 pt-8">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-[#1c1612]/10 bg-[#1c1612]/[0.06] px-3 py-1.5 text-[12px] leading-none tracking-[-0.005em] text-[#3b3128]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal className="mt-8">
        <div className="grid gap-4 border border-[#1c1612]/12 bg-[#f8f6f2] p-6 sm:p-7 min-[760px]:grid-cols-[minmax(0,0.48fr)_minmax(0,1fr)] min-[760px]:items-center">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#6c5e4e]">
              Package completion
            </p>
            <h3 className="mt-3 font-display text-[26px] leading-[1.1] tracking-[-0.018em] text-[#1c1612] sm:text-[30px]">
              <RevealText>{outputs.completion.title}</RevealText>
            </h3>
          </div>
          <p className="max-w-3xl text-[14px] leading-[1.55] tracking-[-0.002em] text-[#3b3128]">
            {renderEmphasis(outputs.completion.desc)}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
