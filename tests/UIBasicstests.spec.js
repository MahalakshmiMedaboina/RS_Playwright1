const {test, expect} = require('@playwright/test');

test('Browser Context Playwright  test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // get the title of the page
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

});

test('Page Playwright test', async ({page}) => {

    await page.goto('https://google.com/');

    // get the title of the page
    console.log(await page.title());

    // assertion to check the title of the page
    await expect(page).toHaveTitle('Google');

});