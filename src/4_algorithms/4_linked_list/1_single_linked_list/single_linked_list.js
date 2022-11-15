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

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    // since (append) adds the (node) to the end, there's no (next) in (node)
    const node = new Node(value);

    // if there are no (nodes) in the list, set (head) to (node)
    if (!this.head) {
      this.head = node;
    }

    // if there are elements in the list - (tail) exists, set the (next) element after (tail) to (node)
    if (this.tail) {
      this.tail.next = node;
    }

    // since (append) adds the (node) to the end, set (tail) always to (node)
    this.tail = node;

    return this;
  }

  prepend(value) {
    // since (prepend) adds the element to the start, the (next) (node) is (head)
    const node = new Node(value, this.head);

    // set (head) to (node)
    this.head = node;

    // if there are no (nodes) in the list, set (tail) to (node)
    if (!this.tail) {
      this.tail = node;
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

    // the (value) is (thisElValue), (next) is the next element after (found) element
    const node = new Node(thisElValue, found.next);

    // set the next (node) after (found) to this (node)
    found.next = node;

    return this;
  }

  remove(value) {
    // if the list is empty
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        // if found, skip the element
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    // if we need to delete the (tail)
    if (this.tail.value === value) {
      // set (tail) to (previous) element
      this.tail = current;
    }

    return this;
  }

  reverse() {
    const sll = new SingleLinkedList();

    let current = this.head;
    while (current) {
      sll.prepend(current.value);
      current = current.next;
    }

    return sll;
  }
}

const sll = new SingleLinkedList();

// prepend
console.log('prepend 0');
sll.prepend(0);
console.log(sll.toArray());

console.log('prepend -1');
sll.prepend(-1);
console.log(sll.toArray());

// append
console.log('append 1');
sll.append(1);
console.log(sll.toArray());

console.log('append 2');
sll.append(2);
console.log(sll.toArray());

// sll
console.log('sll');
console.log(sll);

// find
console.log('find -7');
console.log(sll.find(-7));

console.log('find 1');
console.log(sll.find(1));

// insertAfter
console.log('insertAfter 0 - after 0');
console.log(sll.insertAfter(0, 'after 0'));
console.log(sll.toArray());

// remove
console.log('remove -7');
console.log(sll.remove(-7));
console.log(sll.toArray());

console.log('remove after 0');
console.log(sll.remove('after 0'));
console.log(sll.toArray());

// reverse
console.log('reverse');
console.log(sll.reverse().toArray());
