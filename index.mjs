import { req } from "koffi-curl";

/**
 * Pairs two items and returns the result from the Infinite Craft API.
 * @param {string} first - The first item.
 * @param {string} second - The second item.
 * @returns {Promise<{result: string, emoji: string, isNew: boolean}>}
 */
export function pair(first, second) {
  if (!first || !second) {
    return Promise.reject(new Error('Both "first" and "second" parameters are required.'));
  }
  const url = `https://neal.fun/api/infinite-craft/pair?first=${encodeURIComponent(first)}&second=${encodeURIComponent(second)}`;
  return req.get(url, {
    impersonate: "chrome136",
    userAgent: "M",
    headers: {
      Referer: "https://neal.fun/infinite-craft/"
    }
  })
    .then(r => {
      if (r.data) {
        return typeof r.data === 'string' ? JSON.parse(r.data) : r.data;
      }
      throw new Error('Unexpected response format');
    });
}

/**
 * Checks if a result is valid for a given pair of items.
 * @param {string} first - The first item.
 * @param {string} second - The second item.
 * @param {string} result - The expected result.
 * @returns {Promise<{valid: boolean, emoji: string}>}
 */
export function check(first, second, result) {
  if (!first || !second || !result) {
    return Promise.reject(new Error('All "first", "second", and "result" parameters are required.'));
  }
  const url = `https://neal.fun/api/infinite-craft/check?first=${encodeURIComponent(first)}&second=${encodeURIComponent(second)}&result=${encodeURIComponent(result)}`;
  return req.get(url, {
    impersonate: "chrome136",
    userAgent: "M",
    headers: {
      Referer: "https://neal.fun/infinite-craft/"
    }
  })
    .then(r => {
      if (r.data) {
        return typeof r.data === 'string' ? JSON.parse(r.data) : r.data;
      }
      throw new Error('Unexpected response format');
    });
}
