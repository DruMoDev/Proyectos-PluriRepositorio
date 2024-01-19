/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-custom":
          "linear-gradient(to right, #5c37e5, #b09df8, #d7cefd, #ffffff)",
      },
      colors: {
        primary: "#5c37e5",
        secondary: "#adadad",
        tertiary: "#0B0B0B",
        quaternary: "#0f0f0f",
        quinary: "#15151D", //Color del Navbar
      },
      container: {
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
