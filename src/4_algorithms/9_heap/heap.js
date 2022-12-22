/* eslint-disable no-multiple-empty-lines */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

// === Concept

// Heap is a binary tree

// - In most of the cases parent (node) has (two child nodes)
// - one node
// - no nodes - leaf

// - (Parent node) must be greater than child nodes
// - (left node) may be greater than (right node)
// - (right node) may be greater than (left node)

// max-heap = nodes go in descending order
// min-heap = nodes go in ascending order

// Operations - basic
// push - add (node) to the end
// peek - select the (root node)
// poll - remove (root node)

// Operations - optional
// search - search for the (node)
// size - get the size of the (heap)
// isEmpty - check if (heap) is empty

// Indexes
// Parent = Math.floor((i - 1) / 2);
// Left child = i * 2 + 1;
// Right child = i * 2 + 2


class Heap {
  constructor() {
    this.data = [];
  }

  _getIndexParent(i) {
    return Math.round((i - 1) / 2);
  }

  _getIndexChildLeft(i) {
    return i * 2 + 1;
  }

  _getIndexChildRight(i) {
    return i * 2 + 2;
  }

  _swap(i1, i2) {
    const buffer = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = buffer;
  }

  _heapifyUp() {
    // used in push
    // from bottom to top

    // start with (bottom node)
    let currentIndex = this.data.length - 1;

    // while (current node) has parent
    while (currentIndex) {
      console.log(this.data[currentIndex]);
      console.log(this.data[this._getIndexParent(currentIndex)]);

      // if (current node) is greater than (parent node)
      if (this.data[currentIndex] > this.data[this._getIndexParent(currentIndex)]) {
        // swap (these two nodes)
        this._swap(currentIndex, this._getIndexParent(currentIndex));
      }

      // go to the (next node)
      currentIndex = this._getIndexParent(currentIndex);
    }
  }

  push(node) {
    // add (node) to the (heap)

    // if (heap) is empty
    if (!this.data[0]) {
      // add the (heap root)
      this.data[0] = node;
    }

    // if (heap) is not empty, and (heap root) is greater than (node)
    if (this.data[0] && this.data[0] > node) {
      // 1) add (node) to the end
      this.data[this.data.length] = node;

      // 2) reorganize (heap)
      this._heapifyUp();
    }

    return this.data;
  }

  peek() {
    // select the (heap root)
    return this.data[0];
  }

  search(node) {
    return this.data.indexOf(node);
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return !(this.data.length > 0);
  }

  _heapifyDown() {
    console.log(this.data);
    // used in poll
    // from top to bottom

    // start with (heap root)
    let currentIndex = 0;

    // while (current node) has (left node)
    while (this.data[this._getIndexChildLeft(currentIndex)]) {
      console.log('===');
      console.log(`current = ${this.data[currentIndex]}`);
      console.log(`left = ${this.data[this._getIndexChildLeft(currentIndex)]}`);
      console.log(`right = ${this.data[this._getIndexChildRight(currentIndex)]}`);

      // get the index of the (greatest node) from children

      // the (greatest node) by default is (left node)
      let greatestChildIndex = this._getIndexChildLeft(currentIndex);

      // if (right node) exists and is bigger than (left node)
      if (this.data[this._getIndexChildRight(currentIndex)] && this.data[this._getIndexChildRight] > this.data[greatestChildIndex]) {
        greatestChildIndex = this._getIndexChildRight(currentIndex);
      }

      console.log(`greatest = ${this.data[greatestChildIndex]}`);

      // if (current node) is less than the (greatest child node)
      if (this.data[currentIndex] < this.data[greatestChildIndex]) {
        // swap (these two nodes)
        this._swap(currentIndex, greatestChildIndex);
        console.log(this.data);

        // go to the (next node)
        currentIndex = greatestChildIndex;
      } else {
        return;
      }
    }
  }

  poll() {
    // select (heap root) and delete it

    // 1) put the (last node) to (heap root)
    this.data[0] = this.data[this.data.length - 1];

    // 2) delete the (last node)
    this.data.length -= 1;

    // 3) reorganize (heap)
    this._heapifyDown();

    return this.data;
  }
}

const heap = new Heap();
console.log(heap);

// push
console.log('\n\n\n push(90)');
console.log(heap.push(90));

console.log('push(40)');
console.log(heap.push(40));

// (heapify) example
console.log('push(44)');
console.log(heap.push(44));

// (node) greater than (heap root)
console.log('push(120)');
console.log(heap.push(120));

console.log('push(25)');
console.log(heap.push(25));

console.log('push(5)');
console.log(heap.push(5));

console.log('push(68)');
console.log(heap.push(68));

console.log('push(21)');
console.log(heap.push(21));

console.log('push(39)');
console.log(heap.push(39));

// peek
console.log('\n\n\n peek()');
console.log(heap.peek());

// search
console.log('\n\n\n search(44)');
console.log(heap.search(44));

// size
console.log('\n\n\n size()');
console.log(heap.size());

// isEmpty
console.log('\n\n\n isEmpty()');
console.log(heap.isEmpty());

// poll
console.log('\n\n\n poll()');
console.log(heap.poll());
