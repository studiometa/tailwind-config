const { create } = require('@studiometa/gulp-config');
const tailwindcss = require('tailwindcss');
const { resolve } = require('path');

module.exports = create({
  styles: {
    src: resolve('./tests/src'),
    dist: resolve('./tests/dist'),
    cleanCssOptions: {
      format: 'beautify',
    },
    postCssPlugins: [tailwindcss],
  },
});
