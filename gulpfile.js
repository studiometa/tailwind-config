const { create } = require('@studiometa/gulp-config');
const tailwindcss = require('tailwindcss');

module.exports = create({
  styles: {
    src: 'tests/src',
    dist: 'tests/dist',
    gulpSassOptions: {
      outputStyle: 'expanded',
    },
    cleanCssOptions: {
      format: 'beautify',
    },
    postCssPlugins: [
      tailwindcss,
    ],
  },
});
