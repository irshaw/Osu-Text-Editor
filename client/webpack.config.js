const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Dev.to Posts',
        template: './index.html',
      }),
      new InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'sw.js',
        exclude: [/\.map$/, /asset-manifest\.json$/],
      }),
    ],
    module: {
      rules: [
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        },
      ],
    },
        output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist'),
          clean: true,
        },
    }
  };
