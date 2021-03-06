const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    // Loaders: tell webpack to process some different files as we
    // start to import them in our project
    rules: [
      {
        // Process all files imported with extension mjs or js
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // -react: bable is going to process all jsx tags, -env: transform our code to ES6
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // Add additional code to enabie features like async await
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
}