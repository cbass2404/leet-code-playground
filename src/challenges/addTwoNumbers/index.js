const { LinkedList, ListNode } = require('../../helpers/LinkedList/LinkedList');
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const list = new LinkedList();
  let currentL1 = l1.val;
  let currentL2 = l2.val;

  while (true) {
    const sum = (currentL1.val || 0) + (currentL2.val || 0);
    if (sum > 9) {
      list.insertLast(sum % 10);
      if (currentL1.next) {
        currentL1.next.val += 1;
      } else {
        currentL1.next = new ListNode(1);
      }
    } else {
      list.insertLast(sum);
    }

    if (!currentL1.next && !currentL2.next) {
      return list.getFirst();
    } else {
      currentL1 = currentL1.next;
      currentL2 = currentL2.next;
    }
  }
}

module.exports = addTwoNumbers;
