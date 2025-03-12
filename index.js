const { initializeIC, pair, check } = require('./lib/index');

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