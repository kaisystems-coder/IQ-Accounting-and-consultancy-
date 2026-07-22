"use client";

import Link from "next/link";
import Image from "next/image";
import { CursorMark } from "@/components/ui";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Accounting System Setup",
  "Policies & Procedures Manuals",
  "Staff Training",
  "E-Courses & Workshops",
  "Private 1-on-1 Training",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-deep text-white/70">
      {/* flowing ribbon accent echoing the IQ mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-64 w-[42rem] max-w-full opacity-40"
      >
        <div className="mesh-blob h-full w-full animate-drift bg-brand-blue/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/iq-logo-white.png"
              alt="IQ Accounting and Consulting Limited"
              width={1044}
              height={360}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/60">
              Accounting system setup, staff training and professional
              e-courses for Trinidad &amp; Tobago — so you run your own numbers
              with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="link-underline text-[0.95rem] text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-[0.95rem] text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              <li>
                <a href="tel:+18683023361" className="text-white/70 transition-colors hover:text-white">
                  (868) 302-3361
                </a>
              </li>
              <li>
                <a href="mailto:iqaaconsultingl@gmail.com" className="text-white/70 transition-colors hover:text-white">
                  iqaaconsultingl@gmail.com
                </a>
              </li>
              <li className="text-white/60">
                55 Best Street, Tacarigua
                <br />
                Trinidad &amp; Tobago
              </li>
            </ul>
            <div className="mt-5 flex gap-2.5">
              {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-brand-cyan hover:text-brand-cyan-bright"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/45 sm:flex-row sm:items-center">
          <p className="flex items-center gap-2">
            <CursorMark size={16} className="text-brand-cyan-bright" />
            &copy; {new Date().getFullYear()} IQ Accounting and Consulting Limited
          </p>
          <p>Registered in Trinidad &amp; Tobago · Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  if (name === "Facebook")
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5H14Z" /></svg>
    );
  if (name === "Instagram")
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="7" r="1.1" fill="currentColor" /></svg>
    );
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M7 9v9H4V9h3ZM5.5 4A1.75 1.75 0 1 1 5.5 7.5 1.75 1.75 0 0 1 5.5 4ZM20 18h-3v-4.7c0-1.2-.5-2-1.6-2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V18h-3s.04-8.2 0-9h3v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V18Z" /></svg>
  );
}
