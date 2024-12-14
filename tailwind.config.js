/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "merriweather": "merriweather",
        "playfair-display": ["playfair-display"], 
      },
    },
  },
  plugins: [],
};
