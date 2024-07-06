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
      editBg: '#F9F8FE',
      inputFieldBg: '#F0F1F3',
      fontColor: '#1A242C',
      borderColor: '#D9D9D9',      
      buttonBgColor: '#F15F1D',      
    },   
  },
  },
  plugins: [],
}

