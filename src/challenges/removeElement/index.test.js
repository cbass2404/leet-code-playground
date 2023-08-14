const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: { nums: [3, 2, 2, 3], val: 3 }, result: 2 },
  { input: { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 }, result: 5 },
];

describe('Remove Element', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const filteredList = getResult(input.nums, input.val);

      expect(filteredList).to.deep.equal(result);
    });
  });
});
