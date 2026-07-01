import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  safelist: [
    {
      pattern: /from-(navy-700|navy-800|navy-900|brand|brand-dark)/,
    },
    {
      pattern: /via-(navy-700|navy-800|navy-900|brand|brand-dark)/,
    },
    {
      pattern: /to-(navy-700|navy-800|navy-900|brand|brand-dark)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1eb",
        paper2: "#ede9e1",
        ink: "#0a0a0a",
        muted: "#6b6560",
        brand: {
          DEFAULT: "#c8102e",
          dark: "#8b0d1f",
        },
        navy: {
          900: "#0f3460",
          800: "#16213e",
          700: "#1a1a2e",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        blink: "blink 1.2s infinite",
        ticker: "ticker 24s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
