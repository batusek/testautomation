import { test as base, createBdd } from 'playwright-bdd';

export const test = base.extend({
  world: async ({ page }, use) => {
    const world = {};
    await use(world);
  }
});

export const { Given, When, Then } = createBdd(test);