"use client";

import { SERVICES } from "@/lib/content";
import { ServiceGlyph } from "@/components/Glyphs";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

// Alternating zig-zag rows instead of a uniform 3-col card grid.
export default function ServicesList() {
  return (
    <section className="section-pad bg-brand-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <StaggerGroup className="space-y-5">
          {SERVICES.map((s, i) => (
            <StaggerItem key={s.id}>
              <article
                className={`group grid items-center gap-8 rounded-[2rem] border border-brand-line bg-white p-7 shadow-card transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-float sm:p-9 md:grid-cols-[auto_1fr_auto] ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="[direction:ltr]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-deep text-brand-cyan-bright transition-transform duration-500 group-hover:scale-105">
                    <ServiceGlyph id={s.id} size={30} />
                  </span>
                </div>

                <div className="[direction:ltr]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-brand-cyan">
                    {s.tag}
                  </p>
                  <h2 className="mt-1.5 font-display text-[1.6rem] font-semibold leading-tight text-brand-deep sm:text-[1.85rem]">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-brand-ink/65">
                    {s.blurb}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2 [direction:ltr] md:max-w-[13rem] md:flex-col md:gap-2.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3.5 py-1.5 text-[0.82rem] font-medium text-brand-blue"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
