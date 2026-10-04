# Playwright Learning Journey

## About This Repository

This repository contains my hands-on learning, examples, and automation scripts as I learn Playwright. It is an ongoing project, with detailed course notes maintained separately in Notion.

## Learning Goals

- Build practical browser automation skills with Playwright.
- Strengthen JavaScript fundamentals while learning the framework.
- Progress from JavaScript to TypeScript as the course advances.

## Learning Progress

- [x] Course overview and learning approach: Playwright has multiple language bindings; this course begins with JavaScript and later moves to TypeScript, learning JavaScript and Playwright in parallel.
- [x] Environment setup: Node.js, VS Code, and the purpose of the Node.js PATH/environment variable.
- [x] Project initialization with `npm init playwright`: selected JavaScript, the `tests` folder, and a GitHub Actions workflow.
- [x] Project structure: test files, Playwright configuration, npm manifests, dependencies, and the GitHub Actions workflow.
- [x] First test basics: `.spec.js` naming, importing `test` from `@playwright/test`, `test('name', async () => {})`, `async`/`await`, anonymous functions, and arrow functions.
- [x] Configuration basics: `defineConfig`, `testDir`, test and expect timeouts, browser name, reporter, and module export.
- [x] Browser configuration: selecting a browser engine by changing the `browserName` setting in `playwright.config.js`, and setting headed/headless execution.
- [x] Running tests in headless and headed modes, and selecting a test file.
- [x] Using `test.only()` during development; remove it before expecting the full suite to run.
- [x] Page-title checks using `page.title()` and Playwright's `expect(...).toHaveTitle()` assertion.
- [x] Locating form controls with CSS selectors, filling and clearing inputs, and collecting text from matching elements with `.allTextContents()`.
- [x] Checking invalid-login feedback and collecting course-link text after submitting credentials.
- [x] Logging in to the client application, waiting for network idle, and collecting product titles.

## Project Setup

Current tools and technologies:

- JavaScript
- Node.js and npm
- Playwright Test (`@playwright/test`)
- VS Code
- Git and GitHub Actions

Prerequisites: Node.js and npm. After cloning the repository, install the project dependencies and the Chromium browser used by the current configuration:

```bash
npm ci
npx playwright install chromium
```

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── ClientApp.spec.js
│   └── UIBasicstests.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

Test runs also create ignored output in `test-results/` and `playwright-report/`.

## Commands Learned

Initialize a new Playwright project (one-time scaffolding command):

```bash
npm init playwright
```

Run the tests:

```bash
npm test
```

The equivalent direct Playwright command is:

```bash
npx playwright test
```

Run the tests with the browser visible. The current configuration already runs headed; this flag also requests headed mode explicitly:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/UIBasicstests.spec.js
```

Run the client application test:

```bash
npx playwright test tests/ClientApp.spec.js
```

The configuration in `playwright.config.js` selects Chromium, runs headed locally, and switches to headless mode when the `CI` environment variable is set. The GitHub Actions workflow installs the browser dependencies and runs `npx playwright test`. Change `browserName` to select another installed browser engine.

> **Current focus:** Each spec file has a test marked with `test.only()`. Playwright currently runs these two focused tests. Remove `.only` when adding tests that should run as part of the full suite.

## Playwright Concepts Covered

- Playwright language bindings and the JavaScript-to-TypeScript course path
- Playwright Test imports, test structure, async functions, and `await`
- Test file naming with `.spec.js`
- Basic Playwright configuration, switching the selected browser engine for cross-browser checks, and headed/headless settings
- Headless versus headed execution
- Using `npx` to run the local Playwright installation
- `test.only()` for focused development runs
- Reading a page title with `page.title()` and checking it with `expect(...).toHaveTitle()`
- CSS locators for form controls, filling and clearing inputs, and collecting text from matching elements
- Asserting invalid-login feedback and collecting course-link text
- Waiting for `networkidle` and collecting product titles in the client application

## Tests Implemented

The `tests` directory currently contains two active tests:

- [`tests/UIBasicstests.spec.js`](tests/UIBasicstests.spec.js) opens the practice login page, checks its title, submits invalid credentials and asserts an "Incorrect" message, then submits another password and collects course-link text.
- [`tests/ClientApp.spec.js`](tests/ClientApp.spec.js) opens the client application, fills the login form, waits for network idle, and collects product titles from the page.

Both active tests use `test.only()` and run when the suite is executed. A Google page-title example remains commented out in `UIBasicstests.spec.js`. To check another browser, change the `browserName` setting in `playwright.config.js` and run the suite again.

## Upcoming Learning

- [ ] Add the next course topic here as I progress.

## Learning Approach

**Learn → Implement → Debug → Document → Commit**

## Progress Tracking

After each major course section, update the relevant checkbox in **Learning Progress**, add or revise implemented examples in **Tests Implemented**, and add the next topic under **Upcoming Learning**. Keep detailed explanations in Notion.
