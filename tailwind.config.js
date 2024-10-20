/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Red Hat Display", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('/images/bg-mobile.svg')",
        desktop: "url('/images/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
};
