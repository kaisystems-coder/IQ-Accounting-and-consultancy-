"use client";

import { motion } from "framer-motion";
import HeroBackdrop from "@/components/HeroBackdrop";
import { Kicker } from "@/components/ui";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";

// Compact dark hero shared by inner pages — consistent with the home hero mood.
export default function PageHero({ kicker, title, accent, intro }) {
  const reduced = usePrefersReducedMotion();
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-brand-deep pb-16 pt-40 text-white sm:min-h-[58vh]">
      <HeroBackdrop />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Kicker tone="light">{kicker}</Kicker>
        </motion.div>
        <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tightest [text-wrap:balance] sm:text-6xl">
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: reduced ? 0 : 0.08 }}
            className="block"
          >
            {title}{" "}
            {accent && (
              <span className="italic text-brand-cyan-bright">{accent}</span>
            )}
          </motion.span>
        </h1>
        {intro && (
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: reduced ? 0 : 0.24 }}
            className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
