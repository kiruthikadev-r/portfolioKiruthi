/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          950: "#09090b",
          900: "#0d0d10",
          850: "#121216",
          800: "#17171c",
          700: "#222228",
          600: "#2e2e36",
          500: "#4a4a54",
          400: "#6b6b76",
          300: "#95959e",
          200: "#c4c4ca",
          100: "#e8e8ea",
        },
        lime: {
          400: "#c6ff3e",
          500: "#b4ef2a",
          600: "#9cd91f",
        },
        violet: {
          400: "#9b8cf5",
          500: "#8471ee",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(198,255,62,0.15), 0 0 40px -8px rgba(198,255,62,0.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
