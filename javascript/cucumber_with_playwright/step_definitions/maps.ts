import { Before, After, Given, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';


Before(async function () {
// After start
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
// After end
});
  
After(async function () {
// After start
    await this.page.close();
    await this.browser.close();
// After end
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

