/**
 * Pairs two items and returns the result from the Infinite Craft API.
 * @param first - The first item.
 * @param second - The second item.
 * @returns A promise that resolves to an object with result, emoji, and isNew. On error, result and emoji are null, isNew is false.
 */
export function pair(first: string, second: string): Promise<{
	result: string | null,
	emoji: string | null,
	isNew: boolean
}>;

/**
 * Checks if a result is valid for a given pair of items.
 * @param first - The first item.
 * @param second - The second item.
 * @param result - The expected result.
 * @returns A promise that resolves to an object with valid and emoji. On error, valid is false and emoji is null.
 */
export function check(first: string, second: string, result: string): Promise<{
	valid: boolean,
	emoji: string | null
}>;
