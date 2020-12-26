module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    
    extend: {
      colors: {
        turquoise: '#1BEBF8',
        starship: '#F0EE51',
        lavender: '#D359E3',
        fourth: '#FABB55',
        fifth: '#51F058',
        blue: '#4100f5'
      },
      fill: theme => theme('colors'),
    },
  },
  variants: {},
  plugins: [],
}
