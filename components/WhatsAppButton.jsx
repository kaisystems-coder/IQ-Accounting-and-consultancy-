"use client";

import { motion } from "framer-motion";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";

// Prefilled WhatsApp chat to IQ's number: (868) 302-3361
const WA_HREF =
  "https://wa.me/18683023361?text=" +
  encodeURIComponent(
    "Hi IQ Accounting, I'd like to ask about your services."
  );

export default function WhatsAppButton() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IQ Accounting on WhatsApp"
      initial={reduced ? false : { opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: reduced ? 0 : 1.2 }}
      whileHover={reduced ? undefined : { scale: 1.06 }}
      whileTap={reduced ? undefined : { scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float outline-none transition-shadow duration-300 hover:shadow-glow focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-brand-paper sm:bottom-7 sm:right-7 sm:h-[3.75rem] sm:w-[3.75rem]"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="relative"
      >
        <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        <path d="M12.05 2.5a9.44 9.44 0 0 0-8.06 14.4L2.5 21.5l4.72-1.46A9.44 9.44 0 1 0 12.05 2.5Zm0 17.06a7.6 7.6 0 0 1-3.87-1.06l-.28-.16-2.8.86.85-2.73-.18-.29a7.62 7.62 0 1 1 6.28 3.38Z" />
      </svg>
    </motion.a>
  );
}
