/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '690px',
      },
      colors:{
        'title-color': 'rgb(53, 52, 53)',
        'content-color': 'rgb(97, 87, 83)'
      },
    },

  },
  plugins: [],
}
