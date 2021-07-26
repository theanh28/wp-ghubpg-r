const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  devServer: {
    port,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node-modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node-modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node-modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
