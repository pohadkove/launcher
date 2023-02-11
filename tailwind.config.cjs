/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ["lofi"],
  },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")]
};