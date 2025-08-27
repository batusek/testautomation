import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: 'sample.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});