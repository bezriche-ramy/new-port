/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",      // Adjusted for smaller phones
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      background: '#000000',      // Pure black background
      secondary: '#0C1714',       // Very dark green for secondary
      accent: '#00FF41',         // Matrix/Terminal Green
      highlight: '#11FF4E',      // Brighter matrix green
      muted: '#0D3622',          // Darker matrix green
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    extend: {
      fontSize: {
        'mobile-h1': ['2rem', '2.5rem'],     // Mobile headings
        'mobile-h2': ['1.75rem', '2.25rem'],
        'mobile-h3': ['1.5rem', '2rem'],
        'mobile-text': ['1rem', '1.5rem'],
      },
      boxShadow: {
        'matrix-glow': "0px 0px 20px 0px rgba(0, 255, 65, 0.5)",
        'matrix-pulse': "0px 0px 50px 25px rgba(0, 255, 65, 0.3)",
        'matrix-strong': "0px 0px 30px 10px rgba(0, 255, 65, 0.7)",
      },
      animation: {
        'matrix-pulse': 'matrix-pulse 2s ease-in-out infinite',
        'matrix-scan': 'matrix-scan 2s linear infinite',
        'matrix-glitch': 'matrix-glitch 0.5s ease-in-out infinite',
        'binary-rain': 'binary-rain 20s linear infinite',
        'skill-loop': 'skill-loop 40s linear infinite',
      },
      keyframes: {
        'matrix-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px 0px rgba(0, 255, 65, 0.5)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(0, 255, 65, 0.7)' },
        },
        'matrix-scan': {
          '0%': { backgroundPosition: '0% -100%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        'matrix-glitch': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '25%, 75%': { opacity: '0.9' },
        },
        'binary-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'skill-loop': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
    },
    fontFamily: {
      body: ["Share Tech Mono", "monospace"],
      special: ["Share Tech Mono", "monospace"],
      code: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
