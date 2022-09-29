/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkgreen:"#116936",
        lightgreen:"#a8ce3a"
      },
      fontFamily:{
        cormorant : ["Cormorant Garamond","serif"],
      },
    },
  },
  plugins: [],
}