---
sidebar: auto
prev: ./grid.html
next: false
---

# Typography <Badge>Third party</Badge>

The [typography plugin](https://github.com/benface/tailwindcss-typography) adds some usefule typography utilities and generates text styles components.

See the [plugin's documentation](https://github.com/benface/tailwindcss-typography#readme) for more detailed informations.

## Default configuration

The plugin is used with the following custom configuration:

```js
require('tailwindcss-typography')({
  // Text styles component classes will be prefixed by `.type-...`
  componentPrefix: 'type-',
});
```

## Usage

When using the [@studiometa/tailwind-config](https://github.com/studiometa/tailwind-config) package as a base for your Tailwind CSS configuration, you will be able to define text styles component via the `textStyles` property provided by this typography plugin.

```js
module.exports = {
  theme: {
    textStyles: (theme) => ({
      heading: {
        // The `output: false` property will prevent generatin a `.type-heading`
        // class but its configuration can still be extended by others
        output: false,
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.tight'),
      },
      // Will generate a `.type-title` class
      title: {
        extends: 'heading',
        fontSize: theme('fontSize.xl'),
        '@screen m': {
          fontSize: theme('fontSize.xxl'),
        },
      },
    }),
  },
};
```

::: tip
All the text styles component classes will be prefixed by `.type-...`, as defined in the above configuration.
:::
