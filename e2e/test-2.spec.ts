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

test('Check if email box placeholder is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Your email').click();
});

test('Check if Home link functions', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Home' }).click();
});

test('Check if second part of hero section is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('we\'re tonic artisans.').click();
});

test('Check if subtext of hero section is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('We always guarantee that our').click();
});

test('Check if first jumbotron component is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('[id="__next"] div').filter({ hasText: 'When it comes to drinks,we\'re' }).nth(2).click();
});

test('Check if second jumbotron component is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('[id="__next"] div').filter({ hasText: 'Drink. Shop.Taste. Smile.' }).nth(2).click();
});

test('Check if top half of second jumbotron header text is not empty', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Drink. Shop.').click();
});

