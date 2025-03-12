# Infinite Craft Proxy

Simple Node.js proxy to interact with the Infinite Craft API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ActiveTutorial/ic-proxy.git
    cd ic-proxy
    ```

2. Install dependencies:
    ```sh
    npm i
    ```

## Usage

Start the server:
```sh
npm start
```

The server will run on `http://localhost:3001`.

## API Endpoints

### `/pair`

- **Description**: Get a pair result from the Infinite Craft API (used when combining items).
- **Method**: GET
- **Query Parameters**:
  - `first` (string): The first parameter.
  - `second` (string): The second parameter.
- **Example**:
  ```sh
  curl "http://localhost:3001/pair?first=Water&second=Fire"
  ```

### `/check`

- **Description**: Check a result from the Infinite Craft API.
- **Method**: GET
- **Query Parameters**:
  - `first` (string): The first parameter.
  - `second` (string): The second parameter.
  - `result` (string): The result parameter.
- **Example**:
  ```sh
  curl "http://localhost:3001/check?first=Fire&second=Water&result=Steam"
  ```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
