"use client";

// The cursor/pointer from the IQ logo — the brand's signature motif.
export function CursorMark({ className = "", size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* click sparks */}
      <path
        d="M13 3.5v3M9.2 4.8 10.8 7M16.8 4.8 15.2 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* pointer */}
      <path
        d="M11 9.2 20 13l-3.9 1.5-1.4 4.1L11 9.2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Section label — a single named brand device (not an eyebrow on every section;
// used deliberately where a section needs a spoken anchor).
export function Kicker({ children, className = "", tone = "cyan" }) {
  const dot =
    tone === "light" ? "bg-brand-cyan-bright" : "bg-gradient-to-r from-brand-cyan to-brand-blue";
  const text = tone === "light" ? "text-white/70" : "text-brand-blue";
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] ${text} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {children}
    </span>
  );
}
