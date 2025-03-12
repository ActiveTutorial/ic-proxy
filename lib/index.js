const puppeteer = require('puppeteer');

let browser;
let page;

const initialize = async () => {
  if (!browser) {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    console.log('Puppeteer browser launched');
  }
};

const pair = async (first, second) => {
  if (!first || !second) {
    throw new Error('Both "first" and "second" parameters are required.');
  }

  await page.setUserAgent('M');
  const url = `https://neal.fun/api/infinite-craft/pair?ref=app&first=${first}&second=${second}`;
  const response = await page.goto(url);
  return await response.json();
};

const check = async (first, second, result) => {
  if (!first || !second || !result) {
    throw new Error('All "first", "second", and "result" parameters are required.');
  }

  await page.setUserAgent('M');
  const url = `https://neal.fun/api/infinite-craft/check?ref=app&first=${first}&second=${second}&result=${result}`;
  const response = await page.goto(url);
  return await response.json();
};

module.exports = {
  initialize,
  pair,
  check,
};
