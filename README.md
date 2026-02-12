# React Native WebView

<!-- Status badges section (also double as links to related repos / CICD / etc.). -->
[![Latest NPM Release](https://img.shields.io/npm/v/@dr.pogodin/react-native-webview.svg)](https://www.npmjs.com/package/@dr.pogodin/react-native-webview)
[![NPM Downloads](https://img.shields.io/npm/dm/@dr.pogodin/react-native-webview.svg)](https://www.npmjs.com/package/@dr.pogodin/react-native-webview)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/birdofpreyru/react-native-webview/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/birdofpreyru/react-native-webview)
[![GitHub Repo stars](https://img.shields.io/github/stars/birdofpreyru/react-native-webview?style=social)](https://github.com/birdofpreyru/react-native-webview)
[![Dr. Pogodin Studio](https://raw.githubusercontent.com/birdofpreyru/react-native-webview/master/.README/logo-dr-pogodin-studio.svg)](https://dr.pogodin.studio/docs/react-native-webview)
<!-- End of status badges section. -->

This is a customized fork of the upstream
[react-native-webview](https://www.npmjs.com/package/react-native-webview)
library. It follows the latest upstream releases, and applies on top of them
selected fixes and PRs (the upstream maintainers just ignore all 3rd party
issues and PRs, and have a bad habit of just close down unresolved issues
and open PRs after some time).

[![Sponsor](https://raw.githubusercontent.com/birdofpreyru/react-native-webview/master/.README/sponsor.svg)](https://github.com/sponsors/birdofpreyru)

### Sponsored By
<table>
  <tr>
    <td width="150px">
      <a href="https://github.com/digitalfabrik/integreat-app">
        <img
          alt="Integreat App"
          src="https://raw.githubusercontent.com/birdofpreyru/react-native-static-server/master/.README/logo-integreat.svg"
          width="100%"
          height="auto"
        >
      </a>
    </td>
    <td>
      <a href="https://github.com/digitalfabrik/integreat-app">Integreat</a>
      sponsored the effort to fix
      <a href="https://github.com/react-native-webview/react-native-webview/issues/3014">
        the upstream issue #3014
      </a>.
    </td>
  </tr>
</table>

### Current Differences from the Upstream
- [Upstream issue #3014](https://github.com/react-native-webview/react-native-webview/issues/3014)
  / [Upstream PR #3575](https://github.com/react-native-webview/react-native-webview/pull/3575)
  &mdash; **Android:** Accept the input focus only when a touch on WebView hits
  a focusable (text input) element inside the WebView's content.

- [Upstream issue #3289](https://github.com/react-native-webview/react-native-webview/issues/3289)
  / [Upstream PR #3290](https://github.com/react-native-webview/react-native-webview/pull/3290)
  &mdash; **Android:** Trigger `onError` callback on asset loading errors.

- [Upstream issue #3317](https://github.com/react-native-webview/react-native-webview/issues/3317)
  / [Upstream PR #3318](https://github.com/react-native-webview/react-native-webview/pull/3318) &mdash; **Android, iOS, macOS:** Support of `window.print()` function.

- Scaffolding of [Example App in the repo](https://github.com/birdofpreyru/react-native-webview/tree/master/example)
  is reset to that used by [creact-react-native-library](https://www.npmjs.com/package/create-react-native-library).

- Some dependencies are updated to their newer versions.

### How To Migrage

To use this fork, remove the original `react-native-webview` dependency from
your `package.json`, then install the forked package
```shell
yarn add @dr.pogodin/react-native-webview
```
then replace `react-native-webview` imports in your TypeScript code by
`@dr.pogodin/react-native-webview` imports.

---

**React Native WebView** is a community-maintained WebView component for React Native. It is intended to be a replacement for the built-in WebView (which was [removed from core](https://github.com/react-native-community/discussions-and-proposals/pull/3)).

### Maintainers

**Many thanks to these companies** for providing us with time to work on open source.  
Please note that maintainers spend a lot of free time working on this too so feel free to sponsor them, **it really makes a difference.**

- [Thibault Malbranche](https://github.com/Titozzz) ([Twitter @titozzz](https://twitter.com/titozzz)) from [Brigad](https://www.brigad.co/en-gb/about-us)  
[*Sponsor me* ❤️ !](https://github.com/sponsors/Titozzz)


Windows and macOS are managed by Microsoft, notably:
- [Alexander Sklar](https://github.com/asklar) ([Twitter @alexsklar](https://twitter.com/alexsklar)) from [React Native for Windows](https://microsoft.github.io/react-native-windows/)
- [Chiara Mooney](https://github.com/chiaramooney) from [React Native for Windows @ Microsoft](https://microsoft.github.io/react-native-windows/)

Shout-out to [Jamon Holmgren](https://github.com/jamonholmgren) from [Infinite Red](https://infinite.red) for helping a lot with the repo when he had more available time.

### Disclaimer

Maintaining WebView is very complex because it is often used for many different use cases (rendering SVGs, PDFs, login flows, and much more). We also support many platforms and both architectures of react-native.

Since WebView was extracted from the React Native core, nearly 500 pull requests have been merged.  
Considering that we have limited time, issues will mostly serve as a discussion place for the community, while **we will prioritize reviewing and merging pull requests.** 

### Platform compatibility

This project is compatible with **iOS**,  **Android**, **Windows** and **macOS**.  
This project supports both **the old** (paper) **and the new architecture** (fabric).  
This project is compatible with [expo](https://docs.expo.dev/versions/latest/sdk/webview/).

### Getting Started

Read our [Getting Started Guide](docs/Getting-Started.md). If any step seems unclear, please create a pull request.

### Versioning

This project follows [semantic versioning](https://semver.org/). We do not hesitate to release breaking changes but they will be in a major version.

### Usage

Import the `WebView` component from `react-native-webview` and use it like so:

```tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
const MyWebComponent = () => {
  return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
}
```

For more, read the [API Reference](./docs/Reference.md) and [Guide](./docs/Guide.md). If you're interested in contributing, check out the [Contributing Guide](./docs/Contributing.md).

### Common issues

- If you're getting `Invariant Violation: Native component for "RNCWebView does not exist"` it likely means you forgot to run `react-native link` or there was some error with the linking process
- If you encounter a build error during the task `:app:mergeDexRelease`, you need to enable multidex support in `android/app/build.gradle` as discussed in [this issue](https://github.com/react-native-webview/react-native-webview/issues/1344#issuecomment-650544648)

#### Contributing

Contributions are welcome, see [Contributing.md](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Contributing.md)

### License

MIT

### Translations

This readme is available in:

- [Brazilian portuguese](docs/README.portuguese.md)
- [French](docs/README.french.md)
- [Italian](docs/README.italian.md)
