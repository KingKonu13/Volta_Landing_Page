"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease, delay },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGrid({
  children,
  className,
  staggerDelay = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealTile({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 14, scale: reduce ? 1 : 0.99 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}
