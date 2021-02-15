module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: { 'max': '639px' },
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    fontFamily: {
      main: ['Roboto Mono', 'monospace'],
      alternate: ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        fullPink: 'hsla(313, 87%, 59%, 1)',
        mutedPink: 'hsla(313, 87%, 59%, 0.68)',
        fullMint: 'hsla(166, 83%, 59%, 1)',
        paleGreen: 'hsla(112, 24%, 83%, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
