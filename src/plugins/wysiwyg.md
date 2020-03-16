# Tailwind Wysiwyg Plugin
The wysiwyg plugin is made to quickly have a nice looking content block with style for all the html markup using a small set a variables as configuration.

## Naming conventions
#### Heading markup
- h1
- h2
- h3
- h4
- h5
- h6

#### Text markup
- p
- blockquote

### List
- ol
- ul
- li

### Inline text markup
- a
- strong, b
- i, em
- small
- sup, sub
- del

### Media
- figure
- figcaption
- img
- iframe
- video

### Code
- pre
- code

### Other
- hr

### Should we support & style those
- table, th, tr, td, thead, tfoot, tbody ...
- dl, dt, dd
- cite
- abbr
- ins
- mark

## Configuration
### Default configuration
All properties have a default value that is required, and optionnal values **heading, list, link** (which fallback to default if not filled).

```js
wysiwygPlugin: theme => ({
  spacing: {
    default: theme('spacing.4'),
  },
  colors: {
    default: theme('colors.black'),
  },
  fontFamily: {
    default: theme('fontFamily.sans'),
  },
  lineHeight: {
    default: theme('lineHeight.normal'),
  },
  fontWeight: {
    default: theme('fontWeight.medium'),
  },
}),
```

### Colors
- default
- heading *(optionnal)*
- list *(optionnal)*
- link *(optionnal)*
- linkHover *(optionnal)*

```js
wysiwygPlugin: {
  colors: {
    default: theme('colors.customColor'),
    heading: theme('colors.customColor2'),
    list: theme('colors.customColor3'),
    link: theme('colors.customColor4'),
    linkHover: theme('colors.customColor5'  ),
  }
}
```

### Spacing
All spacings used are only using margin-bottom/padding-bottom properties to insure consistency.
- default
- heading *(optionnal)*
- list *(optionnal)*

Overriding configuration exemple:
```js
wysiwygPlugin: {
  spacing: {
    default: theme('spacing.6'),
    heading: theme('spacing.8'),
    list: theme('spacing.4'),
  }
}
```

### Font family
- default
- heading *(optionnal)*
- list *(optionnal)*
- link *(optionnal)*
> Find a way to use the extend property of [tailwind-css-typography](https://github.com/benface/tailwindcss-typography#readme) to handle font sizes, weights, etc...

### Line height
- default
- heading *(optionnal)*
- list *(optionnal)*

### Font height
- default
- heading *(optionnal)*
- list *(optionnal)*
- link *(optionnal)*

---

