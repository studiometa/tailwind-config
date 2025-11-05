# Tailwind config

[![NPM Version](https://img.shields.io/npm/v/@studiometa/tailwind-config.svg?style=flat&colorB=3e63dd&colorA=414853)](https://www.npmjs.com/package/@studiometa/tailwind-config/)
[![Downloads](https://img.shields.io/npm/dm/@studiometa/tailwind-config?style=flat&colorB=3e63dd&colorA=414853)](https://www.npmjs.com/package/@studiometa/tailwind-config/)
[![Size](https://img.shields.io/bundlephobia/minzip/@studiometa/tailwind-config?style=flat&colorB=3e63dd&colorA=414853&label=size)](https://bundlephobia.com/package/@studiometa/tailwind-config)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@studiometa/tailwind-config?style=flat&colorB=3e63dd&colorA=414853)](https://david-dm.org/studiometa/tailwind-config)

> A custom Tailwind CSS configuration that simply [replaces default breakpoints](./packages/tailwind-config/breakpoint.css) and [adds easings](./packages/tailwind-config/ease.css).

## Installation

Install the package:

```sh
npm install --save-dev @studiometa/tailwind-config
```

Add the configuration in your main css file after the import of Tailwind:

```diff
@import 'tailwindcss';
+@import '@studiometa/tailwind-config';
```

For more information about the installation and configuration of Tailwind, read the [official documentation](https://tailwindcss.com/docs/installation).

## Usage

### Custom breakpoints

- **xs**: `30rem` (480px) — Custom addition
- **s**: `40rem` (640px) — Same as Tailwind's **sm**
- **m**: `48rem` (768px) — Same as Tailwind's **md**
- **l**: `64rem` (1024px) — Same as Tailwind's **lg**
- **xl**: `80rem` (1280px) — Same as Tailwind's **xl**
- **2xl**: `96rem` (1536px) — Same as Tailwind's **2xl**
- **3xl**: `120rem` (1920px) — Custom addition

### File structure

We recommend using different folders to add your custom [styles](https://tailwindcss.com/docs/adding-custom-styles#using-custom-css), [utilities](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities) and [variants](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-variants).

Example structure and app.css:

```txt
bases/
├─ global.css
components/
├─ btn.css
utilities/
├─ inline-richtext.css
├─ richtext.css
variants/
├─ scroll-status.css
app.css
```

```css
/* External import */
@import url('https://fonts.cdnfonts.com/css/satoshi');

/* Tailwind and config */
@import 'tailwindcss';
@import '@studiometa/tailwind-config';

/* Theme */
@theme {
  --color-primary: red;
  --font-sans: 'Satoshi', sans-serif;
}

/* Base */
@import './bases/global.css';

/* Components */
@import './components/btn.css';

/* Utilities */
@import './utilities/inline-richtext.css';
@import './utilities/richtext.css';

/* Variants */
@import './variants/scroll-status.css';
```

You can also divide your theme vars in separate files.

## Migration from Tailwind v3

Coming from the old `tailwind.config.js` files ? Check out [our upgrade guide](./doc/migration/v2-to-v3.md).

## Contributing

This project uses [Git Flow](https://github.com/petervanderdoes/gitflow-avh) as a branching model.

You can test the compilation using the following commands:

```bash
# Start the dev server for the test's assets
$ npm run test:dev

# Build the test's assets
$ npm run test:build
```
