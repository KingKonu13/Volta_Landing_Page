"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Tag =
  | "div"
  | "section"
  | "p"
  | "li"
  | "ul"
  | "ol"
  | "span"
  | "h2"
  | "blockquote";

/**
 * Self-contained scroll reveal for the editorial variant.
 * Fades + lifts content into view once, respecting reduced-motion.
 */
export function FadeUp({
  children,
  delay = 0,
  y = 22,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container — children should be <Stagger.Item> */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: Tag;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  style,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
      }}
    >
      {children}
    </MotionTag>
  );
}
