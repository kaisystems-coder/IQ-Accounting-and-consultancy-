"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import HeroBackdrop from "@/components/HeroBackdrop";
import MagneticButton from "@/components/MagneticButton";
import HeroContactForm from "@/components/home/HeroContactForm";
import { CursorMark } from "@/components/ui";
import { EASE, lineChild, lineParent, usePrefersReducedMotion } from "@/lib/motion";

const HEADLINE = [
  ["Set up the system.", false],
  ["Train your team.", false],
  ["Own your numbers.", true],
];

export default function HomeHero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-brand-deep pt-28 text-white">
      <HeroBackdrop />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-28 sm:px-8 sm:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-16">
        {/* Foreground content */}
        <div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.8rem] font-medium text-white/75 backdrop-blur-sm"
          >
            <CursorMark size={15} className="text-brand-cyan-bright" />
            Accounting you learn to run yourself.
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tightest [text-wrap:balance] sm:text-6xl lg:text-[4.15rem]">
            <motion.span
              variants={reduced ? undefined : lineParent}
              initial={reduced ? false : "hidden"}
              animate={reduced ? false : "show"}
              custom={0.2}
              className="block"
            >
              {HEADLINE.map(([line, accent], i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    variants={reduced ? undefined : lineChild}
                    className={`block ${
                      accent
                        ? "italic text-brand-cyan-bright"
                        : "text-white"
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: reduced ? 0 : 1.05 }}
            className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-white/70"
          >
            IQ does two things well: we set up the accounting system for your
            new business — manuals and all — and train your staff to run it, and
            we teach accounting &amp; taxation e-courses and workshops for
            professionals across Trinidad &amp; Tobago.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: reduced ? 0 : 1.2 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="/contact" variant="light">
              Book a consult
            </MagneticButton>
            <MagneticButton href="/services" variant="ghost">
              See what we do
            </MagneticButton>
          </motion.div>

          <motion.ul
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: reduced ? 0 : 1.4 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[0.85rem] text-white/55"
          >
            {["System setup & manuals", "Staff training in-house", "Public e-courses & workshops"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-cyan-bright" />
                  {t}
                </li>
              )
            )}
          </motion.ul>
        </div>

        {/* Secondary lead form (replaces the decorative panel) */}
        <div className="hidden lg:block">
          <HeroContactForm />
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}

function ScrollCue() {
  const reduced = usePrefersReducedMotion();
  // Fade + drift out over the first ~18% of a viewport of scrolling.
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 140], [1, 0]);
  const y = useTransform(scrollY, [0, 140], [0, 16]);

  return (
    <motion.a
      href="#services"
      aria-label="Scroll to services"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: reduced ? 0 : 1.6 }}
      style={reduced ? undefined : { opacity, y }}
      className="pointer-events-none absolute bottom-5 left-1/2 z-[15] hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
    >
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.2em]">
        Scroll
      </span>
      <span className="flex h-9 w-5 justify-center rounded-full border border-white/25 pt-1.5">
        <motion.span
          animate={reduced ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1 rounded-full bg-brand-cyan-bright"
        />
      </span>
    </motion.a>
  );
}
