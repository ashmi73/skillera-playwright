const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',   // 👈 IMPORTANT: allows trainer/ folder to be detected

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,

  reporter: 'html',

 use: {
  headless: process.env.CI ? true : false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});