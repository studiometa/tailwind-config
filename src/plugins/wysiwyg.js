/**
 * Wysiwyg plugin for tailwind
 */
module.exports = function wysiwygFactory() {
  return function wysiwygPlugin({ addComponents, theme }) {
    /**
     *
     * @todo colors (text, heading, link, blockquote, )
     * @todo spacings
     * @todo fonts (font-size, font-weight, line-heigth)
     */
    const defaults = {
      color: theme('colors.black'),
      fontSize: theme('fontSize.base'),
      heading: {
        color: 'gray',
        fontSize: theme('fontSize.xl'),
        h1: {
          fontSize: theme('fontSize.3xl'),
        },
      },
      list: {},
      link: {
        colorHover: 'red',
      },
    };
    const config = Object.assign(defaults, theme('wysiwyg'));

    addComponents([
      {
        '.wysiwyg': {
          color: config.color,
          fontSize: config.fontSize,

          /**
           * @Headings
           */
          'h1, h2, h3, h4, h5, h6': {
            paddingBottom: config.heading.fontSize || config.fontSize,
            color: config.heading.color || config.color,
            fontSize: config.heading.fontSize || config.fontSize,
          },
          h1: {
            fontSize: config.heading.h1.fontSize || config.heading.fontSize || config.fontSize,
          },
          h2: {},
          h3: {},
          h4: {},
          h5: {},
          h6: {},

          /**
           * @Content
           */
          p: {
            paddingBottom: config.fontSize,

            '+ h1, + h2, + h3, + h4, + h5, + h6': {
              paddingTop: config.heading.fontSize || config.fontSize,
            },
          },
          blockquote: {
            paddingBottom: config.fontSize,
          },

          /**
           * @Lists
           */
          'ul, ol': {
            paddingBottom: theme('spacing.4'),
            color: config.list.color || config.color,
          },
          ul: {},
          ol: {},
          li: {
            listStyle: 'disc',
            listStylePosition: 'inside',
          },

          /**
           * @InlineText
           */
          a: {
            color: config.link.color || config.color,
            textDecoration: 'none',
            backgroundImage:
              'linear-gradient(to top, currentColor 0, currentColor 0), linear-gradient(to top, transparent 0, transparent 0)',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: 'left bottom -4px',
            backgroundSize: '100% 5px, 100% 5px',
            transition: '0.3s color cubic-bezier(0.19, 1, 0.22, 1)',
            '&:hover': {
              color: config.link.colorHover || config.color,
            },
          },
          small: {
            fontSize: config.fontSize / 0.75,
          },
          'strong, b': {
            fontWeight: '700',
          },
          'i, em': {
            textStyle: 'italic',
          },
          sup: {
            verticalAlign: 'super',
          },
          sub: {
            verticalAlign: 'sub',
          },
          del: {
            textDecoration: 'line-through',
          },

          /**
           * @Medias
           */
          img: {},
          figure: {},
          figcaption: {},
          iframe: {},
          video: {},
          audio: {},

          /**
           * @Other
           */
          hr: {},

          /**
           * @Code
           */
          'pre, code': {
            fontFamily: 'monospace',
          },
        },
      },
    ]);
  };
};
