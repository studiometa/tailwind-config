---
sidebar: auto
prev: ./font-face.html
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
- Default : `''`

The prefix used by the plugin to prevent conflicts with other classes. It defaults to `legacy-`.

## Classes

### Container

|       Class       | Description | Variants |
|-------------------|-------------|----------|
| `.legacy-grid`           | @todo       | `[]`     |
| `.legacy-grid-nested`    | @todo       | `[]`     |
| `.legacy-grid-no-gutter` | @todo       | `[]`     |

### Row

|        Class        | Description |   Variants   |
|---------------------|-------------|--------------|
| `.legacy-grid-row`         | @todo       | `responsive` |
| `.legacy-grid-row-start`   | @todo       | `responsive` |
| `.legacy-grid-row-center`  | @todo       | `responsive` |
| `.legacy-grid-row-end`     | @todo       | `responsive` |
| `.legacy-grid-row-stretch` | @todo       | `responsive` |

### Columns

|        Class         | Description |   Variants   |
|----------------------|-------------|--------------|
| `.legacy-grid-pull-<count>` | @todo       | `responsive` |
| `.legacy-grid-push-<count>` | @todo       | `responsive` |
| `.legacy-grid-col-<count>`  | @todo       | `responsive` |
| `.legacy-grid-col-center`   | @todo       | `responsive` |
| `.legacy-grid-col-clear`    | @todo       | `responsive` |
| `.legacy-grid-col-left`     | @todo       | `responsive` |
| `.legacy-grid-col-no-clear` | @todo       | `responsive` |
| `.legacy-grid-col-right`    | @todo       | `responsive` |


## Examples

### Simple

<Preview>
  <div class="legacy-grid">
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-6">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
      </div>
      <div class="legacy-grid-col-6">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-12">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="legacy-grid">
  <div class="legacy-grid-row mb-2">
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="legacy-grid-col-1">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
  </div>
  <div class="legacy-grid-row mb-2">
    <div class="legacy-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="legacy-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="legacy-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="legacy-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="legacy-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
    <div class="legacy-grid-col-2">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
    </div>
  </div>
  <div class="legacy-grid-row mb-2">
    <div class="legacy-grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
    <div class="legacy-grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
    <div class="legacy-grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
    <div class="legacy-grid-col-3">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
    </div>
  </div>
  <div class="legacy-grid-row mb-2">
    <div class="legacy-grid-col-4">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
    </div>
    <div class="legacy-grid-col-4">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
    </div>
    <div class="legacy-grid-col-4">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
    </div>
  </div>
  <div class="legacy-grid-row mb-2">
    <div class="legacy-grid-col-6">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
    </div>
    <div class="legacy-grid-col-6">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
    </div>
  </div>
  <div class="legacy-grid-row mb-2">
    <div class="legacy-grid-col-12">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
    </div>
  </div>
</div>
```

### No gutter

<Preview>
  <div class="legacy-grid legacy-grid-no-gutter">
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-6">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
      </div>
      <div class="legacy-grid-col-6">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-12">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="legacy-grid legacy-grid-no-gutter">
  ...
</div>
```

### Nested

<Preview>
  <div class="legacy-grid legacy-grid-nested">
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
      <div class="legacy-grid-col-2">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">2</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
      <div class="legacy-grid-col-3">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">3</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
      <div class="legacy-grid-col-4">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">4</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-6">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
      </div>
      <div class="legacy-grid-col-6">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">6</div>
      </div>
    </div>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-12">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">12</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="legacy-grid legacy-grid-nested">
  ...
</div>
```

### Tailwind only equivalent

The grid plugin can be replaced with Tailwind utility classes for expert users:

<Preview>
  <div class="px-2 s:px-4 l:px-6 xxl:px-8">
    <p class="mb-2">Tailwind</p>
    <div class="clearfix -mx-2 s:-mx-4 l:-mx-6 xxl:-mx-8 mb-4">
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
  </div>
  <div class="legacy-grid">
    <p class="mb-2">Grid plugin</p>
    <div class="legacy-grid-row mb-2">
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
      <div class="legacy-grid-col-1">
        <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
      </div>
    </div>
  </div>
</Preview>

```html
<div class="px-2 s:px-4 l:px-6 xxl:px-8">
  <div class="clearfix -mx-2 s:-mx-4 l:-mx-6 xxl:-mx-8">
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
    <div class="w-1/12 float-left px-2 s:px-4 l:px-6 xxl:px-8">
      <div class="h-4 text-grey-600 bg-white flex items-center justify-center">1</div>
    </div>
  </div>
</div>
```
