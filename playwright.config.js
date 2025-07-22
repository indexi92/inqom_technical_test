// @ts-check
import {defineConfig, devices} from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [['html', {open: 'never'}], ['list']],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: process.env.HEADLESS !== 'false'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']}
    },

//   {
//      name: 'firefox',
//      use: {...devices['Desktop Firefox']}
//    },

//    {
//      name: 'webkit',
//      use: {...devices['Desktop Safari']}
//    }
  ]
});
