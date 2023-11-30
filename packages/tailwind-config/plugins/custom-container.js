const plugin = require('tailwindcss/plugin');

/**
 * is Object ?
 * @param {*} value
 */
const isObject = (value) =>
  typeof value === 'object' && !!value && value.toString() === '[object Object]';

module.exports = plugin(({ addUtilities, theme }) => {
  const config = theme('customContainer');
  if (!config) {
    return;
  }

  const allowedConfigProperties = [
    'width',
    'maxWidth',
    'marginRight',
    'marginLeft',
    'paddingRight',
    'paddingLeft',
  ];

  const containerDefault = {
    width: '100%',
  };

  const containerMediaQueries = {};

  if (config.center) {
    config.marginRight = 'auto';
    config.marginLeft = 'auto';
    delete config.center;
  }

  if (config.padding) {
    config.paddingRight = config.padding;
    config.paddingLeft = config.padding;
    delete config.padding;
  }

  Object.entries(config)
    .filter(([propertyName]) => allowedConfigProperties.includes(propertyName))
    .forEach(([propertyName, propertyValue]) => {
      if (!isObject(propertyValue)) {
        containerDefault[propertyName] = propertyValue;
        return;
      }

      Object.entries(propertyValue).forEach(
        ([breakpointName, propertyValueForCurrentBreakpoint]) => {
          if (breakpointName === 'DEFAULT') {
            containerDefault[propertyName] = propertyValueForCurrentBreakpoint;
            return;
          }

          if (!containerMediaQueries[`@screen ${breakpointName}`]) {
            containerMediaQueries[`@screen ${breakpointName}`] = {};
          }

          containerMediaQueries[`@screen ${breakpointName}`][propertyName] =
            propertyValueForCurrentBreakpoint;
        }
      );
    });

  const container = { ...containerDefault, ...containerMediaQueries };

  addUtilities({
    '.container': container,
    '.container-reset': Object.fromEntries(Object.keys(container).map((key) => [key, 'unset'])),
  });
});
