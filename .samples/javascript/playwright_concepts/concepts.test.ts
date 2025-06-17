import { test, expect } from '@playwright/test';

test('first test to demonstrate playwright concepts', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
  const heading = await page.getByRole("heading", {name: "OpenStreetMap logo"});
  await expect(heading).toBeVisible();

  const search = await page.getByRole("link", { name: "About" });
  await expect(search).toHaveAttribute("href","/about");
});

test('second test to demonstrate playwright concepts', async( { page}) => {
  await page.goto('https://openstreetmap.org/');
    
  const heading = await page.getByRole("heading", {name: "OpenStreetMap logo"});
  await expect(heading).toBeVisible();


  const search = await page.getByRole("link", { name: "Help" });
  await expect(search).toHaveAttribute("href","/help");
});
