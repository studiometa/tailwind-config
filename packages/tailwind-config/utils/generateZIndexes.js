/**
 * Generate `z-index` values
 * @param {Object} zIndexes Names & base values
 * @returns {Object}
 */
module.exports = (zIndexes) => {
  return Object.assign(
    {},
    ...Object.entries(zIndexes ?? {}).map(([key, value]) => {
      const index = parseInt(value, 10);
      return index
        ? {
            [`${key}-under`]: index - 1,
            [key]: index,
            [`${key}-above`]: index + 1,
          }
        : {};
    })
  );
};
