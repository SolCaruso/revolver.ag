/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        rvr: "linear-gradient(to right, rgba(255, 73, 77, 1), rgba(255, 111, 110, 1))",
      }),
      fontSmoothing: ["antialiased"],
      textTransform: {
        initial: "initial",
      },
      letterSpacing: {
        initial: "initial",
      },
      colors: {
        "sldr-green": "#A9BBA8",
        "sldr-2nd-green": "#92A591",
        "rarity-purple": "#9867EF",
        "rarity-black": "#333832",
        "rvr-red": "#FF5457",
        "rvr-2": "#FF5457",
        "rvr-bright": "#F53838",
        "rvr-hover": "#ff0101",
        "rvr-hover-2": "#FF6A69",
        "rvr-hover-3": "#FFBABA",
        "rvr-bg": "rgb(255, 71, 76, 0.25)",
        "rvr-box": "#FF6E6D",
        "rvr-grey": "#828282",
        "rvr-full-bg": "#F8F8F8",
        "nav-grey": "rgba(0, 0, 0, 0.05)",
        "nav-grey-hover": "rgba(0, 0, 0, 0.10)",
        "nav-red": "rgba(192, 53, 64, 1)",
      },
      fontSize: {
        "2.5": "2.5rem",
        "3": "3rem",
        "4": "4rem",
        "5.5": "5.5rem",
        "2xs": ".65rem",
        "3xs": ".55rem",
        "4xs": ".45rem",
        "5xs": ".35rem",
        "6xs": ".25rem",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "San Francisco",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      screens: {
        "xs": "440px",
        "2xs": "340px",
        "nav": "850px",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      padding: {
        '30': '7.5rem',
      },
      width: {
        '22': '5.5rem',
      },
      height: {
        '22': '5.5rem',
      },
    },
  },
};
