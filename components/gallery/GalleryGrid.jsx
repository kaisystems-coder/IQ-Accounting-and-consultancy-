"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CASES, CATEGORIES } from "@/lib/gallery";
import CaseCard from "@/components/CaseCard";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const reduced = usePrefersReducedMotion();

  const shown =
    filter === "All" ? CASES : CASES.filter((c) => c.cat === filter);

  return (
    <section className="section-pad bg-brand-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* filter bar */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const on = cat === filter;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={on}
                className={`relative rounded-full px-4 py-2 text-[0.88rem] font-semibold transition-colors duration-300 ${
                  on
                    ? "text-white"
                    : "text-brand-ink/60 hover:text-brand-deep"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-deep"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <motion.div
          layout={!reduced}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.div
                key={c.id}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? {} : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="h-full"
              >
                <CaseCard c={c} onClick={() => setActive(c)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / case detail */}
      <AnimatePresence>
        {active && (
          <Lightbox c={active} onClose={() => setActive(null)} reduced={reduced} />
        )}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({ c, onClose, reduced }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={c.title}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-brand-deep/70 backdrop-blur-sm" />
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-brand-deep p-8 text-white shadow-float sm:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-cyan/25 blur-3xl"
        />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>

        <span className="relative inline-flex rounded-full bg-white/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-brand-cyan-bright">
          {c.cat}
        </span>
        <p className="relative mt-6 font-display text-[3rem] font-semibold leading-none tracking-tightest">
          {c.metric}
        </p>
        <p className="relative mt-1.5 text-[0.9rem] text-white/55">{c.metricLabel}</p>
        <h3 className="relative mt-6 font-display text-[1.5rem] font-semibold leading-tight">
          {c.title}
        </h3>
        <p className="relative mt-3 text-[1rem] leading-relaxed text-white/70">
          {c.body}
        </p>
        <a
          href="/contact"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.9rem] font-semibold text-brand-deep transition-shadow hover:shadow-glow"
        >
          Get the same outcome
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}
