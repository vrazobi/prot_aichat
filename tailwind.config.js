/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0a1020',
        },
        hub: {
          bg: '#0F172A',
          'bg-deep': '#0a1020',
          surface: '#1a2438',
          'surface-2': '#243049',
          border: '#2d3a52',
          'border-light': '#3d4a63',
          primary: '#1E3A8A',
          'primary-bright': '#3b5bdb',
          'primary-light': '#4f6be7',
          accent: '#c9a227',
          'accent-light': '#e0bd4a',
          'accent-dim': '#8a7019',
          text: '#e8edf5',
          'text-muted': '#94a3b8',
          'text-dim': '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.35s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
