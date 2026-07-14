"use client";

import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { CursorMark } from "@/components/ui";

const CHANNELS = [
  {
    label: "Call us",
    value: "(868) 302-3361",
    href: "tel:+18683023361",
    icon: "phone",
  },
  {
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/18683023361",
    icon: "whatsapp",
  },
  {
    label: "Email",
    value: "iqaaconsultingl@gmail.com",
    href: "mailto:iqaaconsultingl@gmail.com",
    icon: "mail",
  },
];

const HOURS = [
  ["Monday – Saturday", "9:00 am – 5:00 pm"],
  ["Sunday", "Closed"],
];

export default function ContactBody() {
  return (
    <section className="section-pad bg-brand-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        {/* Left: channels + hours + map */}
        <Reveal className="order-2 lg:order-1">
          <div className="space-y-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.icon === "whatsapp" ? "_blank" : undefined}
                rel={c.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-brand-line bg-white p-4 shadow-card transition-[transform,box-shadow,border-color] duration-400 hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:shadow-float"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-mist text-brand-blue transition-colors duration-400 group-hover:bg-brand-deep group-hover:text-brand-cyan-bright">
                  <ChannelIcon name={c.icon} />
                </span>
                <span>
                  <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-brand-cyan">
                    {c.label}
                  </span>
                  <span className="block font-display text-[1.05rem] font-medium text-brand-deep">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Hours */}
          <div className="mt-6 rounded-2xl border border-brand-line bg-white p-6 shadow-card">
            <div className="flex items-center gap-2.5">
              <CursorMark size={17} className="text-brand-blue" />
              <h3 className="font-display text-[1.15rem] font-semibold text-brand-deep">
                Office hours
              </h3>
            </div>
            <dl className="mt-4 space-y-2.5">
              {HOURS.map(([d, h]) => (
                <div
                  key={d}
                  className="flex items-center justify-between border-b border-brand-line/70 pb-2.5 text-[0.92rem] last:border-0 last:pb-0"
                >
                  <dt className="text-brand-ink/65">{d}</dt>
                  <dd className="font-medium text-brand-deep">{h}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Map */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-line shadow-card">
            <iframe
              title="IQ Accounting and Consulting — 55 Best Street, Tacarigua"
              src="https://www.google.com/maps?q=55%20Best%20Street%2C%20Tacarigua%2C%20Trinidad%20and%20Tobago&output=embed"
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.2] contrast-[1.05]"
            />
            <a
              href="https://share.google/anVZRt5iQSx2PSxWI"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-[0.8rem] font-semibold text-brand-deep shadow-card backdrop-blur transition-colors hover:text-brand-blue"
            >
              Open in Maps
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M6 3.5h6.5V10M12.5 3.5 4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="rounded-[2rem] border border-brand-line bg-white p-7 shadow-float sm:p-9">
            <h2 className="font-display text-[1.7rem] font-semibold leading-tight text-brand-deep">
              Send us a message
            </h2>
            <p className="mt-2 text-[0.95rem] text-brand-ink/60">
              Tell us a little about your business and we&apos;ll be in touch
              within one working day.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChannelIcon({ name }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "phone")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" {...p}>
        <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
      </svg>
    );
  if (name === "whatsapp")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" {...p}>
        <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6L4 20Z" />
        <path d="M9 9.5c.3 2 2.5 4.2 4.5 4.5.6.1 1.2-.4 1.4-1l-1.6-.9-.8.7c-.8-.4-1.6-1.2-2-2l.7-.8-.9-1.6c-.6.2-1 .8-.8 1.4Z" />
      </svg>
    );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 5.5L19.5 7" />
    </svg>
  );
}
