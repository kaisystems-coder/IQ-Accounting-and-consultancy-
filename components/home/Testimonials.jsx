"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";
import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  const t = TESTIMONIALS[i];

  return (
    <section className="section-pad relative bg-brand-paper">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Kicker>In their words</Kicker>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tightest [text-wrap:balance] sm:text-[2.75rem]">
            People we trained —{" "}
            <span className="italic text-brand-blue">now running it themselves.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="relative rounded-[2rem] border border-brand-line bg-white p-8 shadow-card sm:p-12">
            <span
              aria-hidden
              className="pointer-events-none absolute left-8 top-6 select-none font-display text-[6rem] leading-none text-brand-mist"
            >
              &ldquo;
            </span>
            <div className="relative min-h-[9rem] sm:min-h-[7rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={i}
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative pt-6"
                >
                  <p className="font-display text-[1.4rem] font-medium leading-snug text-brand-deep [text-wrap:pretty] sm:text-[1.7rem]">
                    {t.quote}
                  </p>
                  <footer className="mt-7 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue font-display text-lg font-semibold text-white">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-deep">{t.name}</p>
                      <p className="text-[0.88rem] text-brand-ink/55">{t.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center gap-2.5 border-t border-brand-line pt-6">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  aria-current={idx === i}
                  className="group py-2"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      idx === i
                        ? "w-8 bg-gradient-to-r from-brand-cyan to-brand-blue"
                        : "w-4 bg-brand-line group-hover:bg-brand-cyan/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
