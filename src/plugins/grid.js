const range = require('lodash.range');
const max = require('lodash.max');
const { default: prefixSelector } = require('tailwindcss/lib/util/prefixSelector');

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
    const prefixValue = theme('gridPlugin.prefix', '');
    const prefix = selector => prefixSelector(prefixValue, selector);

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
        [prefix('.grid')]: {
          paddingRight: gutterWidth.default * 0.5 + gutterUnit,
          paddingLeft: gutterWidth.default * 0.5 + gutterUnit,
        },
        /**
         * Add margin's to .grid-row
         */
        [prefix('.grid-row')]: {
          marginRight: gutterWidth.default * -0.5 + gutterUnit,
          marginLeft: gutterWidth.default * -0.5 + gutterUnit,
        },

        /**
         * Add padding's to .grid-col-{number}
         */
        [`[class*="${prefixValue}grid-col-"]`]: {
          paddingRight: gutterWidth.default * 0.5 + gutterUnit,
          paddingLeft: gutterWidth.default * 0.5 + gutterUnit,
        },
      },
      ...Object.keys(screens)
        .filter(breakpoint => breakpoint in gutterWidth)
        .map(breakpoint => ({
          /**
           * Declare the @media query rule
           */
          [`@screen ${breakpoint}`]: {
            /**
             * Add padding's to .grid
             */
            [prefix('.grid')]: {
              paddingRight: gutterWidth[breakpoint] * 0.5 + gutterUnit,
              paddingLeft: gutterWidth[breakpoint] * 0.5 + gutterUnit,
            },
            /**
             * Add margin's to .grid-row
             */
            [prefix('.grid-row')]: {
              marginRight: gutterWidth[breakpoint] * -0.5 + gutterUnit,
              marginLeft: gutterWidth[breakpoint] * -0.5 + gutterUnit,
            },

            /**
             * Add padding's to .grid-col-{number}
             */
            [`[class*="${prefixValue}grid-col-"]`]: {
              paddingRight: gutterWidth[breakpoint] * 0.5 + gutterUnit,
              paddingLeft: gutterWidth[breakpoint] * 0.5 + gutterUnit,
            },
          },
        })),
      {
        /**
         * Responsive classes
         */
        '@responsive': [
          {
            /**
             * Column center
             */
            [prefix('.grid-col-center')]: {
              float: 'none',
              marginRight: 'auto',
              marginLeft: 'auto',
              clear: 'both',
            },

            /**
             * Clear utilities
             */
            [prefix('.grid-col-clear')]: { clear: 'both' },
            [prefix('.grid-col-no-clear')]: { float: 'none' },

            /**
             * Floating utilities
             */
            [prefix('.grid-col-right')]: { float: 'right' },
            [prefix('.grid-col-left')]: { float: 'left' },
          },

          /**
           * Grid
           */
          {
            [prefix('.grid')]: {
              minHeight: '1px',
              marginRight: 'auto',
              marginLeft: 'auto',
            },
          },
          /**
           * No gutter / nested grids utilities
           */
          {
            [prefix(`
              .grid-no-gutter,
              .grid-nested,
              .grid-no-gutter > .grid-row > [class*="${prefixValue}grid-col-"]
            `)]: {
              paddingRight: '0',
              paddingLeft: '0',
            },
          },
          {
            [prefix('.grid-no-gutter > .grid-row')]: {
              marginRight: '0',
              marginLeft: '0',
            },
          },

          /**
           * Row
           */
          {
            [prefix('.grid-row')]: {
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
            [prefix('.grid-row-end, .grid-row-center, .grid-row-stretch')]: {
              display: 'flex',
              flexWrap: 'wrap',
            },
          },

          /**
           * Row order
           */
          {
            [prefix(`
              .grid-row-end .grid-col-left,
              .grid-row-center .grid-col-left,
              .grid-row-stretch .grid-col-left
            `)]: {
              order: '0',
            },
          },
          {
            [prefix(`
              .grid-row-end .grid-col-right,
              .grid-row-center .grid-col-right,
              .grid-row-stretch .grid-col-right
            `)]: {
              order: '1',
            },
          },

          /**
           * Row stretch
           */
          { [prefix('.grid-row-stretch')]: { alignItems: 'stretch' } },

          /**
           * Row center
           */
          { [prefix('.grid-row-center')]: { alignItems: 'center' } },

          /**
           * Row start
           */
          { [prefix('.grid-row-start')]: { alignItems: 'flex-start' } },

          /**
           * Row end
           */
          { [prefix('.grid-row-end')]: { alignItems: 'flex-end' } },

          /**
           * Row stretch
           */
          {
            [prefix(`.grid-row-stretch > [class*="${prefixValue}grid-col-"]`)]: {
              display: 'flex',
              alignItems: 'stretch',
            },
          },
          /**
           * Zero based column classes
           */
          { [prefix('.grid-pull-0')]: { marginLeft: '0' } },
          { [prefix('.grid-push-0')]: { marginLeft: '0' } },
          { [prefix('.grid-col-0')]: { display: 'none' } },

          /**
           * Column pull
           * grid-pull-{number}
           */
          ...range(1, max(columns) + 2).map(count => ({
            [prefix(`.grid-pull-${count}`)]: {
              marginLeft: `${(count * -100) / (max(columns) + 1)}%`,
            },
          })),

          /**
           * Column push
           * grid-push-{number}
           */
          ...range(1, max(columns) + 2).map(count => ({
            [prefix(`.grid-push-${count}`)]: {
              marginLeft: `${(count * 100) / (max(columns) + 1)}%`,
            },
          })),

          /**
           * Column size
           * grid-col-{number}
           */
          ...range(1, max(columns) + 2).map(count => ({
            [prefix(`.grid-col-${count}`)]: {
              float: 'left',
              display: 'block',
              width: `${(count * 100) / (max(columns) + 1)}%`,
            },
          })),
        ],
      },
    ]);
  };
};
