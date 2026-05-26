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

  const startDatePicker = page.locator('[role="dialog"]').last();

  await startDatePicker
    .locator('button[data-day="5/7/2026"]')
    .click();

  // END DATE
  await page.getByRole('button', { name: 'Pick a date' }).last().click();

  const endDatePicker = page.locator('[role="dialog"]').last();

  await endDatePicker
    .locator('button[data-day="5/20/2026"]')
    .click();

  // START TIME
  await page.getByText('Select time').first().click();

  const startTimeDropdown = page.locator('[role="dialog"]').last();

  await startTimeDropdown
    .getByRole('button', { name: '03' })
    .click();

  // END TIME
  await page.getByText('Select time').last().click();

  const endTimeDropdown = page.locator('[role="dialog"]').last();

  await endTimeDropdown
    .getByRole('button', { name: '04' })
    .click();

  // Form fields
  await page.getByRole('textbox', { name: 'Topic *' }).fill('QA');

  await page.getByRole('textbox', { name: 'Description' })
    .fill('API Testing');

  // Batch
  await page.getByRole('combobox')
    .filter({ hasText: 'Select batch' })
    .click();

  await page.getByRole('button', { name: 'Winter Batch' })
    .click();

  // Module
  await page.getByRole('combobox')
    .filter({ hasText: 'Select module' })
    .click();

  await page.getByRole('button', {
    name: 'Communication Skills for QA'
  }).click();

  // Trainer
  await page.getByRole('combobox')
    .filter({ hasText: 'Rohit Vermaa' })
    .click();

  await page.getByRole('button', {
    name: 'Rohit Vermaa'
  }).click();

  // Status
  await page.getByRole('combobox')
    .filter({ hasText: 'Scheduled' })
    .click();

  await page.getByRole('button', {
    name: 'Scheduled'
  }).click();

  // Create Session
  await page.getByRole('button', {
    name: 'Create Session'
  }).click();

  // Optional success assertion
  // await expect(page.getByText(/success/i)).toBeVisible();

  // Logout
  await page.getByRole('button', {
    name: /Rohit Vermaa/i
  }).click();

  await page.getByRole('menuitem', {
    name: 'Log out'
  }).click();
});