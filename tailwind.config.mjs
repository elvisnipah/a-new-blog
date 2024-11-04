/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      excalifont: ["Excalifont", "sans-serif"],
    },
    extend: {
      colors: {
        "white-smoke": "#EFF1ED",
        flame: "#E4572E",
        "raisin-black": "#2E282A",
        "yellow-green": "#8ac926",
        "steel-blue": "#1982C4",
        "crayola-blue": "#3777ff",
        "persian-rose": "#ff36ab",
        "dark-cyan": "#0f8b8d",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
