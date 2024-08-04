/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1E40AF',
        secondary: '#FDE047'
      },
      fontFamily:{
        Poppins: "Poppins, sans-serif",
        Koulen: "Koulen, sans-serif",
        Logo: "Caesar Dressing, sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}
