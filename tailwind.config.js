module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: ['Roboto Mono', 'monospace'],
      alternate: ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        "fullPink": "hsla(313, 87, 59, 100%)",
        "mutedPink": "hsla(313, 87, 59, 68%)",
        "fullMint": "hsla(166, 83, 59, 100%)",
        "paleGreen": "hsla(112, 24, 83, 100%)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
