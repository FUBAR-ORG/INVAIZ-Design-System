const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mode = process.env.NODE_ENV || "development"

module.exports = {
  mode,
  entry: {
    app: './src'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  devServer: {
    port: 8080,
    open: true,
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : ''
      },
      minify: process.env.NODE_ENV === 'production' ? {
        collapseWhitespace: true,
        removeComments: true
      } : false,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
};
