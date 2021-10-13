import * as webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface WebpackConfig extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}

const config: WebpackConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
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

export default config;