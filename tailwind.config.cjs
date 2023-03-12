// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Golos Text', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

module.exports = config
