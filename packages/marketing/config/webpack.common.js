// We can have multiple webpack.env.js file to configure every env. This is the common webpack file
// that will be merged with the others depending on the environment that we are running on package.json scripts
module.exports = {
  module: {
    rules: [
      {
        // Process all files imported with extension mjs or js
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          // Loaders: tell webpack to process some different files as we
          // start to import them in our project
          loader: 'babel-loader',
          options: {
            // preset-react: bable is going to process all jsx tags, preset-env: transform our code to ES5
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // Add additional code to enable features such as async await
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      }
    ]
  }
}