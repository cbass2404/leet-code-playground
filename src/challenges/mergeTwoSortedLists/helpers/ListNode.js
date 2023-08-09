class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Transforms an array of items to a linked list
 * @param {[]}
 * @returns {ListNode}
 */
function buildList(array) {
  let head;
  let previous;

  for (let idx = 0; idx < array.length; idx++) {
    if (!head) {
      head = new ListNode(array[idx]);
      previous = head;
    } else {
      previous.next = new ListNode(array[idx]);
      previous = previous.next;
    }
  }

  return head;
}

module.exports = { ListNode, buildList };
