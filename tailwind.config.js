/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#F3848A',
        yellow: '#FAE620',
        green: '#4CDE55',
        blue: {
          DEFAULT: '#0B88D9',
          dark: '#222236',
        },
        grey: '#1F1F1F',
      },
      fontFamily: {
        finlandica: ['Finlandica'],
      },
    },
  },
  plugins: [],
};
