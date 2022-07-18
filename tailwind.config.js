module.exports = {
  mode:"jit",
  purge:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      }

    },
  },
  plugins: [],
}