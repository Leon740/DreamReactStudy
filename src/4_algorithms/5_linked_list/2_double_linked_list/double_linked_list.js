/* eslint-disable indent */
/* eslint-disable max-classes-per-file */

// Used in 8_hash_table

// === Concept
// List of elements;
// Each element has a (next) pointer to the next element, (prev) pointer to the previous element

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toArray() {
    const arrResult = [];

    // start with list (head)
    let currentNode = this.head;

    while (currentNode) {
      arrResult.push(currentNode);

      // go to the (next node)
      currentNode = currentNode.next;
    }

    return arrResult;
  }

  append(value) {
    // add (node) to the end

    // since (append) adds node to the end, there is no (next) in (node)
    const node = new Node(value);

    if (!this.head) {
      // if there are NO (nodes) in the (list)
      this.head = node;
      this.tail = node;
    } else {
      // if there are (nodes) in the (list)
      const oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  prepend(value) {
    // add (node) to the start

    const node = new Node(value);

    if (!this.head) {
      // if there are NO (nodes) in the (list)
      this.head = node;
      this.tail = node;
    } else {
      // if there are (nodes) in the (list)
      const oldHead = this.head;
      this.head = node;
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
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

    // prev : foundNode, next: foundNode.next
    const node = new Node(thisNodeValue, foundNode, foundNode.next);

    // (prev node) of (next node) after (found node) is (this node)
    foundNode.next.prev = node;

    // (next node) after (found node) is (this node)
    foundNode.next = node;

    return this;
  }

  delete(value) {
    // if the (list) is empty
    if (!this.head) {
      return null;
    }

    const foundNode = this.find(value);

    // if the (node) is not found
    if (!foundNode) {
      return null;
    }

    // if there is only one (node) in the (list)
    if (!foundNode.prev && !foundNode.next) {
      // delete (head) and (tail)
      this.head = null;
      this.tail = null;

      return null;
    }

    // if there is both (prev) and (next) in (found)
    if (foundNode.prev && foundNode.next) {
      // Ex: 1, 2, 3; remove 2
      const foundNodePrev = foundNode.prev; // 2.prev = 1
      const foundNodeNext = foundNode.next; // 2.next = 3

      foundNode.prev.next = foundNodeNext; // 1.next = 3
      foundNode.next.prev = foundNodePrev; // 3.prev = 1
    }

    // if this is the (last node)
    if (!foundNode.next) {
      // Ex: 1, 2, 3; remove 3
      // foundNode.prev = 2
      // 2.next = null
      foundNode.prev.next = null;

      // this.tail = 2
      this.tail = foundNode.prev;
    }

    // if this is the (first node)
    if (!foundNode.prev) {
      // Ex: 1, 2, 3; remove 1
      // foundNode.next = 2
      // 2.prev = null
      foundNode.next.prev = null;

      // this.head = 2
      this.head = foundNode.next;
    }

    return this;
  }

  reverse() {
    // create new list
    const dll = new DoubleLinkedList();

    // loop through this (list), start with (head)
    let current = this.head;

    while (current) {
      // add (nodes) to the start of new (list)
      dll.prepend(current.value);

      // go to the (next node)
      current = current.next;
    }

    return dll;
  }
}

const dll = new DoubleLinkedList();
console.log(dll);

// append
console.log('\n\n\n append(1)');
dll.append(1);
console.log(dll);

console.log('\n append(2)');
dll.append(2);
console.log(dll);

// toArray
console.log('\n\n\n toArray()');
console.log(dll.toArray());

// prepend
console.log('\n\n\n prepend(0)');
dll.prepend(0);
console.log(dll.toArray());

console.log('\n prepend(-1)');
dll.prepend(-1);
console.log(dll.toArray());

// find
console.log('\n\n\n find(1)');
console.log(dll.find(1));

console.log('\n find(100)');
console.log(dll.find(100));

// insertAfter
console.log('\n\n\n insertAfter(0, \'after 0\')');
console.log(dll.insertAfter(0, 'after 0'));
console.log(dll.toArray());

console.log('\n insertAfter(100, \'after 100\')');
console.log(dll.insertAfter(100, 'after 100'));

// reverse
console.log('\n\n\n reverse');
console.log(dll.reverse().toArray());

// delete

// both (prev) and (next)
console.log('\n\n\n delete(1)');
console.log(dll.delete(1));
console.log(dll.toArray());

// (last node)
console.log('\n delete(2)');
console.log(dll.delete(2));
console.log(dll.toArray());

// (first node)
console.log('\n delete(-1)');
console.log(dll.delete(-1));
console.log(dll.toArray());

// (not found node)
console.log('\n delete(100)');
console.log(dll.delete(100));

// both (prev) and (next)
console.log('\n\n\n delete(\'after 0\')');
console.log(dll.delete('after 0'));
console.log(dll.toArray());

// one (node)
console.log('\n delete(0)');
console.log(dll.delete(0));
console.log(dll.toArray());
