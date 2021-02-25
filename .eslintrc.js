process.chdir(__dirname);

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    codeFrame: false,
  },
  extends: ['airbnb-standard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/extensions': 'off',
    'no-console': 0,
    'prettier/prettier': ['error'],
    'singleQuote': true,
    'printWidth': 100,
    'quoteProps': 'preserve',
    'jsxSingleQuote': true,
  },
};
