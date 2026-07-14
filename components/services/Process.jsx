"use client";

import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

const STEPS = [
  {
    n: "01",
    title: "Bring the box",
    body: "Hand us whatever you have — receipts, bank statements, the shoebox, the plastic bags. No judgment, no need to sort it first.",
  },
  {
    n: "02",
    title: "We set the system",
    body: "We build your computerized accounting system, migrate your data and reconcile everything back to the cent.",
  },
  {
    n: "03",
    title: "We file & keep you compliant",
    body: "VAT, PAYE, NIS, Corporation Tax — every return prepared, filed and paid ahead of its deadline, tracked on a calendar we run.",
  },
  {
    n: "04",
    title: "You get the full picture",
    body: "Clean monthly numbers, certified statements when you need them, and a partner who explains what it all means.",
  },
];

export default function Process() {
  return (
    <section className="section-pad bg-brand-mist/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Kicker>How it works</Kicker>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest [text-wrap:balance] sm:text-[2.6rem]">
            From chaos to clean books in{" "}
            <span className="italic text-brand-blue">four steps.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group relative h-full rounded-3xl border border-brand-line bg-white p-7 shadow-card transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-float">
                <span className="tabular font-display text-[2.6rem] font-semibold leading-none text-brand-mist transition-colors duration-500 group-hover:text-brand-cyan/70">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[1.2rem] font-semibold leading-tight text-brand-deep">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-brand-ink/60">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
