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
    trace: 'on-first-retry'
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
