const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright  test', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username'); // css selector of id
    const password = page.locator("[type='password']"); // css selector of an attribute
    const signInButton = page.locator('#signInBtn');  // css selector of id
    const cardTitles = page.locator('.card-body a'); // css selector of a class with a child element

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

    // assertion to check the title of the page
    console.log(await cardTitles.first().textContent()); // get the text of the first element in the locator
    // console.log(await cardTitles.nth(1).textContent()); // get the text of the second element in the locator
    // console.log(await cardTitles.last().textContent()); // get the text of the last element in the locator

    // get all the titles of the cards and print them
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

// test('Page Playwright test', async ({page}) => {

//     await page.goto('https://google.com/');

//     // get the title of the page
//     console.log(await page.title());

//     // assertion to check the title of the page
//     await expect(page).toHaveTitle('Google');

// });