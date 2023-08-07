const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: 'III', result: 3 },
  { input: 'LVIII', result: 58 },
  { input: 'MCMXCIV', result: 1994 },
  { input: 'CMXICIV', result: 1013 },
];

describe('Roman Numeral to Number', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const sum = getResult(input);

      expect(sum).to.deep.equal(result);
    });
  });
});
