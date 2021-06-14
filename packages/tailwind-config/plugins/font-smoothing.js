const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addBase, theme }) => {
  let html = null;

  switch (theme('fontSmoothingPlugin')) {
    case 'antialiased':
      html = {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      };
      break;

    case 'subpixel-antialiased':
      html = {
        '-webkit-font-smoothing': 'auto',
        '-moz-osx-font-smoothing': 'auto',
      };
      break;

    default:
      break;
  }

  if (html) {
    addBase({ html });
  }
});
