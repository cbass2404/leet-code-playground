const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: { nums: [2, 7, 11, 15], target: 9 }, result: [0, 1] },
  { input: { nums: [3, 2, 4], target: 6 }, result: [1, 2] },
  { input: { nums: [3, 3], target: 6 }, result: [0, 1] },
  { input: { nums: [1, 3, 4, 2], target: 6 }, result: [2, 3] },
];

describe('Asteroid Collision', () => {
  testCases.forEach(function (testCase) {
    return it(`${testCase.input}`, () => {
      const result = getResult(testCase.input.nums, testCase.input.target);

      expect(result).to.deep.equal(testCase.result);
    });
  });
});
