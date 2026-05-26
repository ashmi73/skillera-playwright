import { test, expect } from '@playwright/test';

test('Trainer creates session and logs out', async ({ page }) => {

  await page.goto('https://skillera-saas-frontend.vercel.app/');

  // Login
  await page.getByRole('textbox', { name: 'Email Address' }).fill('rohit@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Navigation
  await page.locator('a').filter({ hasText: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Training Sessions' }).click();
  await page.getByRole('button', { name: 'Add Session' }).click();

  // START DATE
  await page.getByRole('button', { name: 'Pick a date' }).first().click();
  await page.locator('button[data-day="5/7/2026"]:visible').click();

  // END DATE (FIXED)
  await page.getByRole('button', { name: 'Pick a date' }).last().click();

  const endDate = page.locator('button[data-day="5/20/2026"]');
  await endDate.first().click();   

  // Time
  await page.getByText('Select time').first().click();
  await page.getByRole('button', { name: '03' }).click();

  await page.getByText('Select time').last().click();
  await page.getByRole('button', { name: '04' }).click();

  // Form fields
  await page.getByRole('textbox', { name: 'Topic *' }).fill('QA');
  await page.getByRole('textbox', { name: 'Description' }).fill('API Testing');

  // Batch
  await page.getByRole('combobox').filter({ hasText: 'Select batch' }).click();
  await page.getByRole('button', { name: 'Winter Batch' }).click();

  // Module
  await page.getByRole('combobox').filter({ hasText: 'Select module' }).click();
  await page.getByRole('button', { name: 'Communication Skills for QA' }).click();

  // Trainer
  await page.getByRole('combobox').filter({ hasText: 'Rohit Vermaa' }).click();
  await page.getByRole('button', { name: 'Rohit Vermaa' }).click();

  // Status
  await page.getByRole('combobox').filter({ hasText: 'Scheduled' }).click();
  await page.getByRole('button', { name: 'Scheduled' }).click();

  // Create session
  await page.getByRole('button', { name: 'Create Session' }).click();

  // Logout
  await page.getByRole('button', { name: 'RV Rohit Vermaa rohit@gmail.' }).click();
  await page.getByRole('menuitem', { name: 'Log out' }).click();
});