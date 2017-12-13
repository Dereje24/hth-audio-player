const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hthplayer.bundle.js',
    publicPath: 'http://localhost:8080/dist/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {}
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true
  }
};