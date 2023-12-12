const { test, expect } = require('@playwright/test');


test('My First Test', async ({ page }) => {
    await page.goto('https://beta.vesume.net/');
    await page.getByRole('link', { name: 'Log In' }).click();
    await page.getByLabel('Email').click();
    await page.getByLabel('Email').fill('kumar.shantanu@vesume.net');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('link', { name: 'Async' }).click();
    await page.getByRole('link', { name: 'Dummy Dec 05,' }).click();
    await page.getByRole('button', { name: 'Share' }).click();
    await page.getByRole('tab', { name: 'INVITE (WITH EMAIL)' }).click();
    await page.getByLabel('Remove user').click();
    await page.getByLabel('Add user').click();
    await page.locator('input[name="candidateDetails\\.0\\.firstName"]').click();
    await page.locator('input[name="candidateDetails\\.0\\.firstName"]').fill('jaseem');
    await page.locator('input[name="candidateDetails\\.0\\.lastName"]').click();
    await page.locator('input[name="candidateDetails\\.0\\.lastName"]').fill('akthar');
    await page.locator('input[name="candidateDetails\\.0\\.email"]').click();
    await page.locator('input[name="candidateDetails\\.0\\.email"]').fill('jaseemakthar50@gmail.com');
    await page.getByText('Decline').click();
    await page.getByRole('button', { name: 'Send' }).click();
    await page.locator('div').filter({ hasText: 'SHAREABLE LINKINVITE (WITH EMAIL)40SOCIAL MEDIAINTERVIEW NOW BUTTONPUBLIC' }).nth(2).click();
    await page.getByRole('tab', { name: 'SOCIAL MEDIA' }).click();
    await page.getByRole('tab', { name: 'INTERVIEW NOW BUTTON' }).click();
    await page.getByText('SHAREABLE LINKINVITE (WITH').click();
    await page.locator('div').filter({ hasText: 'SHAREABLE LINKINVITE (WITH EMAIL)40SOCIAL MEDIAINTERVIEW NOW BUTTONPUBLIC' }).nth(2).click();
    await page.close();
})

