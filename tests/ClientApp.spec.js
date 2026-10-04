const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright  test', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('mahaa@gmail.com');
    await page.locator('#userPassword').fill('Learn@123');
    await page.locator('[value="Login"]').click();

    // wait for the network to be idle before proceeding to the next step
    await page.waitForLoadState('networkidle');

    // when the above line network doest work then we can use the below line to wait for the element to be visible
    // await page.locator('.card-body').first().waitFor({timeout: 3000});

    // get all the titles of products and print them
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);
})