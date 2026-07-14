"use client";

import { cloneElement, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { SERVICES } from "@/lib/content";

// Replace with the client's real Web3Forms access key before going live.
const WEB3FORMS_KEY = "YOUR-WEB3FORMS-ACCESS-KEY";

const fieldBase =
  "w-full rounded-xl border bg-brand-paper px-4 py-3 text-[0.95rem] text-brand-deep placeholder:text-brand-ink/35 transition-colors duration-300 focus:border-brand-cyan focus:bg-white focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  function validate(form) {
    const e = {};
    if (!form.name.value.trim()) e.name = "Please tell us your name.";
    const email = form.email.value.trim();
    if (!email) e.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "That email doesn't look right.";
    if (!form.message.value.trim())
      e.message = "Let us know how we can help.";
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = form.querySelector(`[name="${Object.keys(found)[0]}"]`);
      first?.focus();
      return;
    }

    setStatus("loading");
    const data = Object.fromEntries(new FormData(form));
    data.access_key = WEB3FORMS_KEY;
    data.subject = `New enquiry from ${data.name} — IQ website`;
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

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex flex-col items-center rounded-2xl border border-brand-cyan/30 bg-brand-mist/60 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-white">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-[1.4rem] font-semibold text-brand-deep">
          Message sent
        </h3>
        <p className="mt-2 max-w-xs text-[0.95rem] text-brand-ink/60">
          Thanks — we&apos;ve got it. Expect to hear from IQ within one working
          day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-brand-line px-5 py-2.5 text-[0.9rem] font-semibold text-brand-deep transition-colors hover:border-brand-cyan hover:text-brand-blue"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name}>
          <input name="name" type="text" autoComplete="name" placeholder="Rawle Boodram" className={`${fieldBase} ${errors.name ? "border-red-400" : "border-brand-line"}`} />
        </Field>
        <Field label="Business name" name="company" optional>
          <input name="company" type="text" autoComplete="organization" placeholder="Boodram Hardware Ltd" className={`${fieldBase} border-brand-line`} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" error={errors.email}>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.tt" className={`${fieldBase} ${errors.email ? "border-red-400" : "border-brand-line"}`} />
        </Field>
        <Field label="Phone" name="phone" optional>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+1 (868) 000-0000" className={`${fieldBase} border-brand-line`} />
        </Field>
      </div>

      <Field label="What do you need help with?" name="service" optional>
        <select name="service" defaultValue="" className={`${fieldBase} border-brand-line appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 fill=%22none%22 stroke=%22%230A2540%22 stroke-width=%222%22><path d=%22M3 5l4 4 4-4%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10`}>
          <option value="" disabled>Choose a service</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Not sure yet">Not sure yet — help me decide</option>
        </select>
      </Field>

      <Field label="Message" name="message" error={errors.message}>
        <textarea name="message" rows={4} placeholder="Tell us about your business and where your books stand right now." className={`${fieldBase} resize-none ${errors.message ? "border-red-400" : "border-brand-line"}`} />
      </Field>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="rounded-xl bg-red-50 px-4 py-3 text-[0.9rem] text-red-600"
          >
            Something went wrong sending your message. Please try again, or call
            us on{" "}
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
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-float transition-[box-shadow,transform] duration-300 hover:shadow-glow active:translate-y-px disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, name, error, optional, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="flex items-center gap-2 text-[0.85rem] font-semibold text-brand-deep">
        {label}
        {optional && <span className="text-[0.72rem] font-normal text-brand-ink/40">optional</span>}
      </label>
      {/* attach the matching id to the single field control for the label */}
      {cloneElement(children, { id: name })}
      {error && (
        <span className="text-[0.82rem] text-red-500" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
