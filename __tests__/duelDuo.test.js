const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
    await driver.quit();
});

describe("Duel Duo tests", () => {
  it("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  describe('Duel Duo tests', () => {
    it('should display the div with id="choices" after clicking the Draw button', async () => {
      await driver.get("http://localhost:8000");
      const drawButton = await driver.findElement(By.id('draw'));
      await drawButton.click();
      await driver.wait(until.elementLocated(By.id('choices')), 5000);
      const choicesDiv = await driver.findElement(By.id('choices'));
      const isDisplayed = await choicesDiv.isDisplayed();
      expect(isDisplayed).toBe(true);
    });
  describe('Duel Duo tests', () => {
    it('should put bot back into "choices" after removing bot', async () => {
      await driver.get("http://localhost:8000");
      const removeButton = await driver.findElement(By.id('bot-btn'));
      await removeButton.click();
      await driver.wait(until.elementLocated(By.id('choices')), 5000);
      const choicesDiv = await driver.findElement(By.id('choices'));
      const isDisplayed = await choicesDiv.isDisplayed();
      expect(isDisplayed).toBe(true);
    });
  });
  });
});
