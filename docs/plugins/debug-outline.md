---
sidebar: auto
prev: false
next: ./grid.html
---

# Debug Outline

The debug outline plugins helps you visualise you HTML structure by adding colored outlines to all of them.

## Configuration

The plugin can be configured with the `theme.debugOutline` property:

```js{3}
module.exports = {
  theme: {
    debugOutline: false,
  },
};
```

### `debugOutline`

- Type: `Boolean`
- Default: `false`

Whether the plugin is active or not.

### `debugOutline.prefix`

- Type: `String`
- Default: `c-`

The prefix used by the plugin to prevent conflicts with other classes. It defaults to `c-` as this plugin adds **component** classes. Example usage:

```js{3-5}
module.exports = {
  theme: {
    debugOutline: {
      prefix: 'c-',
    },
  },
};
```

## Examples

<Preview>
  <div class="c-debug">
    <div class="c-grid">
      <div class="c-grid-row mb-2">
        <div class="c-grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="c-grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="c-grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="c-grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
      </div>
      <div class="c-grid-row mb-2">
        <div class="c-grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="c-grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="c-grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
      </div>
      <div class="c-grid-row mb-2">
        <div class="c-grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
        <div class="c-grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
      </div>
      <div class="c-grid-row mb-2">
        <div class="c-grid-col-12">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
        </div>
      </div>
    </div>
  </div>
</Preview>
