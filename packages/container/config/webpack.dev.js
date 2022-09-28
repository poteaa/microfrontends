const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',  // not used when we are creating a host module but is added as a convention
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js', // the marketing string before the @ has to be identical
                                                                    // to the name in the "name" of the marketing MF plugin
        auth: 'auth@http://localhost:8082/remoteEntry.js'                                                            
      },
      shared: packageJson.dependencies,
    }),
  ]
}

module.exports = merge(commonConfig, devConfig);