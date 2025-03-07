import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  // After start
  // Excerpt start
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
  // Excerpt end
  // After end
});
