import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'statement.feature',
  steps: '*.ts',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});