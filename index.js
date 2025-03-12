const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3001;

let browser;
let page;

(async () => {
  // Launch Puppeteer once and reuse it for multiple requests
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  console.log('Puppeteer browser launched');
})();

app.get('/pair', async (req, res) => {
  const { first, second } = req.query; // Get 'first' and 'second' from the query string

  if (!first || !second) {
    return res.status(400).json({ error: 'Both "first" and "second" parameters are required.' });
  }

  try {
    // Set useragent to "M", which is all that cloudflare checks
    await page.setUserAgent('M');

    // Build the URL with the dynamic 'first' and 'second' parameters
    const url = `https://neal.fun/api/infinite-craft/pair?ref=app&first=${first}&second=${second}`;

    // Navigate to the URL
    const response = await page.goto(url);

    // Get the body of the response
    const body = await response.json();

    // Send the response body as the response to the client
    res.json(body);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Example usage:
// http://localhost:3001/pair?first=React&second=Vue