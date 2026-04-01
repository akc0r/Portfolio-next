import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const locales = ["fr", "en"] as const;

for (const locale of locales) {
  test(`${locale.toUpperCase()} page exposes core landmarks and sections`, async ({ page }) => {
    await page.goto(`/${locale}`);

    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.getByRole("navigation", { name: /navigation|sections|section/i })).toBeVisible();

    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#skills")).toBeVisible();
    await expect(page.locator("#experience")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();

    const activeLanguageLink = page.locator('a[aria-current="page"]');
    await expect(activeLanguageLink).toHaveText(locale.toUpperCase());
  });
}

test("Keyboard users can jump directly to main content", async ({ page }) => {
  await page.goto("/fr");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", {
    name: /Aller au contenu principal|Skip to main content/i,
  });
  await expect(skipLink).toBeFocused();

  await skipLink.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("No critical or serious WCAG violations on FR homepage", async ({ page }) => {
  await page.goto("/fr");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();

  const criticalOrSerious = results.violations.filter(
    (violation) => violation.impact === "critical" || violation.impact === "serious",
  );

  expect(
    criticalOrSerious,
    criticalOrSerious
      .map((violation) => `${violation.id}: ${violation.help} (${violation.nodes.length} nodes)`)
      .join("\n"),
  ).toEqual([]);
});
