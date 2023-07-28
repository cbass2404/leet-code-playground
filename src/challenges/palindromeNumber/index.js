/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  return (
    x ==
    x
      .toString()
      .split('')
      .reduce((arr, i) => {
        arr.unshift(i);
        return arr;
      }, [])
      .join('')
  );
}

module.exports = isPalindrome;
