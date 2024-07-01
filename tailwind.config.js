/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#9B51E0",
        'text-color': "#393F48",
      }
    },
  },
  plugins: [],
}

