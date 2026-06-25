import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/ui/contact-form";
import { audiences, cta } from "@/content/site";
import { renderEmphasis } from "@/lib/utils";

function AudienceCard({
  id,
  eyebrow,
  heading,
  desc,
  bullets,
  action,
  inverted,
  showForm,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  desc: string;
  bullets: readonly string[];
  action: { label: string; href: string };
  inverted?: boolean;
  showForm?: boolean;
}) {
  return (
    <article
      id={id}
      className={
        inverted
          ? "scroll-mt-24 rounded-[24px] bg-[#1c1612] p-7 text-[#f8f6f2] sm:p-9 lg:p-10"
          : "scroll-mt-24 rounded-[24px] border border-[#1c1612]/12 bg-[#f0ece4] p-7 text-[#1c1612] sm:p-9 lg:p-10"
      }
    >
      <p className={inverted ? "font-mono text-[10px] uppercase tracking-[0.18em] text-[#ddd2c0]" : "font-mono text-[10px] uppercase tracking-[0.18em] text-[#6c5e4e]"}>
        {eyebrow}
      </p>
      <h3 className="text-display-sm mt-5 max-w-xl">
        {heading}
      </h3>
      <p className={inverted ? "mt-6 max-w-xl text-[15px] leading-[1.55] text-[#f8f6f2]/68" : "mt-6 max-w-xl text-[15px] leading-[1.55] text-[#3b3128]"}>
        {renderEmphasis(desc)}
      </p>

      <ul className="mt-10 grid gap-3">
        {bullets.slice(0, 3).map((bullet) => (
          <li key={bullet} className={inverted ? "flex items-start gap-3 text-[13px] leading-[1.5] text-[#f8f6f2]/75" : "flex items-start gap-3 text-[13px] leading-[1.5] text-[#3b3128]"}>
            <Check size={15} strokeWidth={1.25} className={inverted ? "mt-0.5 shrink-0 text-[#ddd2c0]" : "mt-0.5 shrink-0 text-[#6c5e4e]"} aria-hidden />
            <span>{renderEmphasis(bullet)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {showForm ? (
          <ContactForm type={id as "experts" | "sponsors"} inverted={inverted} />
        ) : (
          <Button
            href={action.href}
            variant={inverted ? "secondary" : "primary"}
            size="lg"
            className={inverted ? "border-[#f8f6f2]/20 text-[#f8f6f2] hover:border-[#f8f6f2]/45 hover:bg-[#f8f6f2]/10" : undefined}
          >
            {action.label}
          </Button>
        )}
      </div>
    </article>
  );
}

export function AudienceBlocks() {
  return (
    <Section tone="light">
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <AudienceCard
            id="sponsors"
            {...audiences.sponsors}
            action={cta.primary}
            inverted
            showForm
          />
        </Reveal>
        <Reveal delay={0.08}>
          <AudienceCard
            id="experts"
            {...audiences.experts}
            action={cta.secondary}
            showForm
          />
        </Reveal>
      </div>
    </Section>
  );
}
