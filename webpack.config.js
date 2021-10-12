const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mode = process.env.NODE_ENV || "development"

module.exports = {
  mode,
  entry: { main: path.resolve('src', 'index.tsx') },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  stats: 'errors-only',
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
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
