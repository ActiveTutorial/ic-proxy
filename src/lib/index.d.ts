import puppeteer from 'puppeteer';

/**
 * Initializes the browser and page for API requests.
 */
export declare const initializeIC: () => Promise<void>;

/**
 * Pairs two items and returns the result from the Infinite Craft API.
 * @param first - The first item.
 * @param second - The second item.
 * @returns A promise that resolves to the result from the API.
 */
export declare const pair: (first: string, second: string) => Promise<any>;

/**
 * Checks if a result is valid for a given pair of items.
 * @param first - The first item.
 * @param second - The second item.
 * @param result - The expected result.
 * @returns A promise that resolves to the result from the API.
 */
export declare const check: (first: string, second: string, result: string) => Promise<any>;
