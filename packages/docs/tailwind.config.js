const config = require('@studiometa/tailwind-config');

module.exports = {
  presets: [config],
  theme: {
    debugOutline: true,
  },
  content: ['**/*.md', '.vuepress/**/*.vue'],
};
