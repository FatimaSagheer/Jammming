/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Fatima: {
        950: "#010c3f",
        600: "#6c41ec",
        btn:'#010c3f',
        btnHover:'#7e22ce',
        playlistiv:'#3730a3'
      },
    },
    fontFamily: {
      'sans': ["Poppins", "sans-serif"],
    },
    // fontSize: {
    //   btnfontSize: '.833rem',
     
    // },
    // transitionProperty: {
    //   'background': 'height',
    // },
    extend: {},
  },
  plugins: [],
};
