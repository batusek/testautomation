import { test, expect } from '@playwright/test';

test('explore locators', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
  const heading = await page.getByRole("heading", {name: "OpenStreetMap logo"});
  await expect(heading).toBeVisible();

  const search = await page.getByText("History");
  await expect(search).toHaveAttribute("id","history_tab");
});

test('search returns results', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
  const search_bar = await page.getByRole("textbox", { name:"Search"} );
  search_bar.fill("Prague");

  const search_button = await page.getByRole("button", { name: "Go"} );
  search_button.click();

  //Wait for the search results to load (we will deal with timeouts later)
  await page.waitForTimeout(1000);

  const results = await page.locator('#sidebar_content');
  await expect(results).not.toBeEmpty();
  await expect(results.textContent).toBeDefined();
});
