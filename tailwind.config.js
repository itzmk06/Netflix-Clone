/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jose: ['"Handlee"'],
        jose1: ['"Julee"'],
        jose2: ['"Josefin Slab"'],
      },
    },
  },
  plugins: [],
}

