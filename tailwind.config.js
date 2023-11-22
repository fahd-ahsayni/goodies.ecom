/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red": {
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#ff9d9d",
          400: "#ff6464",
          500: "#ff2c2c",
          600: "#ed1515",
          700: "#c80d0d",
          800: "#a50f0f",
          900: "#881414",
          950: "#4b0404",
        },
      },
    },
  },
  plugins: [daisyui],
};
