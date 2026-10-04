const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright  test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // get the title of the page
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    // Enter username and password 
    await page.locator('#username').fill('rahulshettyacademy'); // css selector of id
    page.locator('.')
    await page.locator("[type='password']").fill('Learning'); // css selector of an attribute
    await page.locator('#signInBtn').click(); // css selector of id
    console.log(await page.locator("[style*='block']").textContent()); // css selector of an attribute with partial match
    await expect(page.locator("[style*='block']")).toContainText('Incorrect'); // assertion to check the text of an element

});

test('Page Playwright test', async ({page}) => {

    await page.goto('https://google.com/');

    // get the title of the page
    console.log(await page.title());

    // assertion to check the title of the page
    await expect(page).toHaveTitle('Google');

});