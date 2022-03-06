const path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'index.js',
  },
  target: ['web', 'es5'],
};
