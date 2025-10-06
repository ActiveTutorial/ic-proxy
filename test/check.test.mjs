import { check } from '../index.mjs';

(async () => {
  try {
    const result = await check('Fire', 'Water', 'Steaam');
    console.log('Check Result:', result);
  } catch (err) {
    console.error('Check Test Error:', err);
  }
})();
