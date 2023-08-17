/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: { "2xl": "1600px" },
    },
    extend: {
      colors: {
        primary: { 500: "#3E454B", DEFAULT: "#3E454B", 700: "#2c3339" },
        accentYellow: {
          100: "#FBBC0510",
          300: "#FBBC0580",
          500: "#FBBC05",
          DEFAULT: "#FBBC05",
          600: "#ffc622",
        },
        accentGray: {
          30: "#F8F8F8",
          40: "#F9F9F9",
          50: "#F6F6F6",
          60: "#212121",
          100: "#A6A6A6",
          150: "#D5D5D5",
          200: "#5E5E5E",
          300: "#8A8A8A",
          400: "#eeeeee",
          500: "#f3f3f3",
          600: "rgba(134, 145, 168, 0.20)",
          700: "#9B9B9B",
          800: "#545454",
          900: "#D0CDC2",
          910: "#8691A8",
          950: "#D5D5D5",
        },
        accentBlue: {
          300: "#3B4CDD",
          400: "#0075FF",
          500: "#0038ff",
        },
        accentRed: {
          400: "#F58960",
        },
        accentGreen: {
          500: "#3AB549",
          600: "#66C600",
        },
      },
    },
  },
  plugins: [],
};
