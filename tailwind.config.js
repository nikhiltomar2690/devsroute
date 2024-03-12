/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  // darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
