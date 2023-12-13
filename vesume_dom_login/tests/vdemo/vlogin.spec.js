import { test, expect } from '@playwright/test';
import { vLoginPage } from '../../pages/vlogin';

test('test', async ({ page }) => {

    const Login = new vLoginPage(page);
    await Login.gotovLoginPage();
    await Login.login("", "");

    // await page.goto('https://beta.vesume.net/');
    // await page.getByRole('link', { name: 'Log In' }).click();
    // await page.getByLabel('Email').click();
    // await page.getByLabel('Email').fill('kumar.shantanu');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('password');
    // await page.getByRole('button', { name: 'Log In' }).click();
    // await page.getByLabel('Email').fill('kumar.shantanu@vesume.net');
    // await page.getByLabel('Password').click();
    // await page.getByLabel('Password').fill('password');
    // await page.getByRole('button', { name: 'Log In' }).click();
    // await page.close();
});

test('test1', async ({ page }) => {

    const Login = new vLoginPage(page);
    await Login.gotovLoginPage();
    await Login.login("kumar.shantanu", "password");
});

test('test2', async ({ page }) => {

    const Login = new vLoginPage(page);
    await Login.gotovLoginPage();
    await Login.login("kumar.shantanu@vesume.net", "abdefghi");
    const errorMessageIsVisible = await vLoginPage.ErrorMessageVisible();
    expect(errorMessageIsVisible).toBe(true);
});

test('test3', async ({ page }) => {

    const Login = new vLoginPage(page);
    await Login.gotovLoginPage();
    await Login.login("kumar.shantanu@vesume.net", "password");
});