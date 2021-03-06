const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function breakpointPlugin({ addComponents, theme }) {
    const screens = theme('screens');

    addComponents({
      '[data-breakpoint]::after, [data-breakpoint]::before': {
        display: 'none',
      },
      '[data-breakpoint]::after': {
        content: `'${Object.keys(screens).join(',')}'`,
      },
      '[data-breakpoint]::before': {
        content: `'${theme('breakpointPlugin.smallestBreakpointName')}'`,
        ...Object.keys(screens).reduce((acc, screen) => {
          acc[`--screen-${screen}`] = '0';
          acc[`@screen ${screen}`] = {
            content: `'${screen}'`,
            [`--screen-${screen}`]: '1',
          };
          return acc;
        }, {}),
      },
    });
  },
  {
    theme: {
      breakpointPlugin: {
        smallestBreakpointName: 'xxs',
      },
    },
  }
);
