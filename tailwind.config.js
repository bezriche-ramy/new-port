/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: { max: "400px" },
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      bg: {
        primary: "rgb(var(--bg-primary-rgb) / <alpha-value>)",
        elevated: "rgb(var(--bg-elevated-rgb) / <alpha-value>)",
        surface: "rgb(var(--bg-surface-rgb) / <alpha-value>)",
      },
      text: {
        primary: "rgb(var(--text-primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary-rgb) / <alpha-value>)",
        tertiary: "rgb(var(--text-tertiary-rgb) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
        dim: "var(--accent-dim)",
        glow: "var(--accent-glow)",
      },
      border: {
        subtle: "rgb(var(--border-subtle-rgb) / <alpha-value>)",
        medium: "rgb(var(--border-medium-rgb) / <alpha-value>)",
      },
    },
    extend: {
      fontSize: {
        hero: [
          "clamp(3.5rem, 12vw, 10rem)",
          { lineHeight: "0.88", letterSpacing: "-0.04em" },
        ],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        "float-y": "floatY 6s ease-in-out infinite",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
    fontFamily: {
      body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      display: [
        "Space Grotesk",
        "Inter",
        "system-ui",
        "-apple-system",
        "sans-serif",
      ],
      code: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
};
