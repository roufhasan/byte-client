/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        blueGray: "#1a2232",
        charcoalGray: "#1e1f26",
        darkBlue: "#0c1525",
        green: "#7af48f",
        red: "#bd3a33",
      },
    },
  },
  plugins: [],
};
