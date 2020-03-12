/**
 * Studio Meta tailwind-config
 *
 * @package tailwind-config
 *
 * @since 1.0.0-alpha.1
 *
 * Full tailwind default config file
 * @see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 *
 */
module.exports = {
  theme: {
    /**
     * Container
     */
    container: {
      center: true,
    },

    /**
     * Breakpoints
     */
    screens: {
      xs: '480px',
      s: '768px',
      m: '1024px',
      l: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },

    /**
     * Colors
     */
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    fill: theme => theme('colors'),
    borderColor: theme => theme('colors'),
    placeholderColor: theme => theme('colors'),
    stroke: theme => theme('colors'),

    /**
     * Layer
     */
    zIndex: {
      goku: '9000',
      above: '2',
      default: '1',
      under: '-1',
      limbo: '-999',
    },

    /**
     * Debug
     */
    debugOutline: false,

    /**
     * Grid
     */
    gridPlugin: {
      gutterWidth: {
        default: 1,
        s: 2,
        l: 3,
        xxl: 4,
      },
    },

    extend: {
      /**
       * Timing functions extension
       */
      transitionTimingFunction: {
        'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      },

      /**
       * Inset extension
       */
      inset: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  variants: {
    fontWeight: ['responsive'],
  },
  corePlugins: {
    display: false,
  },
  plugins: [
    require('./plugins/debug-outline')(),
    require('./plugins/display')(),
    require('./plugins/font-face')(),
    require('./plugins/grid')(),
    /**
     * Tailwind CSS typograpy plugin.
     * @see   https://github.com/benface/tailwindcss-typography
     * @since 1.0.0-alpha.5
     */
    require('tailwindcss-typography')({
      componentPrefix: 'type-',
    }),
  ],
};
