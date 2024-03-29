/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Raleway, monospace" },
    extend: {
      height: { screen: "100dvh" },
      screens: {
        m: "520px",
      },
    },
  },
  plugins: [],
};
