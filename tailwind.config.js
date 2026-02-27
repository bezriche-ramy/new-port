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
      white: "#FFFFFF",
      black: "#000000",
      void: "#0A0A0F",
      slate: "#12121A",
      background: "#0A0A0F",
      secondary: "#12121A",
      muted: "#86868B",
      accent: "#2997FF",
      highlight: "#BF5AF2",
      glass: "rgba(255,255,255,0.04)",
      text: {
        primary: "#F5F5F7",
        secondary: "#86868B",
      },
      border: {
        glass: "rgba(255,255,255,0.08)",
      },
      "accent-1": "#2997FF",
      "accent-2": "#BF5AF2",
    },
    extend: {
      fontSize: {
        hero: ["clamp(3rem, 10vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        card: "0 8px 32px rgba(0,0,0,0.4)",
        elevated: "0 16px 50px rgba(0,0,0,0.5)",
        glass: "0 8px 32px rgba(0,0,0,0.4)",
        "glass-glow": "0 10px 45px rgba(41,151,255,0.15)",
      },
      backdropBlur: {
        glass: "40px",
      },
      borderRadius: {
        glass: "24px",
        pill: "9999px",
      },
      animation: {
        "float-y": "floatY 6s ease-in-out infinite",
        "gradient-flow": "gradientFlow 14s ease-in-out infinite alternate",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
    fontFamily: {
      body: ["Inter", "system-ui", "sans-serif"],
      heading: ["Manrope", "Inter", "system-ui", "sans-serif"],
      display: ["SF Pro Display", "Manrope", "Inter", "system-ui", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
};
