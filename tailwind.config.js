/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#007EC8",
        "purple-blue": "#1D0B56",
        purple: "#C8B7FB",
      },
      fontFamily: {
        mono: "'Monomaniac One', sans-serif",
      },
    },
  },
  plugins: [],
};
