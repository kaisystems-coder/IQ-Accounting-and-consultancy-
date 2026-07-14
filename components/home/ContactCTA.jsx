"use client";

import HeroBackdrop from "@/components/HeroBackdrop";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { CursorMark } from "@/components/ui";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-24 text-white sm:py-28">
      <HeroBackdrop parallax={false} />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-cyan-bright">
            <CursorMark size={26} />
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-[2.3rem] font-semibold leading-[1.05] tracking-tightest [text-wrap:balance] sm:text-[3.25rem]">
            Ready to clear the pile?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/65">
            Bring the box, the bags, the shoebox of receipts — whatever state
            your books are in. One conversation is all it takes to get IQ on your
            side.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/contact" variant="light">
            Book a free consult
          </MagneticButton>
          <a
            href="tel:+18683023361"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-colors duration-300 hover:border-brand-cyan-bright hover:text-brand-cyan-bright active:translate-y-px"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
            (868) 302-3361
          </a>
        </Reveal>
      </div>
    </section>
  );
}
