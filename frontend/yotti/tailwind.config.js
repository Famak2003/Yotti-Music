/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        // gray: colors.trueGray,
        gray: {
          900: "#000000",
          850: "#0d0d0d",
          800: "#1a1a1a",
          750: "#262626",
          700: "#333333",
          650: "#404040",
          600: "#4d4d4d",
          550: "#666666",
          500: "#808080",
          450: "#999999",
          400: "#b3b3b3",
          350: "#cccccc",
          300: "#e6e6e6",
          250: "#f2f2f5",
          200: "#ffffff",
        },
      },
      theme: {
        sreens: {
          tablet: "640px",
          // => @media (min-width: 640px) {...}

          laptop: "1024px",
          // => @media (min-width: 1024px) {...}

          desktop: "1280px",
          // => @media (min-width: 1280px) {...}
        },
      },
    },
  },
  plugins: [],
};
