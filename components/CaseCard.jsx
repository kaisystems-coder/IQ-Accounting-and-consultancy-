"use client";

// Case card doubles as the "gallery" tile — visual weight comes from the metric,
// not a stock photo. Two tones alternate for rhythm.
export default function CaseCard({ c, onClick }) {
  const deep = c.tone === "deep";
  const Wrapper = onClick ? "button" : "div";
  return (
    <Wrapper
      onClick={onClick}
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border p-7 text-left shadow-card transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:shadow-float ${
        deep
          ? "border-white/10 bg-brand-deep text-white hover:border-brand-cyan/40"
          : "border-brand-line bg-white text-brand-deep hover:border-brand-cyan/50"
      }`}
    >
      {/* ambient accent */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 ${
          deep ? "bg-brand-cyan/25" : "bg-brand-cyan/10 group-hover:bg-brand-cyan/20"
        }`}
      />
      <div className="relative flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] ${
            deep
              ? "bg-white/10 text-brand-cyan-bright"
              : "bg-brand-mist text-brand-blue"
          }`}
        >
          {c.cat}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
            deep ? "text-brand-cyan-bright" : "text-brand-blue"
          }`}
        >
          <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative mt-8">
        <p className="font-display text-[2.6rem] font-semibold leading-none tracking-tightest">
          {c.metric}
        </p>
        <p
          className={`mt-1.5 text-[0.85rem] ${
            deep ? "text-white/55" : "text-brand-ink/50"
          }`}
        >
          {c.metricLabel}
        </p>
      </div>

      <h3 className="relative mt-6 font-display text-[1.25rem] font-semibold leading-tight">
        {c.title}
      </h3>
      <p
        className={`relative mt-3 flex-1 text-[0.93rem] leading-relaxed ${
          deep ? "text-white/60" : "text-brand-ink/60"
        }`}
      >
        {c.body}
      </p>
    </Wrapper>
  );
}
