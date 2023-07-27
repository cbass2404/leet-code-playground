/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const length = l1.length > l2.length ? l1.length : l2.length;
  const result = [];

  for (let idx = 0; idx < length; idx++) {
    let sum = l1[idx] + l2[idx];

    if (Number.isNaN(sum)) {
      l1[idx] ? (sum = l1[idx]) : (sum = l2[idx]);
    }

    if (sum > 9) {
      result.push(sum - 10);
      if (l1[idx + 1]) {
        l1[idx + 1] += 1;
      } else if (l2[idx + 1]) {
        l2[idx + 1] += 1;
      } else {
        result.push(1);
      }
    } else {
      result.push(sum);
    }
  }

  return result;
}

module.exports = addTwoNumbers;
