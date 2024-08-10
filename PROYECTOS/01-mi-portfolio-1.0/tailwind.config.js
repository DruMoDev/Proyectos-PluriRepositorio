/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#8758FF",
      secondary: "#5CB8E4",
      dark: "#181818",
      dru_white: "#F2F2F2",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/me.png')",
      },
    },
  },
  plugins: [],
};
