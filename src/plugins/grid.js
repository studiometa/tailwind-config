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
 * @param {array} columnCount number of columns to have in the grid, default is 12
 * @param {object} gridGutters per breakpoint grid gutter size value
 * @param {string} gridGutterUnit unit to use for the grid gutter size, default is rem
 * @param {array} variants
 */
module.exports = function ({ columnCount = range(1, 12), gridGutters, gridGutterUnit = 'rem', variants = ['responsive'] }) {
  return function ({ addUtilities, theme, e }) {
    /**
     * Add utilities without variants
     */
    addUtilities([
      /**
       * Per breakpoint rules, string matching keys from theme('screens') & gridGutters
       */
      ...Object.keys(theme('screens')).map(breakpoint => ({
        /**
         * Add padding's to .grid
         */
        [`.${e(`${breakpoint}:grid`)}`]: {
          paddingRight: (gridGutters[breakpoint] * 0.5) + gridGutterUnit,
          paddingLeft: (gridGutters[breakpoint] * 0.5) + gridGutterUnit,
        },

        /**
         * Add margin's to .grid-row
         */ 
        [`.${e(`${breakpoint}:grid-row`)}`]: {
          marginRight: (gridGutters[breakpoint] * -0.5) + gridGutterUnit,
          marginLeft: (gridGutters[breakpoint] * -0.5) + gridGutterUnit,
        },

        /**
         * Add padding's to .grid-col-{number}
         */ 
        [`.${e(`[class*=${breakpoint}:'grid-col-']`)}`]: {
          paddingRight: (gridGutters[breakpoint] * 0.5) + gridGutterUnit,
          paddingLeft: (gridGutters[breakpoint] * 0.5) + gridGutterUnit,
        },
      })),
    ]),

    /**
     * Add utilities with variants
     */
    addUtilities([
      /**
       * Grid
       */ 
      { '.grid': {
        minHeight: '1px',
        marginRight: 'auto',
        marginLeft: 'auto',
      } },

      /**
       * No gutter / nested grids utilities
       */
      { '.grid-no-gutter, .grid-nested': { 
        paddingRight: '0',
        paddingLeft: '0',
      } },
      { '.grid-no-gutter > .grid-row': { 
        marginRight: '0',
        marginLeft: '0',
      } },

      /**
       * Row
       */
      { '.grid-row': { 
        position: 'relative',
        '&:after': {
          content: e("''"),
          display: 'block',
          clear: 'both',
        }
      } },

      /**
       * Row flex utilities
       */
      { '.grid-row-end, .grid-row-center, .grid-row-stretch': { 
        display: 'flex',
        flexWrap: 'wrap',
      } },

      /**
       * Row order
       */
      { '.grid-row-end .grid-col-left, .grid-row-center .grid-col-left, .grid-row-stretch .grid-col-left': { 
        order: '0',
      } },
      { '.grid-row-end .grid-col-right, .grid-row-center .grid-col-right, .grid-row-stretch .grid-col-right': { 
        order: '1',
      } },

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
      { '.grid-row-stretch > [class*=grid-col-]': { 
        display: 'flex',
        alignItems: 'stretch',
       } },

      /**
       * Column center
       */
      { "[class*='grid-col-'].grid-col-center": { 
        float: 'none',
        marginRight: 'auto',
        marginLeft: 'auto',
        clear: 'both',
      } },

      /**
       * Clear utilities
       */ 
      { "[class*='grid-col-'].grid-col-clear": { clear: 'both' } },
      { "[class*='grid-col-'].grid-col-no-clear": { float: 'none' } },

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
      ...range(1, max(columnCount) + 2).map((count) => ({
        [`.grid-pull-${count}`]: {
          marginLeft: `${(count) * -100 / (max(columnCount) + 1)}%`,
        },
      })),

      /**
       * Column push
       * grid-push-{number}
       */ 
      ...range(1, max(columnCount) + 2).map((count) => ({
        [`.grid-push-${count}`]: {
          marginLeft: `${(count) * 100 / (max(columnCount) + 1)}%`,
        },
      })),

      /**
       * Column size
       * grid-col-{number}
       */ 
      ...range(1, max(columnCount) + 2).map((count) => ({
        [`.grid-col-${count}`]: {
          float: 'left',
          display: 'block',
          width: `${(count) * 100 / (max(columnCount) + 1)}%`,
        },
      })),

      /**
       * Floating utilities
       */
      { "[class*='grid-col-'].grid-col-right": { float: 'right' } },
      { "[class*='grid-col-'].grid-col-left": { float: 'left' } },

    ], variants)
  }
}