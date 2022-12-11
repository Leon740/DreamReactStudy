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

// max-heap = nodes go in ascending order
// min-heap = nodes go in descending order

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
    return Math.floor((i - 1) / 2);
  }

  _getIndexLeftChild(i) {
    return i * 2 + 1;
  }

  _getIndexRightChild(i) {
    return i * 2 + 2;
  }

  _swap(i1, i2) {
    console.log('swap');
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
      // if (current node) is greater than (parent node)
      if (this.data[currentIndex] > this.data[this._getIndexParent(currentIndex)]) {
        // swap (these two nodes)
        this._swap(currentIndex, this._getIndexParent(currentIndex));
      }

      // go to the (next node)
      currentIndex = this.data[this._getIndexParent(currentIndex)];
    }
  }

  push(node) {
    // if (heap) is empty
    if (!this.data[0]) {
      // add the (heap root)
      this.data[0] = node;
    }

    // if (heap) is not empty, and (heap root) is greater than (node)
    if (this.data[0] && this.data[0] > node) {
      // 1) add (node) to the end
      this.data[this.data.length] = node;

      // 2) reorganize heap
      this._heapifyUp();
    }

    return this.data;
  }

  peek() {
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
    // used in poll
    // from top to bottom

    // start with (heap root)
    let currentIndex = 0;

    // while (current node) has (left node)
    while (this.data[this._getIndexLeftChild(currentIndex)]) {
      console.log('===');
      console.log(`current = ${this.data[currentIndex]}`);
      console.log(`left = ${this.data[this._getIndexLeftChild(currentIndex)]}`);
      console.log(`right = ${this.data[this._getIndexRightChild(currentIndex)]}`);

      // get the index of the (greatest node) from children
      // the (greatest node) by default is (left node)
      let greatestChildIndex = this._getIndexLeftChild(currentIndex);

      // if (right node) exists and is bigger than (left node)
      if (this.data[this._getIndexRightChild(currentIndex)] && this.data[this._getIndexRightChild(currentIndex)] > this.data[greatestChildIndex]) {
        greatestChildIndex = this._getIndexRightChild(currentIndex);
      }

      console.log(`greatest = ${this.data[greatestChildIndex]}`);

      // if (current node) is less than the (greatest child node)
      if (this.data[currentIndex] < this.data[greatestChildIndex]) {
        // swap (these two nodes)
        this._swap(currentIndex, greatestChildIndex);

        // go to the (next node)
        currentIndex = greatestChildIndex;
      } else {
        return;
      }
    }
  }

  poll() {
    // 1) put the (last node) to the (heap root)
    this.data[0] = this.data[this.data.length - 1];

    // 2) delete the (last node)
    this.data.length -= 1;

    // 3) reorganize heap
    this._heapifyDown();

    return this.data;
  }
}

const heap = new Heap();
console.log(heap);

// push
console.log('\n\n\n push(90)');
console.log(heap.push(90));

console.log('push(44)');
console.log(heap.push(44));

console.log('push(120)');
console.log(heap.push(120));

console.log('push(70)');
console.log(heap.push(70));

console.log('push(40)');
console.log(heap.push(40));

console.log('push(25)');
console.log(heap.push(25));

console.log('push(5)');
console.log(heap.push(5));

console.log('push(68)');
console.log(heap.push(68));

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
