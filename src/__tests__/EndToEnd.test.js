import puppeteer from "puppeteer";

// Increase the timeout for the test suite
jest.setTimeout(60000); // 60 seconds timeout

describe("show/hide event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      /*headless: false,*/
      /*slowMo: 250, // slow down by 250ms,*/
      timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(async () => {
    await browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});

//------------------------------------------

describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      /*headless: false,*/
      /*slowMo: 250, // slow down by 250ms,*/
      timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });

  afterAll(async () => {
    await browser.close();
  });

  test("When user hasn’t searched for a city, show upcoming events from all cities", async () => {
    await page.waitForSelector(".event");
    const events = await page.$$(".event");
    expect(events.length).toBe(32); // assuming there are 32 events by default
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.waitForSelector("#city-search .city");
    await page.type("#city-search .city", "Berlin");
    await page.waitForSelector(".suggestions li", { visible: true });
    const suggestions = await page.$$(".suggestions li");
    expect(suggestions.length).toBeGreaterThan(0); // check if suggestions are shown
  });

  test("User can select a city from the suggested list", async () => {
    await page.waitForSelector("#city-search .city");
    await page.type("#city-search .city", "Berlin");
    await page.waitForSelector(".suggestions li", { visible: true });

    const suggestions = await page.$$(".suggestions li");
    for (let suggestion of suggestions) {
      const text = await page.evaluate((el) => el.textContent, suggestion);
      if (text === "Berlin, Germany") {
        await suggestion.click();
        break;
      }
    }

    // Adjust to select the correct value from the input field
    const selectedCity = await page.$eval(
      "#city-search .city",
      (el) => el.value
    );
    expect(selectedCity).toBe("Berlin, Germany");

    const events = await page.$$(".event");
    const berlinEvents = await Promise.all(
      events.map(async (event) => {
        const location = await event.$eval(
          ".event-location",
          (el) => el.textContent
        );
        return location.includes("Berlin, Germany");
      })
    );

    expect(berlinEvents.filter(Boolean).length).toBe(events.length);
  });
});
