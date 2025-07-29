/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        custom: ["MyCustomFont", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        cursive:["Pacifico", "serif"]

      },
      colors:{
        primary:"#BE9D7B",
        secondary:"#4a1e1b",
        brandDark:"#270c03"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem"
        }
      }
    },
  },
  plugins: [],
}

