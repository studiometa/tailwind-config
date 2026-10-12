### Changed

- Replace the `## [Unreleased]` section with `.changelog/` fragments checked on pull requests by `weareikko/changelog`, and release from the `publish-and-release` workflow, which bumps the version, folds the fragments into `CHANGELOG.md`, tags, publishes to npm and creates the GitHub release
