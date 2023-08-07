const rosettaStone = {
  I: { code: 1, value: 1 },
  V: { code: 2, value: 5 },
  X: { code: 3, value: 10 },
  L: { code: 4, value: 50 },
  C: { code: 5, value: 100 },
  D: { code: 6, value: 500 },
  M: { code: 7, value: 1000 },
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
