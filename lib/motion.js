"use client";

import { useEffect, useState } from "react";

// Exponential ease-out — no bounce, no elastic.
export const EASE = [0.16, 1, 0.3, 1];
export const EASE_SOFT = [0.22, 1, 0.36, 1];

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

// Reveal container + item variants (staggered groups).
export const revealContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const revealItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Line/word reveal for headlines.
export const lineParent = {
  hidden: {},
  show: (delay = 0) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};

export const lineChild = {
  hidden: { opacity: 0, y: "0.9em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};
