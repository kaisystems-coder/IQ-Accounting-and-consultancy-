"use client";

import { Kicker, CursorMark } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

const CREDENTIALS = [
  "ICATT-aligned practice",
  "BIR & NIS compliant filings",
  "Certified financial statements",
  "Computerized accounting specialists",
];

export default function AboutStory() {
  return (
    <section className="section-pad bg-brand-paper">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <Kicker>Our story</Kicker>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest [text-wrap:balance] sm:text-[2.6rem]">
            Started with a box of receipts.{" "}
            <span className="italic text-brand-blue">
              Still solving that same problem.
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-brand-ink/70">
            <p>
              Every small and medium business in Trinidad &amp; Tobago runs into
              the same wall — heaps of paper, bills in boxes and plastic bags, and
              no honest read on how much tax is owed. Owners are brilliant at their
              trade and buried in admin they never signed up for.
            </p>
            <p>
              IQ Accounting and Consulting was founded to fix exactly that. We take
              the pile, put it into a proper system, file what needs filing, and
              hand back numbers you can actually use to make decisions. Compliance
              is the floor — clarity is the point.
            </p>
            <p className="font-medium text-brand-deep">
              We&apos;ve been expecting you. Bring the box.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative rounded-[2rem] border border-brand-line bg-brand-deep p-8 text-white shadow-float sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand-cyan/25 blur-2xl"
            />
            <div className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-cyan-bright">
                <CursorMark size={20} />
              </span>
              <p className="font-display text-xl">What we stand for</p>
            </div>
            <StaggerGroup as="ul" className="relative mt-7 space-y-4">
              {CREDENTIALS.map((c) => (
                <StaggerItem as="li" key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20 text-brand-cyan-bright">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[0.98rem] text-white/80">{c}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <div className="relative mt-8 border-t border-white/10 pt-6">
              <p className="text-[0.85rem] uppercase tracking-[0.14em] text-white/40">
                Based in
              </p>
              <p className="mt-1 font-display text-lg">
                Tacarigua, Trinidad &amp; Tobago
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
