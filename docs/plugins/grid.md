---
sidebar: auto
prev: ./debug-outline.html
next: ./typography.html
---

# Grid

The grid plugin creates component classes to easily work with a 12 columns layout.

## Configuration

The plugin can be configured with the `theme.gridPlugin` property:

```js{3-8}
module.exports = {
  theme: {
    gridPlugin: {
      columns: 12,
      gutterWidth: 1,
      gutterUnit: 'rem',
      prefix: 'c-',
    },
  },
};
```

### `columns`

- Type: `Number`
- Default: `12`

The total number of columns.

### `gutterWidth`

- Type: `[ Number, String, Object ]`
- Default: `1`

The width of the grid's gutters provided as a **unitless number**. You can configure different widths per breakpoint by providing an object with the following schema:

```js
{
  default: <value>,
  ...<screen>: <value,
}
```

The following configuration...

```js
module.exports = {
  theme: {
    screens: {
      s: '600px',
      m: '1200px',
      l: '1800px',
    },
    gridPlugin: {
      gutterWidth: {
        default: 2,
        m: 4,
      },
    },
  },
};
```
...would generate a grid component with gutters of size `2` for viewports from `0` to `1200px` and of size `4` for viewports from `1200px` and up.

### `gutterUnit`

- Type: `String`
- Default: `'rem'`

The CSS unit used for the gutters.

### `prefix`

- Type: `String`
- Default : `'c-'`

The prefix used by the plugin to prevent conflicts with other classes. It defaults to `c-` as this plugin adds **component** classes.

## Classes

### Container

|       Class       | Description | Variants |
|-------------------|-------------|----------|
| `.c-grid`           | @todo       | `[]`     |
| `.c-grid-nested`    | @todo       | `[]`     |
| `.c-grid-no-gutter` | @todo       | `[]`     |

### Row

|        Class        | Description |   Variants   |
|---------------------|-------------|--------------|
| `.c-grid-row`         | @todo       | `responsive` |
| `.c-grid-row-start`   | @todo       | `responsive` |
| `.c-grid-row-center`  | @todo       | `responsive` |
| `.c-grid-row-end`     | @todo       | `responsive` |
| `.c-grid-row-stretch` | @todo       | `responsive` |

### Columns

|        Class         | Description |   Variants   |
|----------------------|-------------|--------------|
| `.c-grid-pull-<count>` | @todo       | `responsive` |
| `.c-grid-push-<count>` | @todo       | `responsive` |
| `.c-grid-col-<count>`  | @todo       | `responsive` |
| `.c-grid-col-center`   | @todo       | `responsive` |
| `.c-grid-col-clear`    | @todo       | `responsive` |
| `.c-grid-col-left`     | @todo       | `responsive` |
| `.c-grid-col-no-clear` | @todo       | `responsive` |
| `.c-grid-col-right`    | @todo       | `responsive` |


## Examples

### Simple

<Preview>
  <div class="c-grid">
    <div class="c-grid-row mb-2">
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
    <div class="c-grid-row mb-2">
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
    </div>
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
</Preview>

```html
<div class="c-grid">
  <div class="c-grid-row mb-2">
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="c-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
  </div>
  <div class="c-grid-row mb-2">
    <div class="c-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="c-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="c-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="c-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="c-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="c-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
  </div>
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
```

### No gutter

<Preview>
  <div class="c-grid c-grid-no-gutter">
    <div class="c-grid-row mb-2">
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
    <div class="c-grid-row mb-2">
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
    </div>
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
</Preview>

```html
<div class="c-grid c-grid-no-gutter">
  ...
</div>
```

### Nested

<Preview>
  <div class="c-grid c-grid-nested">
    <div class="c-grid-row mb-2">
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="c-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
    <div class="c-grid-row mb-2">
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="c-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
    </div>
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
</Preview>

```html
<div class="c-grid c-grid-nested">
  ...
</div>
```
