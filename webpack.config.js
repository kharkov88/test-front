const webpack = require('webpack');
const path = require('path');
require('dotenv/config');

const jsName = process.env.NODE_ENV === 'production' ? 'bundle.js' : 'bundle.js';
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      API_URL_PRODUCTION: JSON.stringify(process.env.API_URL_PRODUCTION),
      API_URL_LOCAL: JSON.stringify(process.env.API_URL_LOCAL)
    }
  })
];

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  plugins,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: jsName,
    library: 'myApp'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    headers: {'Access-Control-Allow-Origin': '*'}
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-stage-3']
          }
        }
      }
    ]
  }
};
