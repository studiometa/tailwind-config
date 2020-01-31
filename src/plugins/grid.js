const range = require('lodash.range');
const max = require('lodash.max');

/**
 * Grid plugin for tailwind
 *
 * - This plugin is a portage of the grid from
 * @see https://github.com/studiometa/scss-toolkit/
 *
 * - How to create tailwind plugins
 * @see https://tailwindcss.com/docs/plugins/
 *
 * @param {array}  variants
 */
module.exports = function gridPluginFactory() {
  return function gridPlugin({ addComponents, theme }) {
    const screens = theme('screens', {});
    const columns = range(1, theme('gridPlugin.columns', 12));
    const gutterUnit = theme('gridPlugin.gutterUnit', 'rem');
    let gutterWidth = theme('gridPlugin.gutterWidth', 1);

    // Transform `gutterWidth` into an object if define as a string or number
    if (typeof gutterWidth === 'string' || typeof gutterWidth === 'number') {
      gutterWidth = {
        default: gutterWidth,
      };
    }

    addComponents([
      {
        /**
         * Add padding's to .grid
         */
        '.grid': {
          paddingRight: gutterWidth.default * 0.5 + gutterUnit,
          paddingLeft: gutterWidth.default * 0.5 + gutterUnit,
        },
        /**
         * Add margin's to .grid-row
         */
        '.grid-row': {
          marginRight: gutterWidth.default * -0.5 + gutterUnit,
          marginLeft: gutterWidth.default * -0.5 + gutterUnit,
        },

        /**
         * Add padding's to .grid-col-{number}
         */
        '[class*="grid-col-"]': {
          paddingRight: gutterWidth.default * 0.5 + gutterUnit,
          paddingLeft: gutterWidth.default * 0.5 + gutterUnit,
        },
        /**
         * Responsive classes
         */
        '@responsive': [
          {
            /**
             * Column center
             */
            '.grid-col-center': {
              float: 'none',
              marginRight: 'auto',
              marginLeft: 'auto',
              clear: 'both',
            },

            /**
             * Clear utilities
             */
            '.grid-col-clear': { clear: 'both' },
            '.grid-col-no-clear': { float: 'none' },

            /**
             * Floating utilities
             */
            '.grid-col-right': { float: 'right' },
            '.grid-col-left': { float: 'left' },
          },

          /**
           * Grid
           */
          {
            '.grid': {
              minHeight: '1px',
              marginRight: 'auto',
              marginLeft: 'auto',
            },
          },
          /**
           * No gutter / nested grids utilities
           */
          {
            '.grid-no-gutter, .grid-nested, .grid-no-gutter > .grid-row > [class*="grid-col-"]': {
              paddingRight: '0',
              paddingLeft: '0',
            },
          },
          {
            '.grid-no-gutter > .grid-row': {
              marginRight: '0',
              marginLeft: '0',
            },
          },

          /**
           * Row
           */
          {
            '.grid-row': {
              position: 'relative',
              '&:after': {
                content: "''",
                display: 'block',
                clear: 'both',
              },
            },
          },

          /**
           * Row flex utilities
           */
          {
            '.grid-row-end, .grid-row-center, .grid-row-stretch': {
              display: 'flex',
              flexWrap: 'wrap',
            },
          },

          /**
           * Row order
           */
          {
            '.grid-row-end .grid-col-left, .grid-row-center .grid-col-left, .grid-row-stretch .grid-col-left': {
              order: '0',
            },
          },
          {
            '.grid-row-end .grid-col-right, .grid-row-center .grid-col-right, .grid-row-stretch .grid-col-right': {
              order: '1',
            },
          },

          /**
           * Row stretch
           */
          { '.grid-row-stretch': { alignItems: 'stretch' } },

          /**
           * Row center
           */
          { '.grid-row-center': { alignItems: 'center' } },

          /**
           * Row start
           */
          { '.grid-row-start': { alignItems: 'flex-start' } },

          /**
           * Row end
           */
          { '.grid-row-end': { alignItems: 'flex-end' } },

          /**
           * Row stretch
           */
          {
            '.grid-row-stretch > [class*=grid-col-]': {
              display: 'flex',
              alignItems: 'stretch',
            },
          },
          /**
           * Zero based column classes
           */
          { '.grid-pull-0': { marginLeft: '0' } },
          { '.grid-push-0': { marginLeft: '0' } },
          { '.grid-col-0': { display: 'none' } },

          /**
           * Column pull
           * grid-pull-{number}
           */
          ...range(1, max(columns) + 2).map(count => ({
            [`.grid-pull-${count}`]: {
              marginLeft: `${(count * -100) / (max(columns) + 1)}%`,
            },
          })),

          /**
           * Column push
           * grid-push-{number}
           */
          ...range(1, max(columns) + 2).map(count => ({
            [`.grid-push-${count}`]: {
              marginLeft: `${(count * 100) / (max(columns) + 1)}%`,
            },
          })),

          /**
           * Column size
           * grid-col-{number}
           */
          ...range(1, max(columns) + 2).map(count => ({
            [`.grid-col-${count}`]: {
              float: 'left',
              display: 'block',
              width: `${(count * 100) / (max(columns) + 1)}%`,
            },
          })),
        ],
      },
      ...Object.keys(screens).map(breakpoint => ({
        /**
         * Declare the @media query rule
         */
        [`@screen ${breakpoint}`]: {
          /**
           * Add padding's to .grid
           */
          '.grid': {
            paddingRight: gutterWidth[breakpoint] * 0.5 + gutterUnit,
            paddingLeft: gutterWidth[breakpoint] * 0.5 + gutterUnit,
          },
          /**
           * Add margin's to .grid-row
           */
          '.grid-row': {
            marginRight: gutterWidth[breakpoint] * -0.5 + gutterUnit,
            marginLeft: gutterWidth[breakpoint] * -0.5 + gutterUnit,
          },

          /**
           * Add padding's to .grid-col-{number}
           */
          [`[class*="grid-col-"]`]: {
            paddingRight: gutterWidth[breakpoint] * 0.5 + gutterUnit,
            paddingLeft: gutterWidth[breakpoint] * 0.5 + gutterUnit,
          },
        },
      })),
    ]);
  };
};
