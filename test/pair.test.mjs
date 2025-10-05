import { pair } from '../index.mjs';

(async () => {
  try {
    const result = await pair('Water', 'Fire');
    console.log('Pair Result:', result);
  } catch (err) {
    console.error('Pair Test Error:', err);
  }
})();
