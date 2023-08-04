const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: ['flower', 'flow', 'flight'], result: 'fl' },
  { input: ['dog', 'racecar', 'car'], result: '' },
];

describe('Longest Common Prefix', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const prefix = getResult(input);

      expect(prefix).to.deep.equal(result);
    });
  });
});
