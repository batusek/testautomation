import { Before, After, Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';

setDefaultTimeout(60000); 

Before(async function () {
    this.browser = await chromium.launch({ timeout: 20000 });
    this.page = await this.browser.newPage();
});
  
After(async function () {
    await this.page.close();
    await this.browser.close();
});

Given('the map page is open', async function () {
// After start
    await this.page.goto('https://openstreetmap.org/');
// After end
});

Then('map container is visible', async function () {
// After start
    const map = await this.page.locator("#map");
    await expect(map).toBeVisible();
// After end
});

