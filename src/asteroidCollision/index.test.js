const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: [5, 10, -5], result: [5, 10] },
  { input: [8, -8], result: [] },
  { input: [10, 2, -5], result: [10] },
  { input: [-2, -1, 1, 2], result: [-2, -1, 1, 2] },
  { input: [-2, 2, -1, -2], result: [-2] },
  { input: [2, -1, -1, -2], result: [] },
];

describe('Asteroid Collision', () => {
  testCases.forEach(function (testCase) {
    return it(`${testCase.input}`, () => {
      const result = getResult(testCase.input);

      expect(result).to.deep.equal(testCase.result);
    });
  });
});
