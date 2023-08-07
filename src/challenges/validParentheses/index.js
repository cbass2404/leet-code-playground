const matchHash = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s.length % 2) {
    return false;
  }

  let validated = true;
  for (let idx = 0; idx < s.length; idx++) {
    const nextMatched = s[idx + 1] === matchHash[s[idx]];
    if (!nextMatched && s[s.length - idx - 1] !== matchHash[s[idx]]) {
      validated = false;
      break;
    }

    if (nextMatched) {
      idx++;
    }
  }

  return validated;
}

module.exports = isValid;
