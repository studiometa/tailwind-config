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
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    fill: theme => ({
      ...theme('colors'),
      current: 'currentColor',
    }),
    borderColor: theme => theme('colors'),
    placeholderColor: theme => theme('colors'),
    stroke: theme => ({
      ...theme('colors'),
      current: 'currentColor',
    }),

    /**
     * Spacing
     */
    spacing: {
      0: '0',
      1: '0.5rem',
      2: '1rem',
      4: '2rem',
      8: '4rem',
      16: '8rem',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    padding: theme => theme('spacing'),

    /**
     * Size
     */
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vw',
    }),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),

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
  },
  variants: {
    display: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    alignItems: ['responsive'],
    flexGrow: ['responsive'],
    fontSize: ['responsive'],
    fontWeight: ['responsive'],
    height: ['responsive'],
    justifyContent: ['responsive'],
    margin: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    position: ['responsive'],
    stroke: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    zIndex: ['responsive'],
  },
  plugins: [
    require('./plugins/debug-outline')(),
    require('./plugins/grid')(),
    /**
     * Tailwind CSS typograpy plugin.
     * @see   https://github.com/benface/tailwindcss-typography
     * @since 1.0.0-alpha.5
     */
    require('tailwindcss-typography')({
      ellipsis: true,
      hyphens: true,
      textUnset: true,
      caps: true,
      nums: true,
      ligatures: true,
      componentPrefix: 'type-',
    }),
  ],
};
