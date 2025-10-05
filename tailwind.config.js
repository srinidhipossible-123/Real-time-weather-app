/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // You can skip this if using automatic detection, but you may still specify if needed
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // your customizations here
    },
  },
  plugins: [
    // e.g. require forms, typography, etc.
  ],
}
