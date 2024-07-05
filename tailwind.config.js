/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {

      roboto : 'roboto',
      poppins : 'poppins',
      cooperLtBt  : 'cooper lt bt ',
    },
    extend: {
      colors: {
      blueColor: '#5046E5',
      hoverBg: '#F4F2FD',
      fontColor: '#1A242C',
      borderColor: '#D9D9D9',      
    },   
  },
  },
  plugins: [],
}

