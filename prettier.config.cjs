/** @type {import("prettier").Config} */
const config = {
  semi: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  singleQuote: true,
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}

module.exports = config
