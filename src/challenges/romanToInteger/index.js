const romanHash = {
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
    if (romanHash[arr[idx]] < romanHash[arr[idx + 1]]) {
      sum += romanHash[arr[idx + 1]] - romanHash[arr[idx]];
      idx++;
    } else {
      sum += romanHash[arr[idx]];
    }
  }

  return sum;
}

module.exports = romanToInt;
