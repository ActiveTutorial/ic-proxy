const { initialize, pair, check } = require('./lib/index');

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