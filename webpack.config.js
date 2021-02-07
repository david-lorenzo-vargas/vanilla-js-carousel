const path = require('path');

module.exports = ({ NODE_ENV }) => ({
  mode: NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]--[hash:base64:5]',
                sourceMap: true,
                minimize: true
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/dist/',
    historyApiFallback: true,
    open: true,
  },
});
