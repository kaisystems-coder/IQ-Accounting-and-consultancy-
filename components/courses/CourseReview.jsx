"use client";

import HeroBackdrop from "@/components/HeroBackdrop";
import Reveal from "@/components/Reveal";
import { Kicker } from "@/components/ui";
import { COURSE_REVIEW } from "@/lib/courses";

export default function CourseReview() {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-20 text-white sm:py-24">
      <HeroBackdrop parallax={false} />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Kicker tone="light">From a graduate</Kicker>
          </div>
          <span
            aria-hidden
            className="mt-4 block font-display text-[4rem] leading-none text-white/15"
          >
            &ldquo;
          </span>
          <blockquote className="-mt-6 font-display text-[1.4rem] font-medium leading-snug [text-wrap:pretty] sm:text-[1.7rem]">
            {COURSE_REVIEW.quote}
          </blockquote>
          <p className="mt-6 text-[0.9rem] text-white/55">
            {COURSE_REVIEW.role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
