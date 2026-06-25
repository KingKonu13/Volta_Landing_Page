import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-[8px] font-medium tracking-[-0.005em] transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1c1612]/85 text-[#f8f6f2] outline outline-2 -outline-offset-2 outline-[#f8f6f2]/10 hover:bg-[#1c1612]",
  secondary:
    "border border-[#1c1612]/15 bg-transparent text-[#1c1612] hover:border-[#1c1612]/40 hover:bg-[#1c1612]/[0.025]",
  ghost:
    "text-[#3b3128] hover:bg-[#1c1612]/[0.04] hover:text-[#1c1612]",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-[15px] leading-[1.55]",
  lg: "px-6 py-3 text-[15px] leading-[1.55]",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
