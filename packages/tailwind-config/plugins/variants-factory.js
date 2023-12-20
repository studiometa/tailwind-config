const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, theme }) => {
  Object.entries(theme('customVariants', {})).forEach(([key, value]) => addVariant(key, value));
});
