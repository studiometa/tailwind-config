const config = require('@studiometa/tailwind-config');

module.exports = {
  presets: [config],
  content: ['index.html'],
  theme: {
    fontFace: {
      MetaOT: [
        {
          filename: '/meta-ot-bold-italic',
          style: 'italic',
          weight: 700,
          display: 'auto',
        },
        {
          filename: '/meta-ot-regular',
        },
      ],
    },
    fontSize: {
      '7xl': '6rem',
      '5xl': '3.375rem',
      '4xl': '3rem',
      '3xl': '2.5rem',
      '2xl': '2rem',
      xl: '1.875rem',
      l: '1.25rem',
      m: '1.125rem',
      base: '1rem',
      s: '0.875rem',
      xs: '0.75rem',
    },
    textStyles: (theme) => ({
      title: {
        fontSize: theme('fontSize.xl'),
        '@screen m': {
          fontSize: theme('fontSize.2xl'),
        },
      },
      body: {
        color: 'red',
        letterSpacing: '1px',
      },
    }),
  },
};
