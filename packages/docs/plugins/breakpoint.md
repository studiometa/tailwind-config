---
sidebar: auto
prev: /configuration/
next: ./font-face.html
---

# Breakpoint

This plugin adds a `[data-breakpoint]` selector that exposes the current screen and the screens configuration in its `::before` and `::after` pseudo-elements.

::: tip
This plugin is developped to match our JS Toolkit `resize` service which exposes `breakpoint` and `breakpoints` props when a `[data-breakpoint]` element is found in the DOM.
:::

## Configuration

The plugin can be configured with the `theme.breakpointPlugin` property:

```js{3-5}
module.exports = {
  theme: {
    breakpointPlugin: {
      smallestBreakpointName: 'xxs',
    },
  },
};
```

### `smallestBreakpointName`

- Type: `String`
- Default: `'xxs'`

The name to use for the smallest breakpoint.
