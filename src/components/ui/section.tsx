import { cn, renderEmphasis } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Section({
  id,
  className,
  children,
  tone = "light",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "light" | "muted" | "dark";
}) {
  const tones = {
    light: "bg-[#f8f6f2] text-[#1c1612]",
    muted: "bg-[#f0ece4] text-[#1c1612]",
    dark: "bg-[#1c1612] text-[#f8f6f2]",
  };

  return (
    <section
      id={id}
      className={cn("scroll-mt-20 border-t border-[#1c1612]/12 py-18 sm:py-24 lg:py-28", tones[tone], className)}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-mono text-[10px] font-medium uppercase tracking-[0.18em]",
            tone === "dark" ? "text-[#ddd2c0]" : "text-[#6c5e4e]",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`text-display-sm mt-4 max-w-4xl ${align === "center" ? "mx-auto" : ""} ${tone === "dark" ? "text-[#f8f6f2]" : "text-[#1c1612]"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-[16px] leading-[1.5] tracking-[-0.002em] sm:text-[18px] sm:leading-[1.5]",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-[#f8f6f2]/70" : "text-[#3b3128]",
          )}
        >
          {renderEmphasis(intro)}
        </p>
      )}
    </Reveal>
  );
}
