const path = require('path');
const webpack = require('webpack');
const packages = require('../package.json');

const dependencies = Object.keys(packages.dependencies);

const nonJsDeps = {
};
const vendorDeps = [];
for (var i = 0; i < dependencies.length; i++) {
  if (!nonJsDeps[dependencies[i]]) {
    vendorDeps.push(dependencies[i]);
  }
}
module.exports = {
  // output as library
  output: {
    filename: '[name].js',
    library: '[name]_lib',
    path: path.join(__dirname, '../dist/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  entry: {
    vendorLib: [
      // 'autoprefixer',
//       'babel-runtime',
      'classnames',
//      'express',
      'lodash',
      'raven-js',
      'react-hot-loader',
      'react',
      'react-dom',
      'redux',
      'redux-logger',
      'redux-promise',
      'react-redux',
      'react-router',
      'react-router-redux',
      'reselect'
    ]
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dist/[name]-manifest.json'),
      name: '[name]_lib'
    })
  ]

};
