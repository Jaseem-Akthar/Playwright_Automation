const { test, expect } = require('@playwright/test');
// import { test, expect } from @playwright/test

// test('My First Test', async ({ page }) =＞ {
//     await page.goto('https://www.google.com');
//     await expect(page).toHaveTitle('Google');
// })

test('My First Test', async ({ page }) => {
    await page.goto('https://beta.vesume.net/');
    await page.getByRole('link', { name: 'Log In' }).click();
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('kumar.shantanu@vesume.net');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'Kumar Shantanu' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})

