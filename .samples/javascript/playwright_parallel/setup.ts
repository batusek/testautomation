import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
    await page.goto('/login');
    const username = await page.getByRole("textbox", { name:"username"} );
    await username.fill("TestAutomationUser");
  
    const password = await page.getByRole("textbox", { name:"password"} );
    await password.fill("xxx");
    // await page.waitForTimeout(500);
    
    const authFile = '.auth/user.json';
    await page.context().storageState({ path: authFile });
  
    // const login = await page.locator("[type=submit]");
    const login = await page.getByRole("button", { name: "Log in"} );
    await login.click();
  });
