const {test} = require('@playwright/test');

// if you want to run only this test, you can use test.only
// test.only('Browser Context Playwright  test', async ({browser}) => {
test.only('Browser Context Playwright  test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

});

test('Page Playwright test', async ({page}) => {

    await page.goto('https://google.com/');

});