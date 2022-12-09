/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors : {
        'roxo' : '#5603ad',
        'roxinho' : '#7061EE',
        'amarelo' : '#fcf300',
        'amarelinho' : '#FBF45D',
        'roxinho-escuro' : '#10002b',
        'vermilhin-brabo' : '#ff002b',
      },

      fontFamily : {
        'syncopate' : ['Syncopate'],
      }
    },
  },
  plugins: [],
}
