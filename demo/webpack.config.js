const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
  path: path.resolve(__dirname, 'dist'),
  filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
  chunkFilename: isDev ? 'js/[name].chunk.js' : 'js/[name].[contenthash].chunk.js',
  clean: true,
  publicPath: '/'
},
  devtool: isDev ? 'eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: isDev ? 'development' : 'production',
            plugins: isDev ? [require.resolve('react-refresh/babel')] : []
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 8 * 1024 } },
        generator: { filename: 'assets/[hash][ext][query]' }
      },
      {
        test: /\.(woff2?|ttf|eot)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[hash][ext][query]' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: false
    }),
    new ForkTsCheckerWebpackPlugin(),
    ...(isDev ? [new ReactRefreshWebpackPlugin()] : [])
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all' }
  }
};
