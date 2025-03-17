declare class InfiniteCraftProxy {
  private constructor();

  /**
   * Creates and initializes an instance of InfiniteCraftProxy.
   * @returns A promise that resolves to a fully initialized instance.
   */
  static create(): Promise<InfiniteCraftProxy>;

  /**
   * Pairs two items and returns the result from the Infinite Craft API.
   * @param first - The first item.
   * @param second - The second item.
   * @returns A promise that resolves to the result from the API.
   */
  pair(first: string, second: string): Promise<{ result: string, emoji: string, isNew: boolean }>;

  /**
   * Checks if a result is valid for a given pair of items.
   * @param first - The first item.
   * @param second - The second item.
   * @param result - The expected result.
   * @returns A promise that resolves to the result from the API.
   */
  check(first: string, second: string, result: string): Promise<{ valid: boolean, emoji: string }>;

  /**
   * Closes the Puppeteer browser instance.
   */
  close(): Promise<void>;
}

export default InfiniteCraftProxy;
