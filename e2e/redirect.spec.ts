import { expect, test } from "@playwright/test";

test("/labs 以下のパスは https://sugarheart.utgw.net/labs にリダイレクトする", async ({ page }) => {
  await page.goto("http://localhost:3000/labs/tatsuya.htm");

  await expect(page).toHaveURL("https://sugarheart.utgw.net/labs/tatsuya.htm");
});
