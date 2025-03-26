import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  // After start
  forbidOnly: !!process.env.CI,
  workers: 1,
  reporter: 'list',
  retries: 2,
  use: {
    baseURL: 'https://openstreetmap.org/',
    trace: 'on-first-retry',
    headless: false
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
