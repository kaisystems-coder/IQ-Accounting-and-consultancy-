"use client";

import { VALUES } from "@/lib/content";
import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export default function Values() {
  return (
    <section className="section-pad bg-brand-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Kicker>How we work</Kicker>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest [text-wrap:balance] sm:text-[2.6rem]">
            Three things we refuse to{" "}
            <span className="italic text-brand-blue">compromise on.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-brand-line bg-brand-line sm:grid-cols-3">
          {VALUES.map((v) => (
            <StaggerItem key={v.k} className="group bg-white p-8 transition-colors duration-500 hover:bg-brand-mist/50">
              <p className="font-display text-[1.5rem] font-semibold text-brand-deep">
                {v.k}
              </p>
              <span className="mt-3 block h-0.5 w-10 rounded bg-gradient-to-r from-brand-cyan to-brand-blue transition-all duration-500 group-hover:w-16" />
              <p className="mt-5 text-[0.98rem] leading-relaxed text-brand-ink/65">
                {v.d}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
