import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "font-display text-[26px] leading-tight tracking-[-0.025em]",
        tone === "dark" ? "text-[#f8f6f2]" : "text-[#1c1612]",
        className,
      )}
    >
      Volta
    </span>
  );
}
