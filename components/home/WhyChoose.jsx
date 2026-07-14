"use client";

import { motion } from "framer-motion";
import { WHY } from "@/lib/content";
import { Kicker, CursorMark } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export default function WhyChoose() {
  return (
    <section className="section-pad relative bg-brand-mist/60">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-32">
          <Kicker>Why IQ</Kicker>
          <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tightest [text-wrap:balance] sm:text-[2.75rem]">
            The accountant who actually{" "}
            <span className="italic text-brand-blue">picks up the phone.</span>
          </h2>
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-brand-ink/65">
            Plenty of firms will file your returns. Fewer will explain them, warn
            you before a deadline, and treat your compliance calendar as their
            job. That difference is the whole point of IQ.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand-line bg-white px-5 py-4 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-deep text-brand-cyan-bright">
              <CursorMark size={18} />
            </span>
            <p className="text-[0.92rem] font-medium text-brand-deep">
              High Impact solves the pile —{" "}
              <span className="text-brand-ink/55">so you can run the business.</span>
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2">
          {WHY.map((w) => (
            <StaggerItem key={w.title}>
              <div className="group h-full rounded-3xl border border-brand-line bg-white p-7 shadow-card transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-float">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-mist text-brand-blue transition-colors duration-500 group-hover:bg-brand-deep group-hover:text-brand-cyan-bright">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-[1.2rem] font-semibold leading-tight text-brand-deep">
                  {w.title}
                </h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-brand-ink/60">
                  {w.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
