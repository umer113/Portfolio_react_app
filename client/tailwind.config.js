/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    mode:'jit'
  ,
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        signature:["Great Vibes"]
      },
    },
  },
  plugins: [],
}

