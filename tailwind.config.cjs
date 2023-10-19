/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    ...defaultTheme,
    extend: {
      colors: {
        primary: "rgb(0, 177, 223)",
        secondary: "rgb(87,87,87)",
        openampred: "rgb(220, 74, 74)",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
    fontFamily: {
      sans: ["Lato", "system-ui", ...defaultTheme.fontFamily.sans],
    },
    transitionProperty: {
      maxHeight: "max-height",
      spacing: "margin, padding",
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
