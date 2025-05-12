import { Before, After, Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';

setDefaultTimeout(60000); 

Before(async function () {
    this.browser = await chromium.launch({ timeout: 20000, headless: false });
    this.page = await this.browser.newPage();
});
  
After(async function () {
    await this.page.close();
    await this.browser.close();
});

Given('the map page is open', async function () {
});

Then('map container is visible', async function () {
});

