import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  workers: 1,

  use: {
    headless: false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
