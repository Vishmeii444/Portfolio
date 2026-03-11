/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBEDC3',
        gold: '#CCB363',
        bronze: '#C27E35',
        rust: '#76290B',
        forest: '#1E3226',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'], // Perfect for the hopping character theme
      },
    },
  },
  plugins: [],
}