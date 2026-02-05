/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': { 'max': '400px' },  // Added specific breakpoint for iPhone SE and similar small devices
      sm: "320px",      // Adjusted for smaller phones
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      background: '#FFFFFF',      // Clean white background
      secondary: '#F8FAFC',       // Light gray for sections
      accent: '#2563EB',         // Professional blue
      highlight: '#1D4ED8',      // Darker blue for highlights
      muted: '#64748B',          // Subtle gray text
      white: '#FFFFFF',
      black: '#1E293B',          // Dark blue-gray instead of pure black
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
        'mobile-h1': ['2rem', '2.5rem'],     // Mobile headings
        'mobile-h2': ['1.75rem', '2.25rem'],
        'mobile-h3': ['1.5rem', '2rem'],
        'mobile-text': ['1rem', '1.5rem'],
      },
      boxShadow: {
        'professional': "0px 4px 12px 0px rgba(0, 0, 0, 0.1)",
        'card': "0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
        'elevated': "0px 10px 25px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
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
