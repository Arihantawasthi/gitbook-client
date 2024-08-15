/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#18a0fb",
        "primary-2": "#4fb7fc",
        "primary-3": "#7ecbff",
        error: "#fe0000",
        background: "#1d1d1d",
        surface: "#272727",
        "on-background": "#f8f8f8",
        "on-surface": "#ffffff"
      }
    },
  },
  plugins: [],
}

