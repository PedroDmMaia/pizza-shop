import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
})
