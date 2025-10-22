/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // for Vite
    "./src/**/*.{js,ts,jsx,tsx}", // for React / Next
  ],
  theme: {
    extend: {
      colors: {
        brand: "#f0b90a", // your primary color
        dark: "#181a21",  // your secondary color
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
