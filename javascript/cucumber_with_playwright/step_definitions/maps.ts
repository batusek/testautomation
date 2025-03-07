import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';


Before(async function () {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  });
  
After(async function () {
    await this.page.close();
    await this.browser.close();
});

Given('the map page is open', async function () {
// After start
    await this.page.goto('https://openstreetmap.org/');
// // After end
});

When('I inspect the content', function () {
});

Then('map container is visible', async function () {
    const map = await this.page.locator("#map");
    await expect(map).toBeVisible();
  });

