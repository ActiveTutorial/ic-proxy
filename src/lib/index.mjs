import puppeteer from 'puppeteer';

/** @type {puppeteer.Browser} */
let browser;
let page;

/**
 * Initializes the browser and page for API requests.
 */
export const initializeIC = async () => {
  if (!browser) {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    console.log('Puppeteer browser launched');
  }
};

/**
 * Pairs two items and returns the result from the Infinite Craft API.
 * @param {string} first
 * @param {string} second
 * @returns {Promise<{result: string, emoji: string, isNew: boolean}>}
 */
export const pair = async (first, second) => {
  if (!first || !second) {
    throw new Error('Both "first" and "second" parameters are required.');
  }

  await page.setUserAgent('M');
  const url = `https://neal.fun/api/infinite-craft/pair?ref=app&first=${first}&second=${second}`;
  const response = await page.goto(url);
  return await response.json();
};

/**
 * Checks if a result is valid for a given pair of items.
 * @param {string} first
 * @param {string} second
 * @param {string} result
 * @returns {Promise<{valid: boolean, emoji: string}>}
 */
export const check = async (first, second, result) => {
  if (!first || !second || !result) {
    throw new Error('All "first", "second", and "result" parameters are required.');
  }

  await page.setUserAgent('M');
  const url = `https://neal.fun/api/infinite-craft/check?ref=app&first=${first}&second=${second}&result=${result}`;
  const response = await page.goto(url);
  return await response.json();
};
