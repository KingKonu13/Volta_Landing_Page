import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[#1c1612] bg-[#1c1612] text-[#f8f6f2]">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-sm text-[14px] leading-[1.55] tracking-[-0.002em] text-[#f8f6f2]/55">
              AI-native regulatory operations for biotech teams moving toward the FDA.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-2 sm:grid-flow-col sm:grid-rows-2 sm:gap-x-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-[#f8f6f2]/55 transition-colors hover:text-[#f8f6f2]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-[#f8f6f2]/10 pt-6">
          <p className="text-[12px] text-[#f8f6f2]/35">
            &copy; {new Date().getFullYear()} Volta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
