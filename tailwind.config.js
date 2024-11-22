/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#fffff",
        secondary: "#242424",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
      },
    },
  },
  plugins: [],
}

