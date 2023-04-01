/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#250352",
          secondary: "#fcebc7",
          accent: "#85a506",
          neutral: "white",
          "base-100": "white",
          info: "#8AA8EA",
          success: "#127865",
          warning: "#B76D06",
          error: "#F22C67",
        },
      },
    ],
  },
};
