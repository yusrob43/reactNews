var webpack = require('webpack');

module.exports = {

  devtool: 'inline-source-map',
  
  entry: [
    'webpack-hot-middleware/client',
    "./app/App.js"
  ],

  output: {
    path: require('path').resolve('./public'),
    filename: "bundle.js",
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),    
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  }

}