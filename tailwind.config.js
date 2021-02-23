module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    screens: {
      mobile: '411px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    fontFamily: {
      main: ['Roboto Mono', 'monospace'],
      alternate: ['Quicksand', 'sans-serif'],
      logo: ['Kanit', 'sans serif']
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '5/6': '83.333%',
      'full': '100%',
    },
    extend: {
      colors: {
        fullPink: 'hsla(313, 87%, 59%, 1)',
        mutedPink: 'hsla(313, 87%, 59%, 0.68)',
        fadedPink: 'hsla(313, 87%, 59%, 0.20)',
        fullMint: 'hsla(166, 83%, 59%, 1)',
        paleGreen: 'hsla(112, 24%, 83%, 1)',
        highYellow: 'hsla(61,85%,75%, 1)',
        darkerGrey: 'hsla(221, 40%, 7%, 1)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}