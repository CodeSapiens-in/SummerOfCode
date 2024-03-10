import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";
import colors from "tailwindcss/colors";

function flattenColorPalette(colors) {
  return Object.keys(colors).reduce((palette, color) => {
    if (typeof colors[color] === 'object') {
      return {
        ...palette,
        ...flattenColorPalette(colors[color], color + '-')
      };
    }

    return {
      ...palette,
      [color]: colors[color]
    };
  }, {});
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  console.log(allColors)
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend: ...
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        // matchUtilities: ...
      );
    },
  ],
  darkMode: "dark",
};
