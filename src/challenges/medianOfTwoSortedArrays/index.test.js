const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  { input: { nums1: [1, 3], nums2: [2] }, result: 2.0 },
  { input: { nums1: [1, 2], nums2: [3, 4] }, result: 2.5 },
];

describe('Asteroid Collision', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const median = getResult(input.nums1, input.nums2);

      expect(median).to.deep.equal(result);
    });
  });
});
