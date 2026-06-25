import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        paper: "#ffffff",
        line: "#e6e8ec",
        "brand-blue": "#1769ff",
        "brand-cyan": "#05a8aa",
        "brand-green": "#16a34a",
        "brand-gold": "#d97706"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(10, 10, 11, 0.08)"
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
