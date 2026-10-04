const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright  test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username'); // css selector of id
    const password = page.locator("[type='password']"); // css selector of an attribute
    const signInButton = page.locator('#signInBtn');  // css selector of id

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // get the title of the page
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

    // Enter username and password 
    await username.fill('rahulshettyacademy'); 
    await password.fill('Learning'); 
    await signInButton.click();
    console.log(await page.locator("[style*='block']").textContent()); // css selector of an attribute with partial match
    await expect(page.locator("[style*='block']")).toContainText('Incorrect'); // assertion to check the text of an element

    //fill
    await password.fill(''); // clear the password field
    await password.fill('Learning@830$3mK2');
    await signInButton.click();

    console.log(await page.locator('.card-body a').first().textContent()); // css selector of a class with a child element
    console.log(await page.locator('.card-body a').nth(1).textContent()); // css selector of a class with a child element and index
    console.log(await page.locator('.card-body a').last().textContent()); // css selector of a class with a child element and last index
});

test('Page Playwright test', async ({page}) => {

    await page.goto('https://google.com/');

    // get the title of the page
    console.log(await page.title());

    // assertion to check the title of the page
    await expect(page).toHaveTitle('Google');

});