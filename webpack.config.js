const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry:  "./index.js", // Your main entry file
    output: {
      filename: 'bundle.js', // Output filename
      path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'production', // Set to 'production' for minification
    target: ['web', 'browserslist:> 0.25%, not dead'], // Specify target browsers
  };