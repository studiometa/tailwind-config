const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function breakpointPlugin({ addComponents, theme }) {
    const screens = theme('screens');

    addComponents({
      '[data-breakpoint]::after, [data-breakpoint]::before': {
        zIndex: -999,
        position: 'absolute',
        opacity: 0,
        pointerEvents: 'none',
      },
      '[data-breakpoint]::after': {
        content: `'${Object.keys(screens).join(',')}'`,
      },
      '[data-breakpoint]::before': {
        content: `'${theme('smallestBreakpointName')}'`,
        ...Object.keys(screens).reduce((acc, screen) => {
          acc[`@screen ${screen}`] = {
            content: `'${screen}'`,
          };
          return acc;
        }, {}),
      },
    });
  },
  {
    theme: {
      smallestBreakpointName: 'xxs',
    },
  }
);
