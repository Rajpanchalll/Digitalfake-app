/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        'navbar-background': '#662671',
        'side-background': '#F4F4F4',
       
      },
      colors: {
        'dark-color': '#5b5b5b', 
        'yellobackground-color': '#FFF8B7', 
      },
    },
  },
  plugins: [],
}