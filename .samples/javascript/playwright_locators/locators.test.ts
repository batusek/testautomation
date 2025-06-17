import { test, expect } from '@playwright/test';

test('explore locators', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
  // After start
  const heading = await page.getByRole("heading", {name: "OpenStreetMap logo"});
  await expect(heading).toBeVisible();

  const search = await page.getByRole("link", { name: "History" });
  await expect(search).toHaveAttribute("href","/history");
  // After end
});

test('search returns results', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
  // After start
  // const search_bar = await page.locator("#query");
  const search_bar = await page.getByRole("textbox", { name:"Search"} );
  search_bar.fill("Prague");

  const search_button = await page.getByRole("button", { name: "Go"} );
  search_button.click();

  const results = await page.locator('#sidebar_content');
  await expect(results).not.toBeEmpty();
  await expect(results.textContent).toBeDefined();
  // After end
});
