---
sidebar: auto
prev: ./debug-outline.html
next: ./typography.html
---

# Grid

The grid plugin creates component classes to easily work with a 12 columns layout.

## Configuration

The plugin can be configured with the `theme.gridPlugin` property:

```js{3-7}
module.exports = {
  theme: {
    gridPlugin: {
      columns: 12,
      gutterWidth: 1,
      gutterUnit: 'rem',
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

## Classes

### Container

|       Class       | Description | Variants |
|-------------------|-------------|----------|
| `.grid`           | @todo       | `[]`     |
| `.grid-nested`    | @todo       | `[]`     |
| `.grid-no-gutter` | @todo       | `[]`     |

### Row

|        Class        | Description |   Variants   |
|---------------------|-------------|--------------|
| `.grid-row`         | @todo       | `responsive` |
| `.grid-row-start`   | @todo       | `responsive` |
| `.grid-row-center`  | @todo       | `responsive` |
| `.grid-row-end`     | @todo       | `responsive` |
| `.grid-row-stretch` | @todo       | `responsive` |

### Columns

|        Class         | Description |   Variants   |
|----------------------|-------------|--------------|
| `.grid-pull-<count>` | @todo       | `responsive` |
| `.grid-push-<count>` | @todo       | `responsive` |
| `.grid-col-<count>`  | @todo       | `responsive` |
| `.grid-col-center`   | @todo       | `responsive` |
| `.grid-col-clear`    | @todo       | `responsive` |
| `.grid-col-left`     | @todo       | `responsive` |
| `.grid-col-no-clear` | @todo       | `responsive` |
| `.grid-col-right`    | @todo       | `responsive` |


## Examples

### Simple

<Preview>
  <div class="debug">
    <div class="grid">
      <div class="grid-row mb-2">
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
        <div class="grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-12">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
        </div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="grid">
  <div class="grid-row mb-2">
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
  </div>
  <div class="grid-row mb-2">
    <div class="grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
  </div>
  <div class="grid-row mb-2">
    <div class="grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
    <div class="grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
    <div class="grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
    <div class="grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
  </div>
  <div class="grid-row mb-2">
    <div class="grid-col-4">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
    </div>
    <div class="grid-col-4">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
    </div>
    <div class="grid-col-4">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
    </div>
  </div>
  <div class="grid-row mb-2">
    <div class="grid-col-6">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
    </div>
    <div class="grid-col-6">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
    </div>
  </div>
  <div class="grid-row mb-2">
    <div class="grid-col-12">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
    </div>
  </div>
</div>
```

### No gutter

<Preview>
  <div class="debug">
    <div class="grid grid-no-gutter">
      <div class="grid-row mb-2">
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
        <div class="grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-12">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
        </div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="grid grid-no-gutter">
  ...
</div>
```

### Nested

<Preview>
  <div class="debug">
    <div class="grid grid-nested">
      <div class="grid-row mb-2">
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
        <div class="grid-col-1">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
        <div class="grid-col-2">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
        <div class="grid-col-3">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
        <div class="grid-col-4">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
        <div class="grid-col-6">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
        </div>
      </div>
      <div class="grid-row mb-2">
        <div class="grid-col-12">
          <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
        </div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="grid grid-nested">
  ...
</div>
```
