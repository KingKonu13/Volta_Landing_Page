"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { nav, cta } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-[#1c1612]/12 bg-[#f8f6f2]/95 backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-5">
        <Link href="#top" aria-label="Volta home" className="rounded-sm">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] leading-[1.55] tracking-[-0.005em] text-[#3b3128] transition-colors hover:text-[#1c1612]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href={cta.primary.href} variant="secondary" size="md">
            {cta.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1c1612] transition-colors hover:bg-[#1c1612]/[0.04] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-[#1c1612]/12 bg-[#f8f6f2] md:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] text-[#3b3128] transition-colors hover:bg-[#f0ece4] hover:text-[#1c1612]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-[#ddd2c0] pt-4">
              <Button href={cta.primary.href} variant="primary" size="lg" className="w-full">
                {cta.primary.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
