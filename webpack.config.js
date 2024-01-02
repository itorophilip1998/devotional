const path = require('path');

module.exports = {
  // ... other webpack configurations

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '@': path.resolve(__dirname, '/'),
    },
     extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
