/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#585CE5',
        'primary-violet': '#A1A3F6',
        'primary-turquoise': '#58C6CD',
        'primary-water': '#99D7DB',
        'primary-lilac': '#FAFAFF',
        'primary-lilac-dark': '#F0F1F9',
        'accent-peach': '#EEC1C1',
        'accent-blue': '#A6D0EE',
        'accent-alert': '#F59C9C',
        'accent-violet-light': '#D0D1FF',
        'accent-water-light': '#C9EBED',
        'accent-peach-light': '#F5DEDE',
        'accent-yellow-light': '#FBECC4',
        'accent-blue-light': '#CFEBFF',
        'deep-blue': '#0F2851',
        'light-gray': '#E5E6EE',
        'cold-gray': '#415371',
        'dark-gray': '#898D9E',
        'dust-gray': '#B0B2C3'
      },
      letterSpacing: {
        tight: '1.2%',
        tighter: '0.2%'
      },
      lineHeight: {
        1: '100%',
        2: '130%',
        3: '150%'
      }
    },
  },
  plugins: [],
}
