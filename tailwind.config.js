/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        neutralGrey: "#717171",
        brandPrimary: "#28CB8B",
        gray900: "#18191F",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
