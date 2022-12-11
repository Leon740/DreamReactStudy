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

    if (!found.prev && !found.next) {
      // if there is only one (node) in the (list), remove (head) and (tail)
      this.head = null;
      this.tail = null;
      return this;
    }

    if (found.prev && found.next) {
      // if there is both (prev) and (next) in (found)

      // Ex: 1, 2, 3; remove 2
      const foundPrev = found.prev; // 2.prev = 1
      const foundNext = found.next; // 2.next = 3

      found.prev.next = foundNext; // 1.next = 3
      found.next.prev = foundPrev; // 3.prev = 1
      return this;
    }

    if (!found.next) {
      // if this is the last node

      // Ex: 0, 1, 4; remove 4
      // found.prev = 1
      // 1.next = null
      found.prev.next = null;

      // this.tail = 1
      this.tail = found.prev;
    }

    if (!found.prev) {
      // if this is the first node

      // Ex: 0, 1; remove 0
      // found.next = 1
      // 1.prev = null
      found.next.prev = null;

      // this.head = 1
      this.head = found.next;
    }

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
console.log('\n\n\n prepend 0');
dll.prepend(0);
console.log(dll.toArray());

// append
console.log('\n\n\n append 1');
dll.append(1);
console.log(dll.toArray());

dll.append(2);
dll.append(3);
dll.append(4);
console.log(dll.toArray());

// dll
console.log('\n\n\n dll');
console.log(dll);

// find
console.log('\n\n\n find -7');
console.log(dll.find(-7));

console.log('');
console.log('find 1');
console.log(dll.find(1));

// insertAfter
console.log('\n\n\n insertAfter 0 - after 0');
console.log(dll.insertAfter(0, 'after 0'));
console.log(dll.toArray());

// remove
console.log('\n\n\n remove -7');
console.log(dll.remove(-7));
console.log(dll.toArray());

console.log('');
console.log('remove 2');
console.log(dll.remove(2));
console.log(dll.toArray());

console.log('');
console.log('remove 3');
console.log(dll.remove(3));
console.log(dll.toArray());

console.log('');
console.log('remove 4');
console.log(dll.remove(4));
console.log(dll.toArray());

console.log('');
console.log('remove 0');
console.log(dll.remove(0));
console.log(dll.toArray());

console.log('');
console.log('remove after 0');
console.log(dll.remove('after 0'));
console.log(dll.toArray());

console.log('');
console.log('remove 1');
console.log(dll.remove(1));
console.log(dll.toArray());

// reverse
console.log('\n\n\n reverse');
console.log(dll.reverse().toArray());
