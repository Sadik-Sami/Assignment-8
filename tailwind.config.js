/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#01335b",

          "secondary": "#d38e04",

          "accent": "#9cf4cd",

          "neutral": "#272c35",

          "base-100": "#f6f6f9",

          "info": "#99aae6",

          "success": "#158470",

          "warning": "#e98c1c",

          "error": "#fc6993",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

