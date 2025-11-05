# Upgrade guide

Here is a list of solutions to keep features of the `@studiometa/tailwind-config` v2 after the migration.

Before upgrading [check the compatibility](https://tailwindcss.com/docs/compatibility) of Tailwind v4 with your project. For all changes between Tailwind v3 and Tailwind v4, refer to the [official upgrade guide](https://tailwindcss.com/docs/upgrade-guide).

> [!IMPORTANT]
> Tailwind CSS v4.0 is a full-featured CSS build tool designed for a specific workflow, and is [not designed to be used with CSS preprocessors](https://tailwindcss.com/docs/compatibility#sass-less-and-stylus.) like Sass, Less, or Stylus.

## Theme

### Screens

Breakpoints now matches with the default configuration with custom names and additional values:

```diff
- xxs: 0px
- xs: 480px
+ xs: 30rem (480px)
- s: 768px
+ s: 40rem (640px)
- m: 1024px
+ m: 48rem (768px)
- l: 1280px
+ l: 64rem (1024px)
- xl: 1440px
+ xl: 80rem (1280px)
- xxl: 1920px
+ 2xl: 96rem (1536px)
- xxxl: 2560px
+ 3xl: 120rem (1920px)
```

### Layers

Custom layers (z-indexes) declaration has been removed because Tailwind v4 [handle them natively](https://tailwindcss.com/docs/z-index).

### Transition timing function

In addition to the [default values](https://tailwindcss.com/docs/transition-timing-function), our custom timing functions are unchanged, check the [declaration](../packages/tailwind-config/ease.css).

### Top / Right / Bottom / Left

Custom inset values declaration has been removed because Tailwind v4 [handle them natively](https://tailwindcss.com/docs/top-right-bottom-left).

## Plugins

All plugins have been removed, check the reasons and alternative solutions below.

### Breakpoint

The breakpoint plugin was used for the breakpoint recognition in the `@studiometa/js-toolkit` but is no longer used since the [usage of a config object](https://js-toolkit.studiometa.dev/guide/migration/v2-to-v3.html#breakpoints-are-no-longer-read-from-the-dom).

### Font-Face

Manual [`@font-face`](https://developer.mozilla.org/fr/docs/Web/CSS/%40font-face) declaration takes the same amount of time and many projects use remote font CDN.

### Float Grid

Our legacy (float) grid plugin has been removed because modern projects use grid or flex layouts.

### Custom container

The core container plugin has been [removed in Tailwind v4](https://tailwindcss.com/docs/upgrade-guide#container-configuration) and our custom container plugin too.
Use a custom utility instead:

```css
@utility container {
  max-width: 90rem;
  margin-inline: auto;
  padding-inline: 2rem;
  @screen m {
    padding-inline: 4rem;
  }
}
```

### Variant factory

Use the simple [custom variant native declaration](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-variants) instead. Note that the [direct children selector variant](https://tailwindcss.com/docs/hover-focus-and-other-states#child-selectors) is native in Tailwind for a while.

Example with a "hocus" variant:

```css
@custom-variant hocus {
  &:hover, &:focus {
    @slot;
  }
}
```

### Typography

This third party plugin can be replaced with custom utilities:

Simple utility:

```css
@utility type-h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
/* or */
@utility type-h2 {
  @apply text-lg font-bold tracking-wide;
}
```

More complex utility using the theme configuration:

```css
@theme {
  --type-size-h1: 4rem;
  --type-height-h1: 1.2;
  --type-weight-h1: 700;
  --type-spacing-h1: -0.02em;

  --type-size-h2: 3rem;
  --type-height-h2: 1.2;
  --type-weight-h2: 500;
}

@utility type-* {
  font-size: --value(--type-size-*);
  line-height: --value(--type-height-*);
  font-weight: --value(--type-weight-*);
  letter-spacing: --value(--type-spacing-*);
}
```
