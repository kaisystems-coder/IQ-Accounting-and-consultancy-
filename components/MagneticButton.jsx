"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

/**
 * Primary/secondary CTA with a subtle magnetic pull toward the cursor.
 * Uses motion values (no React state) so continuous tracking never re-renders.
 */
export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 15, mass: 0.4 });
  const y = useSpring(my, { stiffness: 180, damping: 15, mass: 0.4 });
  const arrowX = useTransform(x, (v) => v * 0.5);

  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    my.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-300 focus-visible:outline-2";
  const sizes = "px-7 py-3.5 text-[0.95rem]";
  const variants = {
    primary:
      "text-white bg-brand-deep shadow-float hover:shadow-glow active:translate-y-px",
    // ghost is designed for dark backgrounds (hero): glass outline, clearly interactive
    ghost:
      "text-white bg-white/5 border border-white/25 hover:border-brand-cyan-bright hover:bg-white/10 hover:text-brand-cyan-bright backdrop-blur-sm active:translate-y-px",
    // ghost-light is for light backgrounds
    "ghost-light":
      "text-brand-deep bg-white/70 border border-brand-line hover:border-brand-cyan hover:text-brand-blue backdrop-blur-sm active:translate-y-px",
    light:
      "text-brand-deep bg-white shadow-float hover:shadow-glow active:translate-y-px",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={reduced ? undefined : { x, y }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`${base} ${sizes} ${variants[variant]} ${className}`}
        {...props}
      >
        {/* animated cyan sheen for primary */}
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/30 to-brand-blue/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
        )}
        <span className="relative z-10">{children}</span>
        <motion.span
          aria-hidden
          style={reduced ? undefined : { x: arrowX }}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="translate-y-px"
          >
            <path
              d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </Link>
    </motion.div>
  );
}
