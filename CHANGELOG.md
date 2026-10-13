# Changelog

All notable changes to this project will be documented in this file. Each pull request adds a fragment in `.changelog/`; the publish-and-release workflow folds them in here. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 3.0.1 - 2026-10-13

### Changed

- Replace the `## [Unreleased]` section with `.changelog/` fragments checked on pull requests by `weareikko/changelog`, and release from the `publish-and-release` workflow, which bumps the version, folds the fragments into `CHANGELOG.md`, tags, publishes to npm and creates the GitHub release ([#137])

[#137]: https://github.com/studiometa/tailwind-config/pull/137

## [v3.0.0](https://github.com/studiometa/tailwind-config/pull/129) — 2025-11-05

### Added

- Add .github/renovate.json (cc2fb8b)
- Pin dependencies (e5710dc)

### Changed

- Update .nvmrc to node 24 (8aaf45f)
- ⚠️ Update custom breakpoints (deacc18)
- Update the readme and add an upgrade guide (7603414, 258112f, 197ebc2)
- Update the tests project to use the new configuration (94645c9)
- ⚠️ Migrate the configuration for Tailwind CSS v4 (75ffa07)
- Update dependency postcss to v8.4.38 (3159cfc)

### Removed

- Remove lint tools from the root package (0c6aac2)
- Remove the vuepress documentation (db2d0d3)
