/* eslint-disable max-classes-per-file */

// === Concept
// List of elements, each element has a (next) pointer to the next element, (prev) pointer to the previous element

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);

    // if there are no elements in the list
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // the order of this code is !important
      const oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }

    return this;
  }

  prepend(value) {
    const node = new Node(value);

    // if there are no elements in the list
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }

    return this;
  }

  toArray() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current);
      current = current.next;
    }

    return array;
  }

  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  insertAfter(afterElValue, thisElValue) {
    const found = this.find(afterElValue);

    // if the (node) is not found
    if (!found) {
      return null;
    }

    // the (value) is (thisElValue), (prev) is found el, (next) is the next el after (found) el
    const node = new Node(thisElValue, found, found.next);

    // (prev) of the next el after (found) el
    found.next.prev = node;

    // set the next (node) after (found) to this (node)
    found.next = node;

    return this;
  }

  remove(value) {
    // if the list is empty
    if (!this.head) {
      return null;
    }

    const found = this.find(value);

    // if the (node) is not found
    if (!found) {
      return null;
    }

    // found.prev = prev (node) before (found), set (next) to the next el after (found)
    found.prev.next = found.next;

    return this;
  }

  reverse() {
    const dll = new DoubleLinkedList();

    let current = this.head;
    while (current) {
      dll.prepend(current.value);
      current = current.next;
    }

    return dll;
  }
}

const dll = new DoubleLinkedList();

// prepend
console.log('prepend 0');
dll.prepend(0);
console.log(dll.toArray());

console.log('prepend -1');
dll.prepend(-1);
console.log(dll.toArray());

// append
console.log('append 1');
dll.append(1);
console.log(dll.toArray());

console.log('append 2');
dll.append(2);
console.log(dll.toArray());

// dll
console.log('dll');
console.log(dll);

// find
console.log('find -7');
console.log(dll.find(-7));

console.log('find 1');
console.log(dll.find(1));

// insertAfter
console.log('insertAfter 0 - after 0');
console.log(dll.insertAfter(0, 'after 0'));
console.log(dll.toArray());

// remove
console.log('remove -7');
console.log(dll.remove(-7));
console.log(dll.toArray());

console.log('remove after 0');
console.log(dll.remove('after 0'));
console.log(dll.toArray());

// reverse
console.log('reverse');
console.log(dll.reverse().toArray());
