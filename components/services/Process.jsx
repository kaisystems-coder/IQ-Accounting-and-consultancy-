"use client";

import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

const STEPS = [
  {
    n: "01",
    title: "We assess your business",
    body: "We sit with you to understand how the business runs, what it needs to record, and which taxes and deadlines apply to you.",
  },
  {
    n: "02",
    title: "We build the system",
    body: "We set up your accounting system and write the policies and procedures manuals — so there's a clear, documented way to do every task.",
  },
  {
    n: "03",
    title: "We train your staff",
    body: "Hands-on training on your own system and forms, until your team can post, reconcile and report with confidence.",
  },
  {
    n: "04",
    title: "You run it in-house",
    body: "Your staff keep the books, and you keep the knowledge. We're on hand for questions — but the accounting is yours.",
  },
];

export default function Process() {
  return (
    <section className="section-pad bg-brand-mist/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Kicker>How it works</Kicker>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest [text-wrap:balance] sm:text-[2.6rem]">
            From setup to self-sufficient in{" "}
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
