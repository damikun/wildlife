module.exports = {
  mode:"jit",
  // purge:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }

    },
  },
  plugins: [],
}