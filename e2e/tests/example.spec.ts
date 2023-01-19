import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Root/);
});

test('should load tab with App1', async ({ page }) => {
  await page.goto('/app-1');

  // Expects the page to have text
  await expect(page.locator('text=This is the very beginning of app1')).toBeVisible();
});
