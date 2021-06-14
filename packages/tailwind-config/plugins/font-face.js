/**
 * Add `@font-face` declarations.
 *
 * @package @studiometa/tailwind-config
 */
module.exports = function fontFacePluginFactory() {
  return function fontFacePlugin({ addBase, theme }) {
    const fonts = theme('fontFace', {});

    Object.entries(fonts).forEach(([name, styles]) => {
      styles.forEach(({ filename, weight = 400, style = 'normal', display = 'auto' }) => {
        addBase({
          '@font-face': {
            fontFamily: name,
            fontWeight: weight,
            fontStyle: style,
            fontDisplay: display,
            src: [
              `url("${filename}.woff2") format("woff2")`,
              `url("${filename}.woff") format("woff")`,
            ].join(', '),
          },
        });
      });
    });
  };
};
