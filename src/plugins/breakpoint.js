const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function breakpointPlugin({ addComponents, theme }) {
    const screens = theme('screens');

    addComponents({
      '[data-breakpoint]::after, [data-breakpoint]::before': {
        zIndex: -999,
        position: 'absolute',
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      '[data-breakpoint]::after': {
        content: `'${Object.keys(screens).join(',')}'`,
      },
      '[data-breakpoint]::before': {
        content: `'${theme('breakpointPlugin.smallestBreakpointName')}'`,
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
      breakpointPlugin: {
        smallestBreakpointName: 'xxs',
      },
    },
  }
);
