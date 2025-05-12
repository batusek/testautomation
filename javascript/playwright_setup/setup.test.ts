import { test, expect } from '@playwright/test';

test('map exists', async ( {page} ) => {
  await page.goto('https://openstreetmap.org/login');
  const username = await page.getByRole("textbox", { name:"username"} );
  await username.fill("TestAutomationUser");

  const password = await page.getByRole("textbox", { name:"password"} );
  await password.fill("xxx");
  
  // const login = await page.locator("[type=submit]");
  const login = await page.getByRole("button", { name: "Log in"} );
  await login.click();

  const authFile = '.auth/user.json';
  await page.context().storageState({ path: authFile });
  await page.goto('https://openstreetmap.org/');

  const map = await page.locator("#map")
  await expect(map).toBeVisible();
});

test('explore locators', async( {page} ) => {
  await page.goto('https://openstreetmap.org/login');
  const username = await page.getByRole("textbox", { name:"username"} );
  await username.fill("TestAutomationUser");

  const password = await page.getByRole("textbox", { name:"password"} );
  await password.fill("xxx");
  
  // const login = await page.locator("[type=submit]");
  const login = await page.getByRole("button", { name: "Log in"} );
  await login.click();

  const authFile = '.auth/user.json';
  await page.context().storageState({ path: authFile });
  await page.goto('https://openstreetmap.org/');
  
  const heading = await page.getByRole("heading", {name: "OpenStreetMap logo"});
  await expect(heading).toBeVisible();

  const search = await page.getByText("History");
  await expect(search).toHaveAttribute("id","history_tab");

});

test('search returns results', async( {page} ) => {
  await page.goto('https://openstreetmap.org/login');
  const username = await page.getByRole("textbox", { name:"username"} );
  await username.fill("TestAutomationUser");

  const password = await page.getByRole("textbox", { name:"password"} );
  await password.fill("xxx");
  
  // const login = await page.locator("[type=submit]");
  const login = await page.getByRole("button", { name: "Log in"} );
  await login.click();

  const authFile = '.auth/user.json';
  await page.context().storageState({ path: authFile });
  await page.goto('https://openstreetmap.org/');
    
  // const search_bar = await page.locator("#query");
  const search_bar = await page.getByRole("textbox", { name:"Search"} );
  search_bar.fill("Prague");

  const search_button = await page.getByRole("button", { name: "Go"} );
  search_button.click();

  const results = await page.locator('#sidebar_content');
  await expect(results).not.toBeEmpty();
  await expect(results.textContent).toBeDefined();
});
