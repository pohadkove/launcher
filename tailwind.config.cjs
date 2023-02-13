/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")]
};