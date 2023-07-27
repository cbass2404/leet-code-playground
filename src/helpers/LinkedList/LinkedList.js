class LinkedNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {Array | LinkedNode} data
 * @returns LinkedNode
 */
function buildListHead(data) {
  if (Array.isArray(data)) {
    let first;
    let prev;
    data.forEach((data) => {
      if (!prev) {
        prev = new LinkedNode(data);
        first = prev;
      } else {
        prev.next = new LinkedNode(data);
        prev = prev.next;
      }
    });
    return first;
  } else if (data instanceof LinkedNode) {
    return data;
  }

  return null;
}

/**
 * Optionally initialized with either an array, or LinkedList
 */
class LinkedList {
  constructor(data = null) {
    this.head = buildListHead(data);
  }

  insertFirst(data) {
    this.head = new LinkedNode(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new LinkedNode(data);
    } else {
      // The chain is empty!
      this.head = new LinkedNode(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new LinkedNode(data);
      return;
    }

    if (index === 0) {
      this.head = new LinkedNode(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new LinkedNode(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { LinkedNode, LinkedList };
