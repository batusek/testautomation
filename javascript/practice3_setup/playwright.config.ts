import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: '.',
  forbidOnly: !!process.env.CI,
  workers: 1,
  reporter: 'list',
  use: {
    headless: false,
    trace: 'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
      },
    },
  ],
});
