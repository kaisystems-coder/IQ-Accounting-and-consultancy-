"use client";

import { motion } from "framer-motion";
import { revealContainer, revealItem, usePrefersReducedMotion } from "@/lib/motion";

/** Wrap a group; each direct <StaggerItem> reveals ~0.1s after the previous. */
export function StaggerGroup({ children, className = "", amount = 0.2, as = "div" }) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className = "", as = "div" }) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={revealItem}>
      {children}
    </MotionTag>
  );
}
