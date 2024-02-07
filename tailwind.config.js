/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1920px",

      // sm: { max: "640px" },
      // md: { min: "641px", max: "768px" },
      // lg: { min: "769px", max: "1024px" },
      // xl: { min: "1025px", max: "1280px" },
      // "2xl": { min: "1281px" },
    },
    fontSize: {
      // Font Sizes and their respective Line Height
      ss: ["0.675rem", { lineHeight: "1.0" }],
      sm: ["0.875rem", { lineHeight: "1.1" }],
      base: ["1rem", { lineHeight: "1.2" }],
      lg: ["1.125rem", { lineHeight: "1.3" }],
      xl: ["1.25rem", { lineHeight: "1.4" }],
      "2xl": ["1.5rem", { lineHeight: "1.5" }],
      "3xl": ["1.875rem", { lineHeight: "1.5" }],
      "4xl": ["2.25rem", { lineHeight: "1.6" }],
      "5xl": ["3rem", { lineHeight: "1.6" }],
      "6xl": ["3.75rem", { lineHeight: "1.7" }],
      "7xl": ["4.5rem", { lineHeight: "1.7" }],
      "8xl": ["6rem", { lineHeight: "1.7" }],
      "9xl": ["8rem", { lineHeight: "1.8" }],
    },
    extend: {
      boxShadow: {
        shadow10: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        shadow28:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        shadow32:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        shadow33:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#9C1224",
        primary10: "#FCE4E7",
        primary20: "#F6B6BF",
        primary40: "#F18897",
        primary60: "#EC5A6E",
        primary80: "#E72C45",
        secondary: "#003049",
        secondary10: "#47C0FF",
        secondary20: "#14AFFF",
        secondary40: "#0094E0",
        secondary60: "#0072AD",
        secondary80: "#00507A",
        neutral: "#919191",
        neutral10: "#F9F9F9",
        neutral20: "#F4F4F4",
        neutral40: "#DEDEDE",
        neutral60: "#BDBDBD",
        error: "#f02c2c",
        warning: "#FFCA3C",
      },
    },
  },
  plugins: [],
};

