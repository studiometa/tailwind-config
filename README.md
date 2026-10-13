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

Open pull requests against `main`.

You can test the compilation using the following commands:

```bash
# Start the dev server for the test's assets
$ npm run test:dev

# Build the test's assets
$ npm run test:build
```

### Changelog

Do not edit `CHANGELOG.md`. Each pull request adds a fragment in `.changelog/<slug>.md`, where the slug is the branch name without its prefix (`feature/new-easing` → `new-easing.md`). A fragment only contains `### Added|Changed|Deprecated|Removed|Fixed|Security|Dependencies` headings, each followed by its entries:

```markdown
### Added

- Add the `ease-in-out-back` easing

### Fixed

- Fix the value of the `3xl` breakpoint
```

Do not write the pull request number: the release adds it as `([#N])`. A pull request that changes `packages/tailwind-config/` needs a fragment, unless it has the `no-changelog` label (tests, tooling) or comes from Renovate or Dependabot. See [`weareikko/changelog`](https://github.com/weareikko/changelog) for the format.

### Release

Each merge into `main` releases with the `publish-and-release` workflow. When `.changelog/` has fragments, the workflow computes the next version from them, folds them into `CHANGELOG.md`, sets the version of the root and of all workspaces, commits `Release <version>`, tags `<version>` (no `v` prefix), creates the GitHub release and publishes to npm. Renovate and Dependabot pull requests merged since the previous release become `Dependencies` entries. Without fragments and without bot pull requests, the workflow releases nothing.

The version follows the entries: a breaking entry (`⚠️` or `Breaking:`) gives a major version, an `Added` entry a minor version, other entries a patch version. To force a bump, run the workflow by hand:

```bash
gh workflow run publish-and-release.yml -f version=major   # or minor / patch
```

To release prereleases, add a `.changelog/prerelease` file with one identifier (`alpha`, `beta` or `rc`): each merge then releases the next prerelease (`3.1.0-beta.0`), published with the `next` npm tag and marked as a prerelease on GitHub. Delete the file to release the stable version. See [Prereleases](https://github.com/weareikko/changelog#prereleases).

npm trusted publishing (OIDC) publishes the package: the workflow uses no npm token. It is bound to the `publish-and-release.yml` file name, so keep the publish job in this file. If the publish job fails, use "Re-run failed jobs": a version that npm already has is skipped.
