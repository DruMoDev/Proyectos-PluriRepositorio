const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      wattle: {
        '50': '#fcfbee',
        '100': '#f6f5cf',
        '200': '#edea9a',
        '300': '#e3dc66',
        '400': '#dbca39',
        '500': '#d4b32c',
        '600': '#bb8f24',
        '700': '#9c6b21',
        '800': '#7f5521',
        '900': '#69461e',
        '950': '#3c250c',
      },
    },
  },
  },
  plugins: [],
});