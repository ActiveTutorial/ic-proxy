# Infinite Craft Proxy

A simple multi platform Node.js library to interact with the Infinite Craft API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Installation

You can install the library via npm from GitHub:

```sh
npm install git+https://github.com/ActiveTutorial/ic-proxy.git
```

## Usage

```ts
import { pair, check } from 'ic-proxy';

(async () => {
  try {
    const pairResult = await pair('Water', 'Fire');
    console.log('Pair Result:', pairResult);

    const checkResult = await check('Fire', 'Water', 'Steam');
    console.log('Check Result:', checkResult);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

## API

### `pair(first, second)`

- **Description:** Retrieves a pair result from the Infinite Craft API.
- **Parameters:**
  - `first` (string): The first item.
  - `second` (string): The second item.
- **Returns:** A promise that resolves to an object with `result`, `emoji`, and `isNew` properties. If the API returns an error (HTTP 500), the object will be `{ result: null, emoji: null, isNew: false }`.

### `check(first, second, result)`

- **Description:** Validates a result from the Infinite Craft API for a given pair of items.
- **Parameters:**
  - `first` (string): The first item.
  - `second` (string): The second item.
  - `result` (string): The expected result.
- **Returns:** A promise that resolves to an object with `valid` and `emoji` properties. If the API returns an error (HTTP 500), the object will be `{ valid: false, emoji: null }`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
