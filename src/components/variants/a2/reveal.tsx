"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Tag =
  | "div"
  | "section"
  | "p"
  | "li"
  | "ul"
  | "ol"
  | "span"
  | "h2"
  | "h3"
  | "blockquote";

export function FadeUp({
  children,
  delay = 0,
  y = 24,
  className,
  style,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: Tag;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay } },
  };

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  style,
  stagger = 0.09,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  as?: Tag;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
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
        hidden: { opacity: 0, y: reduce ? 0 : 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      }}
    >
      {children}
    </MotionTag>
  );
}
