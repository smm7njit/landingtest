import { test, expect } from '@playwright/test';

test('Test hero section text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('When it comes to drinks,').click();
});

test('Check link to Newsletter works', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'More' }).click();
});

test('Check if newsletter page text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Sign up for newsletters and' }).click();
});
