module.exports = {
  entry: './js/development/index.js',
  output: {
    path: __dirname,
    filename: './js/deploy/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
