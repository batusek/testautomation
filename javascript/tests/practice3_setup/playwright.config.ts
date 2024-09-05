import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: '.',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    // baseURL: 'http://127.0.0.1:3000',

    trace: 'on-first-retry',
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /setup\.ts/ },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
        storageState: '.auth/user.json' 
      },
      dependencies: ['setup']
    },
  ],
});
