"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";
import { CursorMark } from "@/components/ui";

// Shares IQ's Web3Forms access key. Replace before going live.
const WEB3FORMS_KEY = "YOUR-WEB3FORMS-ACCESS-KEY";

// Dark-glass field styling for the navy hero.
const fieldBase =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[0.92rem] text-white placeholder:text-white/40 transition-colors duration-300 focus:border-brand-cyan-bright focus:bg-white/10 focus:outline-none";

export default function HeroContactForm() {
  const reduced = usePrefersReducedMotion();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  function validate(form) {
    const e = {};
    if (!form.name.value.trim()) e.name = "Your name, please.";
    const email = form.email.value.trim();
    if (!email) e.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "That email doesn't look right.";
    if (!form.message.value.trim()) e.message = "Tell us briefly how we can help.";
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("loading");
    const data = Object.fromEntries(new FormData(form));
    data.access_key = WEB3FORMS_KEY;
    data.subject = `New enquiry from ${data.name} — IQ website (hero)`;
    data.from_name = "IQ Accounting Website";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: reduced ? 0 : 0.5 }}
      className="relative mx-auto w-full max-w-sm lg:mx-0"
    >
      {/* glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-cyan/20 blur-2xl"
      />

      <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.06] p-6 shadow-float backdrop-blur-xl sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan-bright">
            <CursorMark size={18} />
          </span>
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand-cyan-bright">
              Quick enquiry
            </p>
            <p className="font-display text-lg leading-tight text-white">
              Let&apos;s talk
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-6 flex flex-col items-center rounded-2xl border border-brand-cyan/25 bg-brand-cyan/10 px-5 py-7 text-center"
              role="status"
              aria-live="polite"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="m5 12.5 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="mt-4 font-display text-[1.15rem] font-semibold text-white">
                Message sent
              </p>
              <p className="mt-1.5 text-[0.88rem] text-white/60">
                We&apos;ll be in touch within one working day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-5 rounded-full border border-white/20 px-4 py-2 text-[0.85rem] font-semibold text-white/85 transition-colors hover:border-brand-cyan-bright hover:text-brand-cyan-bright"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              noValidate
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? {} : { opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="mt-6 space-y-3"
            >
              <div>
                <label htmlFor="hero-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={`${fieldBase} ${errors.name ? "border-red-400/70" : ""}`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-[0.78rem] text-red-300" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="hero-email" className="sr-only">
                  Email
                </label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className={`${fieldBase} ${errors.email ? "border-red-400/70" : ""}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-[0.78rem] text-red-300" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="hero-phone" className="sr-only">
                  Phone (optional)
                </label>
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone (optional)"
                  className={fieldBase}
                />
              </div>

              <div>
                <label htmlFor="hero-message" className="sr-only">
                  How can we help?
                </label>
                <textarea
                  id="hero-message"
                  name="message"
                  rows={2}
                  placeholder="How can we help?"
                  className={`${fieldBase} resize-none ${errors.message ? "border-red-400/70" : ""}`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-[0.78rem] text-red-300" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    role="alert"
                    className="overflow-hidden rounded-lg bg-red-500/15 px-3 py-2 text-[0.82rem] text-red-200"
                  >
                    Couldn&apos;t send. Try again, or call{" "}
                    <a href="tel:+18683023361" className="font-semibold underline">
                      (868) 302-3361
                    </a>
                    .
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[0.92rem] font-semibold text-brand-deep shadow-float transition-[box-shadow,transform] duration-300 hover:shadow-glow active:translate-y-px disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-deep/30 border-t-brand-deep" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              <p className="pt-0.5 text-center text-[0.76rem] text-white/45">
                Prefer to talk? WhatsApp or call{" "}
                <a
                  href="tel:+18683023361"
                  className="font-medium text-white/70 underline-offset-2 hover:text-brand-cyan-bright hover:underline"
                >
                  (868) 302-3361
                </a>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
