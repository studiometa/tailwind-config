---
sidebar: auto
prev: /guide/
next: /plugins/
---

# Configuration

This project provides some custom `screens`, `colors` and `z-index` configuration which are described below.

The purpose of this custom configuration is to provide some useful additions to Tailwind CSS while staying as close to its original setup to take advantage of its well written documentation.

::: tip
Discover the [full config reference](./reference.md) for a quick overview of what is available.
:::

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

[Documentation](https://tailwindcss.com/docs/theme/#screens)

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

[Documentation](https://tailwindcss.com/docs/theme/#colors)

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

[Documentation](https://tailwindcss.com/docs/z-index/)

::: tip
You should add new layers to your project via the `theme.extend` property to not override these defaults.
:::

### Transition timing function

A full list of common easing functions are added to the default ones.

```js{4-29}
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      },
    },
  },
};
```

[Documentation](https://tailwindcss.com/docs/transition-timing-function/)

### Top / Right / Bottom / Left

Often used inset values are added to the default configuration.

```js{4-7}
module.exports = {
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
};
```

[Documentation](https://tailwindcss.com/docs/top-right-bottom-left/)

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

### Display

Our custom display plugin is used without specific configuration, read its [documentation](/plugins/display.html) for more informations.

### Font-Face

Our custom font-face plugin is used without specific configuration, read its [documentation](/plugins/font-face.html) for more informations.

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
