/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#FDE047",
        birumuda: "#5979E1",
        amenities: "#AEE2FF",
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif",
        Koulen: "Koulen, sans-serif",
        Logo: "Caesar Dressing, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "synthwave"],
  },
  darkMode: "class",
};
