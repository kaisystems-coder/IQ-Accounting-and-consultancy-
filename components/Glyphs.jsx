// Consistent 1.6-stroke line glyphs — one visual language across all services.
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ServiceGlyph({ id, size = 24 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", ...stroke };
  switch (id) {
    case "accounting-payroll":
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
          <path d="M3.5 9h17M7.5 13h4M7.5 16.5h6" />
          <circle cx="16" cy="14.5" r="1.6" />
        </svg>
      );
    case "taxation":
      return (
        <svg {...common}>
          <path d="M7 3.5h10l-1 17H8l-1-17Z" />
          <path d="M9.5 8h5M9.8 12h4.4M10.2 16h3.6" />
        </svg>
      );
    case "systems":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="11" rx="1.8" />
          <path d="M8 19.5h8M12 15.5v4M8 8.5l2 2-2 2M13 12.5h3" />
        </svg>
      );
    case "statements":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4v13H6V3.5Z" />
          <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
          <circle cx="12" cy="8.5" r="0" />
        </svg>
      );
    case "advisory":
      return (
        <svg {...common}>
          <path d="M4 18V9M9 18V5M14 18v-6M19 18V8" />
          <path d="M3 21h18" />
        </svg>
      );
    case "ecourses":
      return (
        <svg {...common}>
          <path d="M12 4 3 8l9 4 9-4-9-4Z" />
          <path d="M6.5 10v4.5c0 1.1 2.5 2.5 5.5 2.5s5.5-1.4 5.5-2.5V10M21 8v5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
