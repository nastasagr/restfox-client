/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            primary:"#006aff",
            secondary:"#000000",
            danger:"#CF1B1B",
            success:"#3CDEA0",
            error:"#EB4654"
        }
    },
  },
  plugins: [],
}