const rosettaStone = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const arr = s.split('');
  let sum = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] !== 'I' && arr[idx - 1] === 'I') {
      sum -= 1;
    }
    sum += rosettaStone[arr[idx]];
  }

  return sum;
}

module.exports = romanToInt;
