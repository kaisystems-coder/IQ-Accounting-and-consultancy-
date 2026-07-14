"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TIMELINE } from "@/lib/content";
import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";

export default function Timeline() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section className="section-pad bg-brand-mist/60">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Kicker>The road so far</Kicker>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest [text-wrap:balance] sm:text-[2.6rem]">
            Sixteen years of{" "}
            <span className="italic text-brand-blue">getting it right.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-12">
          {/* rail */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-0.5 rounded bg-brand-line sm:left-[11px]" />
          {/* progress fill */}
          <motion.div
            style={reduced ? { scaleY: 1 } : { scaleY }}
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-0.5 origin-top rounded bg-gradient-to-b from-brand-cyan to-brand-blue sm:left-[11px]"
          />

          <ol className="space-y-12">
            {TIMELINE.map((t) => {
              const inner = (
                <>
                  <span className="absolute -left-8 top-1 flex h-4 w-4 items-center justify-center sm:-left-12">
                    <span className="h-4 w-4 rounded-full border-[3px] border-brand-paper bg-brand-blue shadow-[0_0_0_2px_rgba(30,111,181,0.25)]" />
                  </span>
                  <p className="tabular font-display text-[1.6rem] font-semibold leading-none text-brand-cyan">
                    {t.year}
                  </p>
                  <h3 className="mt-2 font-display text-[1.3rem] font-semibold text-brand-deep">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[0.98rem] leading-relaxed text-brand-ink/65">
                    {t.body}
                  </p>
                </>
              );
              // Reduced motion => plain, fully-visible list item (never gated on scroll).
              if (reduced) {
                return (
                  <li key={t.year} className="relative">
                    {inner}
                  </li>
                );
              }
              return (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="relative"
                >
                  {inner}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
