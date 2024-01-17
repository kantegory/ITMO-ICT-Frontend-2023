/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  layers: {
    // Add a @layer directive for dark mode here
    dark: ['responsive', 'hover', 'focus', 'dark'],
  },
}

