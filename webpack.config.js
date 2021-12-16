const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';

  if (typeof process.env.PUBLIC_URL === 'undefined') {
    process.env.PUBLIC_URL = 'public'
  }

  return {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
          },
          use: 'ts-loader',
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[hash:base64:5]',
                },
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff2?|otf)$/,
          use: 'file-loader',
        },
        {
          test: /\.(json)$/,
          type: 'javascript/auto',
          include: path.resolve(__dirname, 'config'),
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ]
    },
    devtool: prod ? undefined : 'source-map',
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        favicon: path.join(__dirname, 'public', 'favicon.ico'),
        manifest: path.join(__dirname, 'public', 'manifest.json'),
      }),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: process.env.PUBLIC_URL,
      }),
      new webpack.EnvironmentPlugin(process.env),
    ],
  };
};