import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  // After start
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
  // After end
});
