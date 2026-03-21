import { expect, test } from "@playwright/test";

test("title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  expect(await page.title()).toBe("utgw.net");
});

test("OGP", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "utgw.net",
  );
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    "utgw.net",
  );
});

test("Twitter", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    "content",
    "utgw.net",
  );
  await expect(
    page.locator('meta[name="twitter:description"]'),
  ).toHaveAttribute("content", "utgw.net");
});

test("format-detection", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.locator('meta[name="format-detection"]')).toHaveAttribute(
    "content",
    "telephone=no",
  );
});

test("「時間のないサイト運営者リング」のバナーがある", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const imgSrc = await page
    .locator('a[href="https://sites.google.com/view/happy-busy/"] img')
    .getAttribute("src");

  const imgUrl = new URL(imgSrc, "http://localhost:3000");
  const resp = await page.goto(imgUrl.toString());
  expect(resp.ok(), "バナー画像がリンク切れしていない").toBe(true);
});
