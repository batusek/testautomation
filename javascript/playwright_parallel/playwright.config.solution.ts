import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  // After start
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 3,
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'https://openstreetmap.org/',
    // headless: false,
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
  // After end
});
