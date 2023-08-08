const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  {
    input: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
    result: [1, 2, 2, 3, 5, 6],
  },
  {
    input: { nums1: [1], m: 1, nums2: [], n: 0 },
    result: [1],
  },
  {
    input: { nums1: [0], m: 0, nums2: [1], n: 1 },
    result: [1],
  },
];

describe.skip('Add Two Numbers', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      getResult(input.nums1, input.m, input.nums2, input.n);
      console.log(input.nums1);
      expect(input.nums1).to.deep.equal(result);
    });
  });
});
