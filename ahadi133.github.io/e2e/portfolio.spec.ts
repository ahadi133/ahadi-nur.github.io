import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("renders the hero and every section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Business Analyst",
    );
    for (const name of [
      "About Me",
      "Analysis Work",
      "My Projects",
      "Certificates",
      "Get In Touch",
    ]) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeAttached();
    }
  });

  test("sections fade in when scrolled into view", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { level: 2, name: "About Me" });
    await heading.scrollIntoViewIfNeeded();
    // Playwright treats opacity: 0 as visible, so assert the reveal finished.
    await expect(heading).toHaveCSS("opacity", "1");
    await expect
      .poll(() => heading.evaluate((el) => getComputedStyle(el.parentElement!).opacity))
      .toBe("1");
  });

  test("nav links scroll to their sections", async ({ page, isMobile }) => {
    await page.goto("/");
    if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
    const nav = page.getByRole("banner");
    await nav.getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(
      page.getByRole("heading", { level: 2, name: "My Projects" }),
    ).toBeInViewport();
  });

  test("case-study modal opens and closes with the keyboard", async ({ page }) => {
    await page.goto("/#projects");
    const trigger = page.getByRole("button", { name: "Read Case Study" }).first();
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toContainText("Business implication");
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("contact section links to email and LinkedIn", async ({ page }) => {
    await page.goto("/#contact");
    const contact = page.locator("#contact");
    await expect(contact.getByRole("link", { name: "Email Me" })).toHaveAttribute(
      "href",
      "mailto:ahadi.nur36@gmail.com",
    );
    await expect(
      contact.getByRole("link", { name: "Message on LinkedIn" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/ahadi-nur-m8055aan/");
  });
});

test.describe("project pages", () => {
  test("a case-study page renders", async ({ page }) => {
    await page.goto("/projects/party-location-decision-model");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Party Location");
    await expect(page.getByRole("table")).toBeVisible();
    await expect(page.getByRole("slider")).toBeVisible();
  });

  test("an unknown slug shows the 404 page", async ({ page }) => {
    const response = await page.goto("/projects/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  });
});
