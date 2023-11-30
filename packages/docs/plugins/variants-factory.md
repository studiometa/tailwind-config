---
sidebar: auto
prev: ./grid.html
next: ./typography.html
---

# Variants factory

The variants factory plugin creates simple custom variants on the go and simply is a shorthand for [`addVariant` Tailwind plugin](https://tailwindcss.com/docs/plugins) default functionality.

## Configuration

The plugin can be configured with the `theme.customVariants` property:

```js{3-5}
module.exports = {
  theme: {
    customVariants: {
      children: '& > *', // like addVariant('children', '& > *')
    },
  },
};
```

::: tip
You should add new custom variants to your project via the `theme.extend` property to not override these defaults.
:::
