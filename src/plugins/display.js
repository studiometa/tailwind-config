/**
 * Add display utilities, without the conflicting `.grid` one.
 *
 * @package @studiometa/tailwind-config
 */
module.exports = function displayPluginFactory() {
  return function displayPlugin({ addUtilities, variants }) {
    addUtilities(
      {
        '.block': {
          display: 'block',
        },
        '.inline-block': {
          display: 'inline-block',
        },
        '.inline': {
          display: 'inline',
        },
        '.flex': {
          display: 'flex',
        },
        '.inline-flex': {
          display: 'inline-flex',
        },
        '.table': {
          display: 'table',
        },
        '.table-caption': {
          display: 'table-caption',
        },
        '.table-cell': {
          display: 'table-cell',
        },
        '.table-column': {
          display: 'table-column',
        },
        '.table-column-group': {
          display: 'table-column-group',
        },
        '.table-footer-group': {
          display: 'table-footer-group',
        },
        '.table-header-group': {
          display: 'table-header-group',
        },
        '.table-row-group': {
          display: 'table-row-group',
        },
        '.table-row': {
          display: 'table-row',
        },
        '.hidden': {
          display: 'none',
        },
      },
      variants('display')
    );
  };
};
