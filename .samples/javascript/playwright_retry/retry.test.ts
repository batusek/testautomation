import { test, expect } from '@playwright/test';

test('map exists', async ( {page} ) => {
  await page.goto('/');

  const map = await page.locator("#map")
  await expect(map).toBeVisible();

  const situation = Math.random();
  if (situation<0.3)
    await expect(true).toBeFalsy();

});

test('explore locators', async( {page} ) => {
  await page.goto('/');
  
  const heading = await page.getByRole("heading", {name: "OpenStreetMap logo"});
  await expect(heading).toBeVisible();

  const history = await page.locator("#history_tab")
  await expect(history).toBeVisible();
});

test('search returns results', async( {page} ) => {
  await page.goto('/');
    
  // const search_bar = await page.locator("#query");
  const search_bar = await page.getByRole("textbox", { name:"Search"} );
  search_bar.fill("Prague");

  const search_button = await page.getByRole("button", { name: "Go"} );
  search_button.click();

  const results = await page.locator('#sidebar_content');
  await expect(results).not.toBeEmpty();
  await expect(results.textContent).toBeDefined();
});
