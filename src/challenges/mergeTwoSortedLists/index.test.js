const { buildList } = require('./helpers/ListNode');
const getResult = require('./index');
const { expect } = require('chai');

const testCases = [
  {
    input: {
      list1: buildList([1, 2, 4]),
      list2: buildList([1, 3, 4]),
    },
    result: buildList([1, 1, 2, 3, 4, 4]),
  },
  {
    input: {
      list1: buildList([]),
      list2: buildList([]),
    },
    result: buildList([]),
  },
  {
    input: {
      list1: buildList([]),
      list2: buildList([0]),
    },
    result: buildList([0]),
  },
];

describe.skip('Add Two Numbers', () => {
  testCases.forEach(function ({ input, result }, idx) {
    return it(`TestCase: ${idx}`, () => {
      const list = getResult(input.list1, input.list2);

      expect(list).to.deep.equal(result);
    });
  });
});
