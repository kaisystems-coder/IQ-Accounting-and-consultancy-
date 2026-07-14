"use client";

import Link from "next/link";
import { COURSES } from "@/lib/courses";
import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export default function CoursesGrid() {
  return (
    <section className="section-pad bg-brand-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Kicker>The catalogue</Kicker>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest [text-wrap:balance] sm:text-[2.6rem]">
              Eight practical courses,{" "}
              <span className="italic text-brand-blue">taught by people who do the work.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-xs">
            <p className="text-[0.98rem] leading-relaxed text-brand-ink/65">
              Every course is hands-on and grounded in the real T&amp;T working
              environment — no theory for its own sake.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <StaggerItem key={c.id} className="h-full">
              <CourseCard c={c} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.05} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand-line bg-brand-mist/50 px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-[0.95rem] text-brand-ink/70">
              Ready to register, or want a course run for your whole team?
            </p>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-deep px-6 py-3 text-[0.9rem] font-semibold text-white shadow-float transition-shadow duration-300 hover:shadow-glow active:translate-y-px"
            >
              Enrol or enquire
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CourseCard({ c }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-card transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-float ${
        c.featured
          ? "border-brand-cyan/50 ring-1 ring-brand-cyan/20"
          : "border-brand-line hover:border-brand-cyan/40"
      }`}
    >
      {c.featured && (
        <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white">
          Job ready
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <span className="tabular font-display text-[0.95rem] font-semibold text-brand-cyan">
          {c.n}
        </span>
        {c.online && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-mist px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-brand-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            Online
          </span>
        )}
      </div>

      <h3 className="mt-3.5 font-display text-[1.22rem] font-semibold leading-snug text-brand-deep">
        {c.title}
      </h3>
      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-brand-ink/60">
        {c.blurb}
      </p>

      <ul className="mt-4 space-y-2">
        {c.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-[0.86rem] leading-snug text-brand-ink/70">
            <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-blue">
              <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
                <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-end justify-between border-t border-brand-line pt-4">
        <div>
          <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-brand-ink/40">
            Investment
          </span>
          <span className="tabular font-display text-[1.5rem] font-semibold leading-none text-brand-deep">
            TT${c.price}
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-brand-blue"
          aria-label={`Enrol in ${c.title}`}
        >
          Enrol
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
