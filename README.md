# Infinite Craft Proxy

Simple Node.js library to interact with the Infinite Craft API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Installation

Install the library using npm:

```sh
npm install ic-proxy
```

## Usage

```javascript
const { initialize, getPair, checkResult } = require('ic-proxy');

(async () => {
  await initialize();

  try {
    const pairResult = await getPair('Water', 'Fire');
    console.log('Pair Result:', pairResult);

    const checkResult = await checkResult('Fire', 'Water', 'Steam');
    console.log('Check Result:', checkResult);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

## API

### `initialize()`

Initializes the Puppeteer browser instance. Must be called before using other functions.

### `getPair(first, second)`

- **Description**: Get a pair result from the Infinite Craft API (used when combining items).
- **Parameters**:
  - `first` (string): The first parameter.
  - `second` (string): The second parameter.
- **Returns**: A promise that resolves to the pair result.

### `checkResult(first, second, result)`

- **Description**: Check a result from the Infinite Craft API.
- **Parameters**:
  - `first` (string): The first parameter.
  - `second` (string): The second parameter.
  - `result` (string): The result parameter.
- **Returns**: A promise that resolves to the check result.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
