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
    require('./plugins/wysiwyg')(),
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
