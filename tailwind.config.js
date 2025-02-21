/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      background: '#210D3E',      // Primary background
      secondary: '#1B1F3B',       // Secondary background
      accent: '#00FFFF',         // Neon Cyan
      violet: '#8A2BE2',         // Electric Violet
      pink: '#FF007F',           // Neon Pink
      success: '#00FF41',        // Matrix Green
      white: '#FFFFFF',
    },
    extend: {
      boxShadow: {
        accentShadow: "0px 0px 20px 0px rgba(0, 255, 255, 0.5)",
        accentBigShadow: "10px 10px 1000px 500px rgba(0, 255, 255, 0.3)",
        accentMediumShadow: "10px 10px 200px 150px rgba(0, 255, 255, 0.5)",
        violetBigShadow: "10px 10px 10000px 500px rgba(138, 43, 226, 0.3)",
        violetMediumShadow: "10px 10px 2000px 150px rgba(138, 43, 226, 0.5)",
      },
      animation: {
        'skill-loop': 'skill-loop 40s linear infinite',
      },
      keyframes: {
        'skill-loop': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
