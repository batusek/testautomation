import { test, expect } from '@playwright/test';

test('map exists', async ({ page }) => {
  await page.goto('https://openstreetmap.org/');

  const map = await page.locator("#map")
  await expect(map).toBeVisible();
});

