const {
  LinkedList,
  LinkedNode,
} = require('../../helpers/LinkedList/LinkedList');
const { expect } = require('chai');

describe.skip('Linked Node', () => {
  it('Builds', () => {
    const node1 = new LinkedNode(1);
    expect(node1).not.to.be.null;
    expect(node1.val).to.equal(1);
    expect(node1.next).to.be.null;
  });

  it('Retains Levels', () => {
    const node1 = new LinkedNode(1);
    expect(node1).not.to.be.null;
    expect(node1.val).to.equal(1);
    expect(node1.next).to.be.null;

    const node2 = new LinkedNode(2);
    expect(node2).not.to.be.null;
    expect(node2.val).to.equal(2);
    expect(node2.next).to.be.null;

    const node3 = new LinkedNode(3);
    expect(node3).not.to.be.null;
    expect(node3.val).to.equal(3);
    expect(node3.next).to.be.null;

    node2.next = node3;
    node1.next = node2;

    expect(node1.val).to.equal(1);
    expect(node1.next.val).to.equal(2);
    expect(node1.next.next.val).to.equal(3);
    expect(node1.next.next.next).to.be.null;
  });
});

describe.skip('Linked List Initialization', () => {
  let linkedList;
  let head;

  afterEach(() => {
    linkedList = null;
    head = null;
  });

  it('Builds with no constructor args', () => {
    linkedList = new LinkedList();

    expect(linkedList).not.to.be.null;
  });

  it('Builds with Linked List in constructor args', () => {
    const nodes = new LinkedNode(1, new LinkedNode(2, new LinkedNode(3)));
    linkedList = new LinkedList(nodes);
    head = linkedList.getFirst();

    expect(head.val).to.equal(1);
    expect(head.next.val).to.equal(2);
    expect(head.next.next.val).to.equal(3);
    expect(head.next.next.next).to.be.null;
  });

  it('Builds with Linked List in constructor args', () => {
    const array = [1, 2, 3];
    linkedList = new LinkedList(array);
    head = linkedList.getFirst();

    expect(head.val).to.equal(1);
    expect(head.next.val).to.equal(2);
    expect(head.next.next.val).to.equal(3);
    expect(head.next.next.next).to.be.null;
  });
});

describe.skip('Linked List Methods', () => {
  let linkedList;
  let first;
  let newFirst;
  let last;
  let newLast;
  let second;
  let third;
  let fourth;

  beforeEach(() => {
    linkedList = new LinkedList([1, 2, 3, 4, 5]);
    first = linkedList.getFirst();
    expect(first.val).to.equal(1);
    expect(first.next.val).to.equal(2);

    last = linkedList.getLast();
    expect(last.val).to.equal(5);
    expect(last.next).to.be.null;

    second = linkedList.getAt(1);
    expect(second.val).to.equal(2);
    expect(second.next.val).to.equal(3);

    third = linkedList.getAt(2);
    expect(third.val).to.equal(3);
    expect(third.next.val).to.equal(4);

    fourth = linkedList.getAt(3);
    expect(fourth.val).to.equal(4);
    expect(fourth.next.val).to.equal(5);
  });

  it('insertFirst', () => {
    // when linkedList.head has a node
    linkedList.insertFirst(0);
    newFirst = linkedList.getFirst();
    expect(newFirst.val).to.equal(0);
    expect(newFirst.next.val).to.equal(first.val);

    linkedList.clear();
    first = linkedList.getFirst();
    expect(first).to.be.null;

    // when linkedList.head is null
    linkedList.insertFirst(1);
    newFirst = linkedList.getFirst();
    expect(newFirst.val).to.equal(1);
    expect(newFirst.next).to.equal(first);
  });

  it('insertLast', () => {
    // when linkedList.head has a node
    linkedList.insertLast(6);
    newLast = linkedList.getLast();

    expect(newLast.val).to.equal(6);
    expect(newLast.next).to.be.null;
    expect(linkedList.getAt(4).next.val).to.equal(newLast.val);

    linkedList.clear();
    last = linkedList.getLast();
    expect(last).to.be.null;

    // when linkedList.head is null
    linkedList.insertLast(1);
    newLast = linkedList.getLast();
    expect(newLast.val).to.equal(1);
    expect(newLast.next).to.be.null;
  });

  it('insertAt', () => {
    // when linkedList.head has value
    linkedList.insertAt(0, 1);
    newFirst = linkedList.getFirst();
    expect(newFirst.val).to.equal(1);
    expect(newFirst.next.val).to.equal(0);
    expect(newFirst.next.next.val).to.equal(2);

    linkedList.clear();
    first = linkedList.getFirst();
    expect(first).to.be.null;

    // when linkedList.head is null
    linkedList.insertAt(10, 10);
    newFirst = linkedList.getFirst();
    expect(newFirst.val).to.equal(10);
    expect(newFirst.next).to.be.null;
  });

  it('removeFirst', () => {
    linkedList.removeFirst();
    newFirst = linkedList.getFirst();
    expect(newFirst.val).to.equal(2);
    expect(newFirst.next.val).to.equal(3);
  });

  it('removeLast', () => {
    linkedList.removeLast();
    newLast = linkedList.getLast();
    expect(newLast.val).to.equal(4);
    expect(newLast.next).to.be.null;
  });

  it('removeAt', () => {
    linkedList.removeAt(3);
    expect(linkedList.getAt(3)).to.equal(last);
    linkedList.removeAt(1);
    expect(linkedList.getAt(1)).to.equal(third);
    newFirst = linkedList.getFirst();
    expect(newFirst.next).to.equal(third);
  });

  it('size', () => {
    let size = linkedList.size();
    // when linkedList.head has data
    expect(size).to.equal(5);

    linkedList.clear();
    // does not break when linkedList.head is null
    size = linkedList.size();
    expect(size).to.equal(0);
  });

  it('forEach', () => {
    let sum = 0;
    let counter = 0;
    linkedList.forEach((node, idx) => {
      sum += node.val;
      counter += idx;
    });
    expect(sum).to.equal(15);
    expect(counter).to.equal(10);
  });

  it('*[Symbol.iterator]', () => {
    let sum = 0;
    let counter = 0;
    for (const node of linkedList) {
      sum += node.val;
      counter++;
    }
    expect(sum).to.equal(15);
    expect(counter).to.equal(5);
  });
});
