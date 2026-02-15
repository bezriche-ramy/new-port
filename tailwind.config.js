/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': { 'max': '400px' },
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Dark Mode Premium Palette
      void: '#0B0B0C',           // Deep Void Black
      slate: '#14141F',          // Slate Blue
      neon: '#00F0FF',           // Neon Cyan
      electric: '#7000FF',       // Electric Purple
      glass: 'rgba(255,255,255,0.05)', // Glass border

      background: '#0B0B0C',     // Default dark
      secondary: '#14141F',
      accent: '#00F0FF',         // Neon Cyan
      highlight: '#7000FF',      // Electric Purple
      muted: 'rgba(255,255,255,0.6)',
      white: '#FFFFFF',
      black: '#0B0B0C',

      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        950: '#0B0B0C',
      },
      blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      },
      transparent: 'transparent',
    },
    extend: {
      fontSize: {
        'mobile-h1': ['2rem', '2.5rem'],
        'mobile-h2': ['1.75rem', '2.25rem'],
        'mobile-h3': ['1.5rem', '2rem'],
        'mobile-text': ['1rem', '1.5rem'],
        // Award-winning hero sizes
        'hero': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'professional': "0px 4px 12px 0px rgba(0, 0, 0, 0.1)",
        'card': "0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
        'elevated': "0px 10px 25px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(112, 0, 255, 0.5), 0 0 40px rgba(112, 0, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 240, 255, 0.1)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slideUp': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounceGentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
    fontFamily: {
      body: ["Inter", "system-ui", "sans-serif"],
      heading: ["Inter", "system-ui", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
};
