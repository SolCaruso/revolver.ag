/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"
],
  theme: {
    extend: {
      boxShadow: {
        'rvr-shadow': ' 0px 4px 6px .5px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: (theme) => ({
        rvr: "linear-gradient(to right, rgba(255, 73, 77, 1), rgba(255, 111, 110, 1))",
        rvrbttn: "linear-gradient(to right, rgba(265, 83, 87, 1), rgba(265, 121, 120, 1))",
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
        "sldr-red": "#ac235c",
        "sldr-2nd-red": "#cb5586",
        "sldr-blue": "#6f92f0",
        "sldr-2nd-blue": "#6280d1",
        "sldr-purple": "#ae8dfe",
        "sldr-2nd-purple": "#9a77ef",
        "rarity-yellow": "#fbb133",
        "rarity-purple": "#8a56d3",
        "rarity-blue": "#049cc6",
        "rarity-green": "#339b6d",
        "rarity-red": "#ff2e70",
        "rarity-black": "#333832",
        "rvr-red": "#FF5457",
        "rvr-stroke": "#FF474C",
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
        "grey-circle": "rgba(206, 206, 206, 0.25)",
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
        "wild": "1540px",
        "3xl": "2000px",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      padding: {
        '30': '7.5rem',
        '1.2': '0.3125rem',
      },
      width: {
        '22': '5.5rem',
        '5.5': '1.375rem',
      },
      height: {
        '22': '5.5rem',
        '33': '2.0625rem',
      },
    },
  },
};
