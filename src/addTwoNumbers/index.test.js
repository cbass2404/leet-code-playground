const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  {
    input: {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
    },
    result: [7, 0, 8],
  },
  {
    input: {
      l1: [0],
      l2: [0],
    },
    result: [0],
  },
  {
    input: {
      l1: [9, 9, 9, 9, 9, 9, 9],
      l2: [9, 9, 9, 9],
    },
    result: [8, 9, 9, 9, 0, 0, 0, 1],
  },
];

describe('Add Two Numbers', () => {
  testCases.forEach(function (testCase) {
    return it(`${testCase.input}`, () => {
      const result = getResult(testCase.input.l1, testCase.input.l2);

      expect(result).to.deep.equal(testCase.result);
    });
  });
});
