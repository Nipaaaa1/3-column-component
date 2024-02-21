/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          brightOrange: "hsl(31, 77%, 52%)",
          darkCyan: "hsl(184, 100%, 22%)",
          veryDarkCyan: "hsl(179, 100%, 13%)",
        },
        neutral: {
          veryLightGray: "hsl(0, 0%, 95%)",
        },
      },
      fontFamily: {
        lexendDeca: ["Lexend Deca", "sans-serif"],
        bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
