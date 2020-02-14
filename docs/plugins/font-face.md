---
sidebar: auto
prev: ./display.html
next: ./grid.html
---

# Font-face

The font-face plugin adds `@font-face` declarations in the `@tailwind base` directive.

## Configuration

The plugin can be configured with the `theme.fontFace` property as an array of `FontFace` objects :

```js{3-18}
module.exports = {
  theme: {
    fontFace: [
      {
        name: 'MetaOT',
        styles: [
          {
            filename: 'meta-ot-bold-italic',
            style: 'italic',
            weight: 700,
            display: 'auto',
          },
          {
            filename: 'meta-ot-regular',
          },
        ]
      }
    ],
  },
};
```

### `FontFace.name`

- Type: `String`

The name of the font to be used in `font-family` properties.

### `FontFace.styles`

- Type: `Array`

An array of `FontFaceStyle` to be attached to the font name.

### `FontFaceStyle.filename`

- Type: `String`

The filepath withouth extension to the font file. The `woff` and `woff2` formats will be used to generate the `@font-face` declaration.

### `FontFaceStyle.display`

- Type: `String`
- Default : `'auto'`

The display of the font which will be used in a `font-display` property.

### `FontFaceStyle.style`

- Type: `String`
- Default : `'normal'`

The style of the font which will be used in a `font-style` property.

### `FontFaceStyle.weight`

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
