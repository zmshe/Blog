const CracoLessPlugin = require("craco-less");
const path = require('path');

module.exports = {
  plugins: [
    { plugin: CracoLessPlugin },
  ],
  webpack: {
    alias: {
      '@src': path.join(__dirname, './src')
    }
  }
};