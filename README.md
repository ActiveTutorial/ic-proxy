# Infinite Craft Proxy

A simple Node.js library to interact with the Infinite Craft API.

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

Alternatively, if you're using TypeScript, ensure you also install the necessary types for TypeScript users:

```sh
npm install git+https://github.com/ActiveTutorial/ic-proxy.git
```

## Usage

### JavaScript (ESM)

For JavaScript (ES modules) users:

```js
import { initializeIC, pair, check } from 'ic-proxy';

(async () => {
  await initializeIC();

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

### TypeScript

For TypeScript users, simply import and use the same functions. Type definitions are included with the package:

```ts
import { initializeIC, pair, check } from 'ic-proxy';

(async () => {
  await initializeIC();

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

### `initializeIC()`

Initializes the Puppeteer browser instance. This must be called before using other functions.

**Returns**: A promise that resolves once the browser is initialized.

### `pair(first, second)`

- **Description**: Gets a pair result from the Infinite Craft API (used when combining items).
- **Parameters**:
  - `first` (string): The first item.
  - `second` (string): The second item.
- **Returns**: A promise that resolves to the pair result from the API.

### `check(first, second, result)`

- **Description**: Checks the validity of a result from the Infinite Craft API for a given pair of items.
- **Parameters**:
  - `first` (string): The first item.
  - `second` (string): The second item.
  - `result` (string): The expected result.
- **Returns**: A promise that resolves to the check result from the API.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
