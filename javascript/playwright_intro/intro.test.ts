import { test, expect } from '@playwright/test';

test('map exists', async ({ page }) => {
  await page.goto('https://openstreetmap.org/');

});

