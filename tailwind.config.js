/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F3848A",
        yellow: "#FAE620",
        green: "#4CDE55",
        blue: "#0B88D9",
        "dark-blue": "#222236",
        grey: "#1F1F1F",
      },
      fontFamily: {
        finlandica: ["Finlandica"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1300px",
        // => @media (min-width: 1300px) { ... }
      },
    },
  },
  important: true,
  plugins: [],
};
