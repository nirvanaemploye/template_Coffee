/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        cursive: ["Pacifico", "serif"],
      },
      colors: {
        primary: "#BE9D7B",
        secondary: "#4a1e1b",
        brandDark: "#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // default padding
          "4k": "0rem", // no padding on 4K
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "4k": "2560px", // custom breakpoint for 4K
        },
      },
    },
  },
  plugins: [],
};
