module.exports = {
  mode: "JIT",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      open: [ 'Open Sans', 'sans-serif'],
      raleway: ['Raleway'],
    },
    extend: {
      spacing: {
        '128': '540px',
      },
    },
  },
  plugins: [],
}
