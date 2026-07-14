"use client";

import CountUp from "@/components/CountUp";
import HeroBackdrop from "@/components/HeroBackdrop";
import { STATS } from "@/lib/content";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function StatsBand() {
  return (
    <section className="section-pad relative overflow-hidden bg-brand-deep text-white">
      <HeroBackdrop parallax={false} />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Kicker tone="light">By the numbers</Kicker>
          <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tightest [text-wrap:balance] sm:text-[2.75rem]">
            Trusted with the books that keep{" "}
            <span className="italic text-brand-cyan-bright">
              T&amp;T businesses
            </span>{" "}
            running.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="relative">
              <div className="absolute -left-3 top-1 hidden h-14 w-px bg-gradient-to-b from-brand-cyan-bright/60 to-transparent lg:block" />
              <p className="font-display text-[3.1rem] font-semibold leading-none tracking-tightest text-white sm:text-[3.75rem]">
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </p>
              <p className="mt-3 max-w-[14rem] text-[0.92rem] leading-snug text-white/60">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
