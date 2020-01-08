/**
 * Studio Meta tailwind-config
 * 
 * @package tailwind-config
 * 
 * @since 1.0.0-alpha.0
 * 
 * Full tailwind default config file
 * @see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 * 
 */
module.exports = {
  theme: {
    /**
     * Breakpoints
     */
    screens: {
      xxs: '0px',
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
      current: 'currentColor'
    }),
    borderColor: theme => theme('colors'),
    placeholderColor: theme => theme('colors'),
    stroke: theme => ({
      ...theme('colors'),
      current: 'currentColor'
    }),

    /**
     * Spacing
     */ 
    spacing: {
      auto: 'auto',
      0: '0',
      1: '1',
      2: '2',
      4: '4',
      8: '8',
      16: '16',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    padding: theme => theme('spacing'),
    
    /**
     * Flex
     */
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    order: {},

    /**
     * Typography
     */
    fontFamily: {},
    fontSize: {},
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    letterSpacing: {},
    lineHeight: {},
    listStyleType: {},
    inset: {},

    /** 
     * Size
     */
    container: {},
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vw',
    }),
    maxWidth: (theme, { breakpoints }) => {
      return {
        none: 'none',
        xxs: '20rem',
        s: '24rem',
        m: '28rem',
        l: '32rem',
        xl: '36rem',
        full: '100%',
        screen: '100vw',
        ...breakpoints(theme('screens')),
      }
    },
    minWidth: {},
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxHeight: {},
    minHeight: {},

    /**
     * Backgrounds utilities
     */
    backgroundPosition: {},
    backgroundSize: {},

    /**
     * Border utilities
     */
    borderRadius: {},
    borderWidth: {},

    /**
     * Layer
     */
    zIndex: {
      goku: '9000',
      default: '1',
      limbo: '-999',
    },

    /**
     * Other
     */
    boxShadow: {},
    cursor: {},
    objectPosition: {},
    opacity: {},
    strokeWidth: {},
    
    /**
     * css grid
     */ 
    gap: {},
    rowGap: {},
    columnGap: {},
    gridTemplateColumns: {},
    gridColumn: {},
    gridColumnStart: {},
    gridColumnEnd: {},
    gridTemplateRows: {},
    gridRow: {},
    gridRowStart: {},
    gridRowEnd: {},

    /**
     * Transforms
     */
    rotate: {},
    scale: {},
    skew: {},
    transformOrigin: {},
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
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
  corePlugins: {},
  plugins: [],
};
