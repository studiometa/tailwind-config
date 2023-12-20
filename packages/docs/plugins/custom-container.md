---
sidebar: auto
prev: ./grid.html
next: ./variants-factory.html
---

# Custom container

The custom container plugin creates component classes `container` and `container-reset` to override the default [container core plugin](https://tailwindcss.com/docs/container).

## Usage

You can use all the Tailwind variants to control the display of the container. Here's an example with the [responsive variants](https://tailwindcss.com/docs/responsive-design) to enable the container only for the breakpoints `s, l, xl, xxl` and disable it for the breakpoints `xxs, xs and m`:

```html
<div class="s:container m:container-reset l:container">
  ...
</div>
```

## Configuration

The [container core plugin](https://tailwindcss.com/docs/container) is disabled and the plugin can be configured with the `theme.customContainer` property:

```js{3-7}
module.exports = {
  theme: {
    customContainer: {
      center: true,
      padding: '1rem',
      maxWidth: '80rem',
    },
  },
};
```

::: tip
You should set the custom container properties with the `theme.extend` property to not override these defaults.
:::

### `center`

- Type: `Boolean`
- Default: `true`

Set right and left margins to `auto` if enabled.

### `padding`

- Type: `[ String, Object ]`
- Default: `'1rem'`

Set right and left paddings. You can use an object to make this setting responsive. ([Learn how](#responsive-configuration))

### `maxWidth`

- Type: `[ String, Object ]`
- Default: `'80rem'`

Set the max width of the container. You can use an object to make this setting responsive. ([Learn how](#responsive-configuration))

## Responsive configuration

`padding` and `maxWidth` properties are responsive if defined using objects like this:

```js{5-12}
module.exports = {
  theme: {
    extend: {
      customContainer: {
        padding: {
          DEFAULT: '1rem',
          m: '2rem',
        },
        maxWidth: {
          DEFAULT: '80rem',
          xxl: '94rem',
        },
      },
    }
  },
};
```

## Use the container core plugin

You need to disable the custom container plugin and enable the core plugin:

```js{3,8-10}
module.exports = {
  theme: {
    customContainer: false,
    container: {
      center: true,
    },
  },
  corePlugins: {
    container: true,
  },
};
```
