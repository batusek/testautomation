import { test, expect } from '@playwright/test';

test('explore locators', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
});

test('search returns results', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
});
