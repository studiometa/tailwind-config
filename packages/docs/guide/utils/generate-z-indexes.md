---
sidebar: auto
prev: /plugins/typography.html
next: false
---

# Function `generateZIndexes()`

This function can be used to generate `under` and `above` values to given layers.

## Configuration

The utility function can be used in the `theme.zIndex` property :

```js
const { generateZIndexes } = require('@studiometa/tailwind-config');

module.export = {
  theme: {
    extend: {
      zIndex: {
        ...generateZIndexes({
          menu: 600,
          modal: 700,
        }),
      },
    },
  },
};
```

## Output

For the configuration in the above example :

```css
.z-menu-under {
  z-index: 599;
}

.z-menu {
  z-index: 600;
}

.z-menu-above {
  z-index: 601;
}

.z-modal-under {
  z-index: 699;
}

.z-modal {
  z-index: 700;
}

.z-modal-above {
  z-index: 701;
}
```
