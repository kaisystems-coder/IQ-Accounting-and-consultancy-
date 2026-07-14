"use client";

import Link from "next/link";
import { CASES } from "@/lib/gallery";
import { Kicker } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import CaseCard from "@/components/CaseCard";

export default function GalleryPreview() {
  const preview = CASES.slice(0, 3);
  return (
    <section className="section-pad relative bg-brand-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <Kicker>The work</Kicker>
            <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-tightest [text-wrap:balance] sm:text-[2.75rem]">
              Real T&amp;T businesses,{" "}
              <span className="italic text-brand-blue">real results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/gallery"
              className="link-underline inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand-blue"
            >
              View the full portfolio
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((c) => (
            <StaggerItem key={c.id} className="h-full">
              <CaseCard c={c} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
