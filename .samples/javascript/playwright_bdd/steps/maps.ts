import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('the map page is open', async ( {world} ) =>  {
// After start
    await world.page.goto('https://openstreetmap.org/');
// After end
});

Then('map container is visible', async ( {world} ) => {
// After start
    const map = await world.page.locator("#map");
    await expect(map).toBeVisible();
// After end
});

