import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://openstreetmap.org/');
    
  const search_bar = await page.getByRole("textbox", { name:"Search"} );
  search_bar.fill("Olomouc");

  const search_button = await page.getByRole("button", { name: "Go"} );
  search_button.click();

});

test('search returns results', async( {page} ) => {
  const results = await page.locator('#sidebar_content');
  await expect(results).not.toBeEmpty();
  await expect(results.textContent).toBeDefined();
});

test('search changes url', async( {page} ) => {
  await page.locator('#sidebar_content');
  await page.waitForLoadState('networkidle');
  await expect(page.url()).toContain("49.");
});
