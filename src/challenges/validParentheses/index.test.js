const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: '()', result: true },
  { input: '()[]{}', result: true },
  { input: '(]', result: false },
  { input: '()[]{}}', result: false },
  { input: '{[]}', result: true },
];

describe.skip('Valid Parentheses', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const isValid = getResult(input);

      expect(isValid).to.deep.equal(result);
    });
  });
});
