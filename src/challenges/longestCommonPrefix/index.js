/**
 * @param {string[]} strs
 * @return {string}
 */
// function longestCommonPrefix(strs) {
//   if (!strs.length) {
//     return '';
//   }
//   let prefix = '';

//   for (let idx = 0; idx < strs[0].length; idx++) {
//     if (strs.every((str) => str[idx] === strs[0][idx])) {
//       prefix += strs[0][idx];
//     } else {
//       break;
//     }
//   }

//   return prefix;
// }

function longestCommonPrefix(strs) {
  if (!strs.length) {
    return '';
  } else {
    let wasCommon = true;
    return strs[0].split('').reduce((prefix, char, idx) => {
      if (wasCommon && strs.every((str) => str[idx] === char)) {
        return (prefix += char);
      }
      wasCommon = false;
      return prefix;
    }, '');
  }
}

module.exports = longestCommonPrefix;
