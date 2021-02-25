const path = require('path');

const entryPoint = path.join(__dirname, './client/src/index.jsx');
const exitPoint = path.join(__dirname, './client/dist');

module.exports = {
  mode: 'development',
  entry: entryPoint,
  output: {
    filename: 'bundle.js',
    path: exitPoint
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
