const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 }, result: 4 },
  { input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 3 }, result: -1 },
  { input: { nums: [1], target: 0 }, result: -1 },
];

describe('Roman Numeral to Number', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const sum = getResult(input.nums, input.target);

      expect(sum).to.deep.equal(result);
    });
  });
});
