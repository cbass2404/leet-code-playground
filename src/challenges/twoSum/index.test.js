const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: { nums: [2, 7, 11, 15], target: 9 }, result: [0, 1] },
  { input: { nums: [3, 2, 4], target: 6 }, result: [1, 2] },
  { input: { nums: [3, 3], target: 6 }, result: [0, 1] },
  { input: { nums: [1, 3, 4, 2], target: 6 }, result: [2, 3] },
];

describe.skip('Two Sum', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const sum = getResult(input.nums, input.target);

      expect(sum).to.deep.equal(result);
    });
  });
});
