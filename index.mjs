import puppeteer from 'puppeteer';

class InfiniteCraftProxy {
  /** @type {puppeteer.Browser | null} */
  browser = null;
  /** @type {puppeteer.Page | null} */
  page = null;

  // Static flag to control instantiation
  static _allowInstantiation = false;

  constructor() {
    if (!InfiniteCraftProxy._allowInstantiation) {
      throw new Error('Use InfiniteCraftProxy.create() to instantiate this class.');
    }
  }

  /**
   * Creates and initializes an instance of InfiniteCraftProxy.
   * @returns {Promise<InfiniteCraftProxy>}
   */
  static async create() {
    InfiniteCraftProxy._allowInstantiation = true;
    const instance = new InfiniteCraftProxy();
    InfiniteCraftProxy._allowInstantiation = false;

    instance.browser = await puppeteer.launch({ headless: true });
    instance.page = await instance.browser.newPage();
    console.log('ic-proxy: Puppeteer browser launched');
    return instance;
  }

  /**
   * Pairs two items and returns the result from the Infinite Craft API.
   * @param {string} first - The first item.
   * @param {string} second - The second item.
   * @returns {Promise<{result: string, emoji: string, isNew: boolean}>}
   */
  async pair(first, second) {
    if (!first || !second) {
      throw new Error('Both "first" and "second" parameters are required.');
    }
    const url = `https://neal.fun/api/infinite-craft/pair?ref=app&first=${first}&second=${second}`;
    const response = await this.page.goto(url);
    return await response.json();
  }

  /**
   * Checks if a result is valid for a given pair of items.
   * @param {string} first - The first item.
   * @param {string} second - The second item.
   * @param {string} result - The expected result.
   * @returns {Promise<{valid: boolean, emoji: string}>}
   */
  async check(first, second, result) {
    if (!first || !second || !result) {
      throw new Error('All "first", "second", and "result" parameters are required.');
    }
    const url = `https://neal.fun/api/infinite-craft/check?ref=app&first=${first}&second=${second}&result=${result}`;
    const response = await this.page.goto(url);
    return response.json();
  }

  /**
   * Closes the Puppeteer browser instance.
   */
  async close() {
    if (this.browser) {
      await this.browser.close();
      console.log('Puppeteer browser closed');
      this.browser = null;
      this.page = null;
    }
  }
}

export default InfiniteCraftProxy;
