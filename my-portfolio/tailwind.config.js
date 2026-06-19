import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bone: 'rgb(var(--color-bone) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-light': 'rgb(var(--color-ink-light) / <alpha-value>)',
        ember: 'rgb(var(--color-ember) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'aurora': 'aurora 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(-5%, 5%) scale(1.05)' },
          '100%': { transform: 'translate(5%, -5%) scale(1)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'aurora': 'aurora 20s ease-in-out infinite alternate',
        'spin-slow': 'spin 25s linear infinite',
        'spin-slow-reverse': 'spin-reverse 25s linear infinite',
        'spin-slower': 'spin 35s linear infinite',
        'spin-slower-reverse': 'spin-reverse 35s linear infinite',
        'spin-slowest': 'spin 45s linear infinite',
        'spin-slowest-reverse': 'spin-reverse 45s linear infinite',
      },
    },
  },
  plugins: [],
}