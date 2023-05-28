/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#999999",
        veryDarkGrey: "#454545",
      },
      fontFamily: {
        leagueSpartan: ['League Spartan'],
      },
      screens: {
        xs: "360px",
        desktop: "1220px"
      }
    },
  },
  plugins: [],
}

