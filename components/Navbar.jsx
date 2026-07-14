"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[50] flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-[background-color,box-shadow,border-color] duration-500 sm:px-5 ${
          scrolled
            ? "border-brand-line/80 bg-white/75 shadow-card backdrop-blur-xl"
            : "border-transparent bg-white/30 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          className="relative flex h-10 shrink-0 items-center py-1 sm:h-11"
          aria-label="IQ Accounting and Consulting — Home"
        >
          {/* white logo when nav is transparent over the dark hero */}
          <Image
            src="/iq-logo-white.png"
            alt="IQ Accounting and Consulting Limited"
            width={1044}
            height={360}
            priority
            className={`h-full w-auto transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* color logo when scrolled (glass/white nav) */}
          <Image
            src="/iq-logo-color.png"
            alt=""
            aria-hidden
            width={1044}
            height={360}
            className={`absolute inset-y-1 left-0 h-[calc(100%-0.5rem)] w-auto transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        {/* Desktop links with animated active pill */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative block rounded-full px-4 py-2 text-[0.9rem] font-semibold transition-colors duration-300 ${
                    active
                      ? "text-brand-deep"
                      : "text-brand-ink/60 hover:text-brand-deep"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-mist"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand-deep px-5 py-2.5 text-[0.9rem] font-semibold text-white shadow-float transition-shadow duration-300 hover:shadow-glow active:translate-y-px"
          >
            Book a consult
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-brand-deep md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </motion.nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="absolute inset-x-3 top-[4.5rem] z-[50] rounded-3xl border border-brand-line/80 bg-white/90 p-3 shadow-float backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {LINKS.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold ${
                        active
                          ? "bg-brand-mist text-brand-deep"
                          : "text-brand-ink/70"
                      }`}
                    >
                      {link.label}
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <Link
              href="/contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-brand-deep px-4 py-3.5 text-base font-semibold text-white shadow-float"
            >
              Book a consult
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
