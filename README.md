# 💌 Mailspring Libre

[![Linux & macOS build status](https://img.shields.io/travis/com/notpushkin/Mailspring-Libre?label=linux%20%26%20macos)](https://travis-ci.com/notpushkin/Mailspring-Libre)
[![Windows build status](https://img.shields.io/appveyor/build/notpushkin/Mailspring-Libre/master?label=windows)](https://ci.appveyor.com/project/notpushkin/mailspring-libre)

Mailspring is a email client that is fast, free and beautiful. This Libre build comes with no telemetry at all, and is still filled with powerful features you will love, like Unified Inbox, Snooze, Send Later, Mail Rules, Templates and more!

![Mailspring Screenshot](https://github.com/Foundry376/Mailspring/raw/master/screenshots/hero_graphic_mac%402x.png)

## Download Mailspring

N. B. Please note that **Mailspring Libre build isn't fully open source right now**: the sync engine, MailSync, is [proprietary](https://github.com/notpushkin/Mailspring-Libre/blob/master/LICENSE-mailsync.md), and while we're working on replacing it, it probably won't happen anytime soon. By downloading Mailspring Libre build, you accept the MailSync license (which doesn't affect you as a regular user).

You can download compiled versions of Mailspring Libre build for Linux (deb and rpm), macOS (dmg and zip), and Windows (exe and msi) from [GitHub Releases](https://github.com/notpushkin/Mailspring-Libre/releases/). There's also an [AUR package](https://aur.archlinux.org/packages/mailspring-libre/) maintained by [@Panzki](https://github.com/Panzki) (thanks!). Unstable releases are [available on Travis](https://github.com/notpushkin/Mailspring-Libre/issues/1#issuecomment-581483378).

## Contributing

Our UI is entirely open-source and pull requests and contributions are welcome! There are a few ways to contribute: building a plugin, building a theme, improving translations, and submitting pull requests to the project itself.

### Building A Plugin

Plugins lie at the heart of Mailspring and give it its powerful features. Building your own plugins allows you to integrate the app with other tools, experiment with new workflows, and more. Follow the [Getting Started guide](https://Foundry376.github.io/Mailspring/) to write your first plugin in five minutes.

- To create your own theme, check out the [Mailspring-Theme-Starter](https://github.com/Foundry376/Mailspring-Theme-Starter).

- To create your own plugin, check out the [Mailspring-Plugin-Starter](https://github.com/Foundry376/Mailspring-Plugin-Starter).

A plugin "store" like the Chrome Web Store is coming soon, and will make it easy for other users to discover plugins you create. (Right now, users need to "sideload" the plugins into the app by downloading them and copying them into place.)

### Building a Theme

The Mailspring user interface is styled using CSS, which means it's easy to modify and extend. Mailspring comes stock with a few beautiful themes, and there are many more which have been built by community developers. To start creating a theme, [clone the theme starter](https://github.com/Foundry376/Mailspring-Theme-Starter)!

If you are updating an existing Nylas theme for Mailspring here is a [step by step tutorial](https://foundry376.zendesk.com/hc/en-us/articles/115001918391-How-do-I-update-an-N1-Nylas-Mail-theme-for-Mailspring-). Notice: as part of the update process you will probably need to [import mailspring base variables](https://github.com/Foundry376/Mailspring/issues/326#issuecomment-343757775).

### Localizing / Translating

Mailspring 1.5.0 and above support localization. If you're a fluent speaker of another language, we'd love your help improving translations. Check out the [LOCALIZATION](https://github.com/notpushkin/Mailspring-Libre/blob/master/LOCALIZATION.md) guide for more information.

### Contributing to Mailspring Libre build

Pull requests are always welcome - check out [CONTRIBUTING](https://github.com/notpushkin/Mailspring-Libre/blob/master/CONTRIBUTING.md) for more information about setting up the development environment, running tests locally, and submitting pull requests.
