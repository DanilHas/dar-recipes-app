/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        customGray: "#EFEFEF",
        customBlack: "rgba(0, 0, 0, 0.85)",
        blue: "#1890FF",
        lightGray: "#D9D9D9",
        customWhite: "rgba(255, 255, 255, 0.5)",
        opacityBlack: "rgba(0, 0, 0, 0.45)",
        gray94: "#F0F0F0",
        black25: "rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        roboto: ["Roboto", "Arial", "Helvetica", "sans-serif"],
      },
      screens: {
        tablet: { max: "1023px" },
        xlarge: { max: "1535px", min: "1024px" },
      },
      boxShadow: {
        customShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.02)",
        characteristicTitle: "inset 0px -1px 0px 0px rgb(240, 240, 240);",
      },
    },
  },
  plugins: [require("daisyui")],
};
