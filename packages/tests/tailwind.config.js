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
    textStyles: (theme) => ({
      title: {
        fontSize: theme('fontSize.xl.0'),
        '@screen m': {
          fontSize: theme('fontSize.2xl.0'),
        },
      },
      body: {
        color: 'red',
        letterSpacing: '1px',
      },
    }),
  },
};
