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
import InfiniteCraftProxy from 'ic-proxy';

(async () => {
  // Create and initialize the instance using the static create() method.
  const api = await InfiniteCraftProxy.create();

  try {
    const pairResult = await api.pair('Water', 'Fire');
    console.log('Pair Result:', pairResult);

    const checkResult = await api.check('Fire', 'Water', 'Steam');
    console.log('Check Result:', checkResult);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await api.close();
  }
})();
```

### TypeScript

For TypeScript users, simply import and use the API as follows:

```ts
import InfiniteCraftProxy from 'ic-proxy';

(async () => {
  // Create and initialize the instance using the static create() method.
  const api = await InfiniteCraftProxy.create();

  try {
    const pairResult = await api.pair('Water', 'Fire');
    console.log('Pair Result:', pairResult);

    const checkResult = await api.check('Fire', 'Water', 'Steam');
    console.log('Check Result:', checkResult);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await api.close();
  }
})();
```

## API

### `create()`

Creates and initializes an instance of `InfiniteCraftProxy`.  
**Note:** Direct instantiation with `new InfiniteCraftProxy()` will throw an error.  
**Returns:** A promise that resolves to a fully initialized instance.

### `pair(first, second)`

- **Description:** Retrieves a pair result from the Infinite Craft API.
- **Parameters:**
  - `first` (string): The first item.
  - `second` (string): The second item.
- **Returns:** A promise that resolves to the pair result from the API, containing an object with `result`, `emoji`, and `isNew` properties.

### `check(first, second, result)`

- **Description:** Validates a result from the Infinite Craft API for a given pair of items.
- **Parameters:**
  - `first` (string): The first item.
  - `second` (string): The second item.
  - `result` (string): The expected result.
- **Returns:** A promise that resolves to the check result from the API, containing an object with `valid` and `emoji` properties.

### `close()`

- **Description:** Closes the Puppeteer browser instance.
- **Returns:** A promise that resolves once the browser is closed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
