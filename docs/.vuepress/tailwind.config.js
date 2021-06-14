const config = require('../../src/index.js');
module.exports = {
  presets: [
    config
  ],
  theme: {
    debugOutline: true,
    colors: {
      grey: {
        '200': '#eee',
        '600': '#999',
      },
      white: {
        default: '#fff'
      }
    }
  },
  purge: {
    content: ['**/*.md'],
  },
  mode: 'jit',
}

config.theme.debugOutline = true;
config.theme.colors.grey = {
  '200': '#eee',
  '600': '#999',
}
config.theme.colors.white = '#fff';

module.exports = config;
