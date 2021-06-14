/**
 * Get the list of available breakpoints and if they are active or not.
 * @return {{ [breakpointName: string]: boolean }}
 */
module.exports = function getBreakpoints() {
  const div = document.querySelector('[data-breakpoint]');

  if (!div) {
    return {};
  }

  const before = window.getComputedStyle(div, '::before');
  const after = window.getComputedStyle(div, '::after');

  if (!after || !before) {
    return {};
  }

  const breakpointNames = after.getPropertyValue('content').replace(/"/g, '').split(',');
  return breakpointNames.reduce((acc, breakpointName) => {
    acc[breakpointName] = Number(before.getPropertyValue(`--screen-${breakpointName}`)) === 1;
    return acc;
  }, {});
};
