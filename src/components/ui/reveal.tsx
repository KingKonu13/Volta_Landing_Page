"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease, delay },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
  staggerDelay = 0.08,
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
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealText({
  children,
  className,
  delay = 0,
  wordDelay = 0.06,
}: {
  children: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  const reduce = useReducedMotion();
  
  if (reduce) {
    return <span className={cn(className)}>{children}</span>;
  }

  const words = children.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: wordDelay, delayChildren: delay },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease },
    },
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={childVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
