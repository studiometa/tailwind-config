const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addBase }) => {
  addBase({
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
  });
});
