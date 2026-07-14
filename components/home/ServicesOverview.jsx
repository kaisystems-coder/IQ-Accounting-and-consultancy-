"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";
import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import { ServiceGlyph } from "@/components/Glyphs";

export default function ServicesOverview() {
  return (
    <section id="services" className="section-pad relative bg-brand-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Kicker>What we do</Kicker>
            <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tightest [text-wrap:balance] sm:text-[2.75rem]">
              Everything your books need,{" "}
              <span className="italic text-brand-blue">under one roof.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-[1.02rem] leading-relaxed text-brand-ink/65">
              From payroll to the certified statements your banker asks for — no
              juggling providers, no gaps, no things falling through the cracks.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerItem key={s.id}>
              <Link
                href={s.id === "ecourses" ? "/courses" : "/services"}
                className="group relative flex h-full flex-col rounded-3xl border border-brand-line bg-white p-7 shadow-card transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-brand-cyan/50 hover:shadow-float"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-blue transition-colors duration-500 group-hover:bg-brand-deep group-hover:text-brand-cyan-bright">
                  <ServiceGlyph id={s.id} />
                </span>
                <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-brand-cyan">
                  {s.tag}
                </p>
                <h3 className="mt-2 font-display text-[1.35rem] font-semibold leading-tight text-brand-deep">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-brand-ink/60">
                  {s.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-brand-blue">
                  Learn more
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
