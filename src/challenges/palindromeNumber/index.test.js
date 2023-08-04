const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: 121, result: true },
  { input: -121, result: false },
  { input: 10, result: false },
];

describe.skip('Palindrom Number', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const isPalindrome = getResult(input);

      expect(isPalindrome).to.deep.equal(result);
    });
  });
});
