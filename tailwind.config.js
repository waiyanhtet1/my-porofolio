/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0d1117",
      secondary: "#4078c0",
      tertiary: "#6cc644",
      graylight: "#25292e",
      gray: "#f5f5f5",
      whitesmoke: "#999",
      red: "#c9510c",
      white: "#fff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
