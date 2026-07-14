"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

/**
 * Layered ambient backdrop for dark hero sections:
 * - deep navy base
 * - drifting gradient mesh blobs (cyan -> blue)
 * - a flowing SVG ribbon echoing the IQ mark, with a light scroll parallax
 * All motion is transform/opacity only; disabled under reduced motion.
 */
export default function HeroBackdrop({ parallax = true }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRibbon = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yMesh = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_-10%,#123a5e_0%,#0a2540_45%,#071a30_100%)]" />

      {/* mesh blobs */}
      <motion.div
        style={reduced || !parallax ? undefined : { y: yMesh }}
        className="absolute inset-0"
      >
        <div className="mesh-blob left-[-6rem] top-[-4rem] h-[26rem] w-[26rem] animate-drift bg-brand-cyan/25" />
        <div
          className="mesh-blob right-[-8rem] top-[6rem] h-[30rem] w-[30rem] animate-drift bg-brand-blue/30"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="mesh-blob bottom-[-8rem] left-[30%] h-[24rem] w-[24rem] animate-drift bg-brand-cyan-bright/15"
          style={{ animationDelay: "-11s" }}
        />
      </motion.div>

      {/* flowing ribbon — echoes the IQ logo's flowing underline */}
      <motion.svg
        style={reduced || !parallax ? { opacity } : { y: yRibbon, opacity }}
        className="absolute inset-x-0 top-1/2 h-[60%] w-full -translate-y-1/2"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#33C6F4" stopOpacity="0.0" />
            <stop offset="45%" stopColor="#1FB6E8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1E6FB5" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="ribbon2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E6FB5" stopOpacity="0" />
            <stop offset="50%" stopColor="#33C6F4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1FB6E8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-50 380 C 250 200, 420 460, 640 300 S 1050 180, 1260 320"
          stroke="url(#ribbon)"
          strokeWidth="2.5"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          animate={reduced ? {} : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M-50 300 C 220 440, 470 160, 700 340 S 1060 420, 1260 240"
          stroke="url(#ribbon2)"
          strokeWidth="1.4"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          animate={reduced ? {} : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </motion.svg>

      {/* fine grid to read as "ledger precision" */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* legibility floor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-deep/80" />
    </div>
  );
}
