/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgOne: "#4C4B16",
        bgTwo: "#3C552D",
        bgThree: "#4C4B16",
        bgFour: "#000B58",
      },
      fontFamily: {
        advanceToDo: ["Roboto"],
      },
    },
  },
  plugins: [],
};
