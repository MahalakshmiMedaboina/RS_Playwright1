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
- [x] Running tests in headless and headed modes, and selecting a test file.
- [x] Using `test.only()` during development; remove it before expecting the full suite to run.

## Project Setup

Current tools and technologies:

- JavaScript
- Node.js and npm
- Playwright Test (`@playwright/test`)
- VS Code
- Git and GitHub Actions

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   └── UIBasicstests.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

Test runs also create ignored output in `test-results/` and `playwright-report/`.

## Commands Learned

Initialize a Playwright project:

```bash
npm init playwright
```

Run the tests headlessly (the default):

```bash
npx playwright test
```

Run the tests with the browser visible:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/UIBasicstests.spec.js
```

## Playwright Concepts Covered

- Playwright language bindings and the JavaScript-to-TypeScript course path
- Playwright Test imports, test structure, async functions, and `await`
- Test file naming with `.spec.js`
- Basic Playwright configuration and Chromium selection
- Headless versus headed execution
- Using `npx` to run the local Playwright installation
- `test.only()` for focused development runs

## Tests Implemented

[`tests/UIBasicstests.spec.js`](tests/UIBasicstests.spec.js) currently contains two browser-navigation tests:

- A browser-context test that opens the Rahul Shetty Academy practice login page.
- A page-fixture test that opens Google.

These tests currently verify page navigation only; they do not include assertions. The first test is marked with `test.only()`, so a normal Playwright run selects that test alone until the focus marker is removed.

## Upcoming Learning

- [ ] Add the next course topic here as I progress.

## Learning Approach

**Learn → Implement → Debug → Document → Commit**

## Progress Tracking

After each major course section, update the relevant checkbox in **Learning Progress**, add or revise implemented examples in **Tests Implemented**, and add the next topic under **Upcoming Learning**. Keep detailed explanations in Notion.
