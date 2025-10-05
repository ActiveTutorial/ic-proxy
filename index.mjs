import {
  Session,
  ClientIdentifier,
  initTLS,
  destroyTLS,
} from "node-tls-client";

/**
 * Pairs two items and returns the result from the Infinite Craft API.
 * @param {string} first - The first item.
 * @param {string} second - The second item.
 * @returns {Promise<{result: string, emoji: string, isNew: boolean}>}
 */
export async function pair(first, second) {
  if (!first || !second) {
    throw new Error('Both "first" and "second" parameters are required.');
  }
  await initTLS();
  const session = new Session({
    clientIdentifier: ClientIdentifier.chrome_103,
    timeout: 5000,
  });
  const url = `https://neal.fun/api/infinite-craft/pair?first=${encodeURIComponent(first)}&second=${encodeURIComponent(second)}`;
  try {
    const response = await session.get(url, {
      headers: {
        "Referer": "https://neal.fun/infinite-craft/",
        "User-Agent": "M"
      }
    });
    const text = await response.text();
    return JSON.parse(text);
  } finally {
    await session.close();
    await destroyTLS();
  }
}

/**
 * Checks if a result is valid for a given pair of items.
 * @param {string} first - The first item.
 * @param {string} second - The second item.
 * @param {string} result - The expected result.
 * @returns {Promise<{valid: boolean, emoji: string}>}
 */
export async function check(first, second, result) {
  if (!first || !second || !result) {
    throw new Error('All "first", "second", and "result" parameters are required.');
  }
  await initTLS();
  const session = new Session({
    clientIdentifier: ClientIdentifier.chrome_103,
    timeout: 5000,
  });
  const url = `https://neal.fun/api/infinite-craft/check?first=${encodeURIComponent(first)}&second=${encodeURIComponent(second)}&result=${encodeURIComponent(result)}`;
  try {
    const response = await session.get(url, {
      headers: {
        "Referer": "https://neal.fun/infinite-craft/",
        "User-Agent": "M"
      }
    });
    const text = await response.text();
    return JSON.parse(text);
  } finally {
    await session.close();
    await destroyTLS();
  }
}
