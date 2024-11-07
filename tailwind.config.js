/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}", "./!node_modules"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Nunito"],
      },
    },
  },
  plugins: [],
}

