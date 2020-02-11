---
sidebar: auto
prev: /guide/
next: /plugins/
---

# Configuration

This project provides some custom `screens`, `colors` and `z-index` configuration which are described below.

The purpose of this custom configuration is to provide some useful additions to Tailwind CSS while staying as close to its original setup to take advantage of its well written documentation.

## Theme

### Container

The core container plugin is centered by default.

```js{3-5}
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
};
```

[Documentation](https://tailwindcss.com/docs/container#centering-by-default)

### Screens

```js{3-10}
module.exports = {
  theme: {
    screens: {
      xs: '480px',
      s: '768px',
      m: '1024px',
      l: '1280px',
      xl: '1440px',
      xxl: '1920px',
    },
  },
};
```

### Colors

```js{3-14}
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    fill: theme => theme('colors'),
    borderColor: theme => theme('colors'),
    placeholderColor: theme => theme('colors'),
    stroke: theme => theme('colors'),
  },
};
```

::: tip
You should add colors to your project via the `theme.extend` property to not override these defaults.
:::

### Layers

```js{3-9}
module.exports = {
  theme: {
    zIndex: {
      goku: '9000',
      above: '2',
      default: '1',
      under: '-1',
      limbo: '-999',
    },
  },
};
```

::: tip
You should add new layers to your project via the `theme.extend` property to not override these defaults.
:::

### Debug outline

The [debug outline plugin](#debug-outline-2) is disabled by default.

```js{3}
module.exports = {
  theme: {
    debugOutline: false,
  },
};
```

### Grid

The [grid plugin](#grid-2) has the following defaults:

```js{3-10}
module.exports = {
  theme: {
    gridPlugin: {
      gutterWidth: {
        default: 1,
        s: 2,
        l: 3,
        xxl: 4,
      },
    },
  },
};
```

## Variants

We only disable the `hover` and `focus` variants for the `font-weight` utility classes, as it is not recommended to transition between font weights.

```js{3}
module.exports = {
  variants: {
    fontWeight: ['responsive'],
  },
};
```

## Plugins

### Debug outline

Our custom debug outline plugin is used without specific configuration, read its [documentation](/plugins/debug-outline.html) for more informations.

### Grid

Our custom grid plugin is used without specific configuration, read its [documentation](/plugins/grid.html) for more informations.

### Typography

The typography plugin is used with the following configuration:

```js{3-11}
module.exports = {
  plugins: [
    require('tailwindcss-typography')({
      ellipsis: true,
      hyphens: true,
      textUnset: true,
      caps: true,
      nums: true,
      ligatures: true,
      componentPrefix: 'type-',
    }),
  ],
};
```

Read our [own documentation](/plugins/typography.html) on its usage and the [plugin's official documentation](https://github.com/benface/tailwindcss-typography#readme) for more informations.

---

## Configuration reference

Discover below the full configuration file of this project, or directly check the [source on Github](https://github.com/studiometa/tailwind-config/blob/develop/src/index.js).

<<< src/index.js
