const config = require('@studiometa/tailwind-config');

module.exports = {
  mode: 'jit',
  presets: [config],
  theme: {
    debugOutline: true,
  },
  purge: {
    content: ['**/*.md', '.vuepress/**/*.vue'],
  },
};
