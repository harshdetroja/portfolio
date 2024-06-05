/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif'],
      },
      colors: {
        primary: "#8b8a91",
        primaryBg: "#1c1b23",
        bodyBg: "#14131a",
      },
      screens: {
        xs: "425px",
      },
      backgroundImage: {
        "profile-bg": "url('/src/assets/profileBg.jpg')",
      },
    },
  },
  plugins: [],
};
