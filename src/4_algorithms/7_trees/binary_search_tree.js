/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value || 0);
    this.size = 0;
  }

  insert(value) {
    // (Note): the order of insert operations is important
    const newNode = new Node(value);

    this.size += 1;

    function fnInsertIntoThree(nodeArg) {
      const node = nodeArg;

      if (value < node.value) {
        // if (value) is less than (node.value) use the (left) side
        if (!node.left) {
          // if there are no (nodes) on the left, insert the (node)
          node.left = newNode;
        } else {
          // if there are (nodes) on the left, call the (func) with (current node)
          fnInsertIntoThree(node.left);
        }
      } else if (value > node.value) {
        // if (value) is greater than (node.value) use the (right) side
        if (!node.right) {
          // if there are no (nodes) on the right, insert the (node)
          node.right = newNode;
        } else {
          // if there are (nodes) on the right, call the (func) with (current node)
          fnInsertIntoThree(node.right);
        }
      }
    }

    fnInsertIntoThree(this.root);

    return this;
  }

  size() {
    return this.size;
  }

  min() {
    // go to the (left) side
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  max() {
    // go to the (right) side
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode;
  }

  dfsInOrder() {
    // left-root-right

    const array = [];

    function fnFillArray(node) {
      if (node.left) {
        fnFillArray(node.left);
      }

      array.push(node.value);

      if (node.right) {
        fnFillArray(node.right);
      }
    }

    fnFillArray(this.root);

    return array;
  }

  dfsPreOrder() {
    // root-left-right

    const array = [];

    function fnFillArray(node) {
      array.push(node.value);

      if (node.left) {
        fnFillArray(node.left);
      }
      if (node.right) {
        fnFillArray(node.right);
      }
    }

    fnFillArray(this.root);

    return array;
  }

  dfsPostOrder() {
    // left-right-root

    const array = [];

    function fnFillArray(node) {
      if (node.left) {
        fnFillArray(node.left);
      }
      if (node.right) {
        fnFillArray(node.right);
      }

      array.push(node.value);
    }

    fnFillArray(this.root);

    return array;
  }

  bfs() {
    const array = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      console.log('=========');
      console.log('queue');
      queue.map((item) => console.log(item));

      const currentNode = queue.shift();
      array.push(currentNode.value);

      console.log('currentNode');
      console.log(currentNode.value);
      console.log('array');
      console.log(array);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return array;
  }

  find(value) {
    // bfs

    const array = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      const currentNode = queue.shift();
      array.push(currentNode);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      if (currentNode.value === value) {
        return currentNode;
      }
    }

    return -1;
  }

  remove(value) {
    // get array of values in order using (dfsInOrder)
    // create new binary tree with the (root) node
    // insert to binary tree the (nodes) using the (insert) method
    const array = this.dfsInOrder().filter((number) => number !== value);

    const middle = array[Math.floor(array.length / 2)];

    this.root = new Node(middle);

    for (let i = 0; i < array.length; i += 1) {
      this.insert(array[i]);
    }

    return this;
  }
}

const bst = new BinarySearchTree(15);

// bst
console.log(bst);

// insert
console.log('insert 3');
bst.insert(3);
console.log(bst);

console.log('insert 2');
bst.insert(2);
console.log(bst);

console.log('insert 12');
bst.insert(12);
console.log(bst);

console.log('insert 36');
bst.insert(36);
console.log(bst);

console.log('insert 28');
bst.insert(28);
console.log(bst);

console.log('insert 39');
bst.insert(39);
console.log(bst);

// size
console.log('size');
console.log(bst.size);

// min
console.log('min');
console.log(bst.min());

// max
console.log('max');
console.log(bst.max());

// dfsInOrder
console.log('dfsInOrder');
console.log(bst.dfsInOrder());

// dfsPreOrder
console.log('dfsPreOrder');
console.log(bst.dfsPreOrder());

// dfsPostOrder
console.log('dfsPostOrder');
console.log(bst.dfsPostOrder());

// bfs
console.log('bfs');
console.log(bst.bfs());

// find
console.log('find');
console.log(bst.find(36));

// remove
console.log('remove');
console.log(bst.remove(3));
console.log(bst.remove(3).dfsInOrder());
