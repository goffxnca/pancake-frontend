# Contributing to the Pancake ecosystem 🥞

Thanks for taking the time to contribute !

- Before opening a pull request, please read the [contributing guidelines](https://github.com/pancakeswap/pancake-frontend/blob/master/CONTRIBUTING.md) first
- If your PR is work in progress, open it as `draft`
- Before requesting a review, all the checks need to pass
- Explain what your PR does

## Setup

Install the dependencies

```shell
pnpm i
pnpm dev
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Project structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **contexts** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.
- **pages** contains page components for next.js
- **middlewares** contains functions for intercepting requests, managing user sessions and applying custom routing logic.

## Tests

- Run overall unit tests locally with `pnpm test:ci`, which will execute available tests across all projects under `apps` directory.

- For configuration changes (e.g., farms and pools data), use `pnpm test:config` to verify consistency with on-chain data.

- For end-to-end testing, use `pnpm e2e:ci` to build the `web` app and run end to end tests under the `e2e` project on top of it.

> **Note:** Unit tests and configuration tests are automatically triggered during pull requests to `develop` or when configuration files are updated. However, running unit tests locally before opening a PR is recommended to catch issues early.

## Issue reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; create a [reduced test
   case](http://css-tricks.com/reduced-test-cases/) and a live example.

4. **Add attachments** &mdash; add photos or videos

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Template:

```
**Environment:**
Device and OS:
Browser:
Reproducibility rate:

**Steps to reproduce:**
1.
2.
3.

**Expected result:**
```
