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
        primary: "#050505",
        elevated: "#0a0a0a",
        surface: "#111111",
      },
      text: {
        primary: "#e8e8e8",
        secondary: "#777777",
        tertiary: "#444444",
      },
      accent: "#c4ff00",
      border: {
        subtle: "rgba(255,255,255,0.06)",
        medium: "rgba(255,255,255,0.12)",
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
