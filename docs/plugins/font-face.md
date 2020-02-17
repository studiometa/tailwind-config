---
sidebar: auto
prev: ./display.html
next: ./grid.html
---

# Font-face

The font-face plugin adds `@font-face` declarations in the `@tailwind base` directive.

## Configuration

The plugin can be configured with the `theme.fontFace` property :

```js{3-15}
module.exports = {
  theme: {
    fontFace: {
      MetaOT: [
        {
          filename: 'meta-ot-bold-italic',
          style: 'italic',
          weight: 700,
          display: 'auto',
        },
        {
          filename: 'meta-ot-regular',
        },
      ],
    },
  },
};
```

### `fontFace.<String>`

- Type: `Array.<FontFace>`

An array of [`FontFace`](#fontface) objects that will be attached to the font name given by the object's key.

### `FontFace`

- Type: `Object`

The `FontFace` object describes the value that will be used to generate a `@font-face` declaration.

### `FontFace.filename`

- Type: `String`
- Required

The filepath withouth extension to the font file. The `woff` and `woff2` formats will be used to generate the `@font-face` declaration.

### `FontFace.display`

- Type: `String`
- Default : `'auto'`

The display of the font which will be used in a `font-display` property.

### `FontFace.style`

- Type: `String`
- Default : `'normal'`

The style of the font which will be used in a `font-style` property.

### `FontFace.weight`

- Type: `[ String, Number ]`
- Default : `400`

The weight of the font which will be used in a `font-weight` property.

## Output

Given the configuration in the above example, Tailwind will output a `@font-face` declaration like the following:

```css
@font-face {
  font-family: MetaOT;
  font-weight: 700;
  font-style: italic;
  font-display: auto;
  src: url("meta-ot-bold-italic.woff2") format("woff2"),
    url("meta-ot-bold-italic.woff") format("woff");
}

@font-face {
  font-family: MetaOT;
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: url("meta-ot-regular.woff2") format("woff2"),
    url("meta-ot-regular.woff") format("woff");
}
```
