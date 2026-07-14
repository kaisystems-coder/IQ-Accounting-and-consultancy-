/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Derived directly from the IQ logo gradient — not invented, not default Tailwind
        cyan: {
          DEFAULT: "#1FB6E8",
          bright: "#33C6F4",
        },
        brand: {
          cyan: "#1FB6E8",
          blue: "#1E6FB5",
          deep: "#0A2540", // deep navy-slate ink for dark sections
          ink: "#0C1826",
          paper: "#FBFCFD",
          mist: "#EDF3F8",
          line: "#DCE7F0",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      boxShadow: {
        // Layered, color-tinted shadows — never flat shadow-md
        card: "0 1px 2px rgba(10,37,64,0.04), 0 8px 24px -8px rgba(10,37,64,0.10)",
        float:
          "0 2px 4px rgba(10,37,64,0.05), 0 18px 40px -12px rgba(30,111,181,0.22)",
        glow: "0 10px 30px -6px rgba(31,182,232,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%,-3%,0) scale(1.06)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        bob: "bob 2.4s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};
