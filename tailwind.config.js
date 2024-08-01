/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
        'black-ops': ['Black Ops One', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

