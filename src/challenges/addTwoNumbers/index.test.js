const { LinkedList } = require('../../helpers/LinkedList/LinkedList');
const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  {
    input: {
      l1: new LinkedList([2, 4, 3]).getFirst(),
      l2: new LinkedList([5, 6, 4]).getFirst(),
    },
    result: new LinkedList([7, 0, 8]).getFirst(),
  },
  {
    input: {
      l1: new LinkedList([0]).getFirst(),
      l2: new LinkedList([0]).getFirst(),
    },
    result: new LinkedList([0]).getFirst(),
  },
  {
    input: {
      l1: new LinkedList([9, 9, 9, 9, 9, 9, 9]).getFirst(),
      l2: new LinkedList([9, 9, 9, 9]).getFirst(),
    },
    result: new LinkedList([8, 9, 9, 9, 0, 0, 0, 1]).getFirst(),
  },
];

describe.skip('Add Two Numbers', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const list = getResult(input.l1, input.l2);

      expect(list).to.deep.equal(result);
    });
  });
});
