const { test, expect } = require('@playwright/test');

const landingURL = 'http://localhost:3000';

test('Check if Main Page text is present', async ({ page }) => {
    await page.goto(landingURL);
    await page.getByText('Our Soda Brand').click();
  });

test('Check if More link goes to Newsletter', async ({ page }) => {
  await page.goto(landingURL);
  await page.getByRole('link', { name: 'More' }).click();
});

test('Check if Newsletter text is present', async ({ page }) => {
    await page.goto(landingURL);
    await page.getByText('Sign up for newsletters and our rewards program here:Submit').click();
  });