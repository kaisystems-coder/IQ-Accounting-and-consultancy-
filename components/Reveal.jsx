"use client";

import { motion } from "framer-motion";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";

/**
 * Scroll reveal — fires ONCE on enter. Reduced motion => content shows instantly.
 * Content is always in the DOM; only transform/opacity animate, so a headless
 * render (screenshot) that skips the transition still shows the section.
 */
export default function Reveal({
  children,
  y = 28,
  delay = 0,
  duration = 0.7,
  className = "",
  as = "div",
  amount = 0.25,
}) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
