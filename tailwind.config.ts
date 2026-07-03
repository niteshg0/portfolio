import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        animation: {
          move: "move 5s linear infinite",
        },
        keyframes: {
          move: {
            "0%": { transform: "translateX(-200px)" },
            "100%": { transform: "translateX(200px)" },
          },
        },
        // Light Mode
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#6b7280",
        background: "#f9fafb",
        text_primary: "#111827",
        
        // Dark Mode
        dark_primary: "#ffffff",
        dark_secondary: "#000000",
        dark_accent: "#9ca3af",
        dark_background: "#0f172a",
        dark_text_primary: "#f1f5f9",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;