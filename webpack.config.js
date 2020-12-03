const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
}) 

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),

  devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      port: 8080
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: ''
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  
  plugins: [HtmlWebpackPluginConfig]

};
