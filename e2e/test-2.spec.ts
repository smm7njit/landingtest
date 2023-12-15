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

test('Test if second jumbotron subtext is not empty', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Discover our rewards program').click();
});

test('Test if Discover More button is functional', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Discover More' }).click();
});

test('Test if first social media link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('img').first().click();
});

test('Test if second social media link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('img').nth(1).click();
});

test('Test if third social media link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('img').nth(2).click();
});

test('Test cookie policy text visibility', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('We use cookies to improve').click();
});

test('Check cookie consent button functionlity', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Accept cookies').click();
});

test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'resume, jobs, career');
  await expect(metaKeywords).not.toBe('');
});




