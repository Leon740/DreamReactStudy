/* eslint-disable max-classes-per-file */

// === Concept
// List of elements;
// Each element has a (next) pointer to the next element;

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toArray() {
    const arrResult = [];

    // start with list (head)
    let currentNode = this.head;

    while (currentNode) {
      arrResult.push(currentNode.value);

      // go to the (next node)
      currentNode = currentNode.next;
    }

    return arrResult;
  }

  append(value) {
    // add (node) to the end

    // since (append) adds (node) to the end, there is no (next) in (node)
    const node = new Node(value);

    // if there are NO (nodes) in the list - (head) doesn't exist
    if (!this.head) {
      // set (head) to (node)
      this.head = node;
    }

    // if there are (nodes) in the list - (tail) exists
    if (this.tail) {
      // the (next node) after (current tail) is (this node)
      this.tail.next = node;
    }

    // update (tail) to (this node)
    this.tail = node;
  }

  prepend(value) {
    // add (node) to the start

    // since (prepend) adds the element to the start, the (next) (node) is (head)
    const node = new Node(value, this.head);

    // set (head) to (node)
    this.head = node;

    // if there are NO (nodes) in the list
    if (!this.tail) {
      // set (tail) to (node)
      this.tail = node;
    }

    return this;
  }

  find(value) {
    // start with list (head)
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      // go to the (next node)
      currentNode = currentNode.next;
    }

    return null;
  }

  insertAfter(afterNodeValue, thisNodeValue) {
    const foundNode = this.find(afterNodeValue);

    // if (node) is not found
    if (!foundNode) {
      return null;
    }

    // the (next) of (this node) is (foundNode.next)
    const thisNode = new Node(thisNodeValue, foundNode.next);

    // set the (next) of (foundNode) to (thisNode)
    foundNode.next = thisNode;

    return this;
  }

  delete(value) {
    // if (list) is empty
    if (!this.head) {
      return null;
    }

    // if (node) is not found
    const foundNode = this.find(value);

    if (!foundNode) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        // if (node) is found, skip (this node)
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // if (this node) is (tail)
    if (this.tail.value === value) {
      // set (tail) to (prev node)
      this.tail = currentNode;
    }

    return this;
  }

  reverse() {
    // create new list
    const sll = new SingleLinkedList();

    // loop through this (list), start with (head)
    let current = this.head;

    while (current) {
      // add (nodes) to the start of new (list)
      sll.prepend(current.value);

      // go to the (next node)
      current = current.next;
    }

    return sll;
  }
}

const sll = new SingleLinkedList();
console.log(sll);

console.log('\n\n\n prepend(0)');
sll.prepend(0);
console.log(sll);

console.log('\n prepend(-1)');
sll.prepend(-1);
console.log(sll);

// append
console.log('\n\n\n append(1)');
sll.append(1);
console.log(sll);

console.log('\n append(2)');
sll.append(2);
console.log(sll);

// toArray
console.log('\n\n\n toArray()');
console.log(sll.toArray());

// find
console.log('\n\n\n find(1)');
console.log(sll.find(1));

console.log('\n find(100)');
console.log(sll.find(100));

// insertAfter
console.log('\n\n\n insertAfter(0, \'after 0\')');
console.log(sll.insertAfter(0, 'after 0'));
console.log(sll.toArray());

console.log('\n insertAfter(100, \'after 100\')');
console.log(sll.insertAfter(100, 'after 100'));

// delete
console.log('\n\n\n delete(0)');
console.log(sll.delete(0));
console.log(sll.toArray());

console.log('\n delete(-10)');
console.log(sll.delete(-10));

// reverse
console.log('\n\n\n reverse');
console.log(sll.reverse().toArray());
