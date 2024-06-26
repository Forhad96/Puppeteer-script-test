import puppeteer from "puppeteer";

async function run() {
  try {
    const browser = await puppeteer.launch({ headless: false }); // Set headless to false to see the browser actions
    const page = await browser.newPage();
    await page.goto("https://google.com");

    // Type the search query into the search box
     await page.type(".gLFyf", "https://www.facebook.com/entrptaher");

    // Press 'Enter' to perform the search
    await page.keyboard.press("Enter");

    // Wait for the search results to load
    await page.waitForSelector("h3");

    // Extract the titles of the search results
    const searchResults = await page.evaluate(() => {
      const results = [];
      const items = document.querySelectorAll("h3");
      items.forEach((item) => results.push(item.innerText));
      return results;
    });

    // Log the search results to the console
    console.log("Search Results:", searchResults);

    await browser.close();
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

run();
