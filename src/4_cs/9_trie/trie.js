/* eslint-disable max-classes-per-file */
// === Concept
// Trie = Prefix tree

class Node {
  constructor(children = {}, isWordEnd = false) {
    this.children = children;
    this.isWordEnd = isWordEnd;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    // 1) loop through existing (nodes), start with (root node)
    // 2) split the word to the characters, loop through the characters
    // 3) if the (node) with this (char) doesn't exist, create the (node) with (this char)
    // 4) if the (node) with this (char) exists, don't do anything, except, go to the (next node)
    // 5) once all of the (chars) of the word are inserted or checked, set (isWordEnd) to (true)

    // 1) loop through existing (nodes), start with (root node)
    let currentNode = this.root;

    // 2) split the word to the characters, loop through the characters
    for (let i = 0; i < word.length; i++) {
      const charToInsert = word[i];

      // 3) if the (node) with this (char) doesn't exist
      if (!currentNode.children[charToInsert]) {
        // 3) create the (node) with (this char)
        currentNode.children[charToInsert] = new Node();
      }

      // 4) if the (node) with this (char) exists, don't do anything, except, go to the (next node)
      currentNode = currentNode.children[charToInsert];
    }

    // 5) once all of the (chars) of the word are inserted or checked, set (isWordEnd) to (true)
    currentNode.isWordEnd = true;

    return this.root;
  }

  startsWithPrefix(prefix) {
    // 1) loop through existing (nodes), start with (root node)
    // 2) split the prefix to the characters, loop through the characters
    // 3) if the (node) with this (char) doesn't exist, stop the (loop), (return false)
    // 4) if the (node) with this (char) exists, don't do anything, except, go to the (next node)
    // 5) once the (loop) is completed successfully, (return true)

    // 1) loop through existing (nodes), start with (root node)
    let currentNode = this.root;

    // 2) split the prefix to the characters, loop through the characters
    for (let i = 0; i < prefix.length; i++) {
      const charToFind = prefix[i];

      // 3) if the (node) with this (char) doesn't exist
      if (!currentNode.children[charToFind]) {
        // stop the (loop), (return false)
        return false;
      }

      // 4) if the (node) with this (char) exists, don't do anything, except, go to the (next node)
      currentNode = currentNode.children[charToFind];
    }

    // 5) once the (loop) is completed successfully, (return true)
    return true;
  }

  contains(word) {
    // 1) loop through existing (nodes), start with (root node)
    // 2) split the word to the characters, loop through the characters
    // 3) if the (node) with this (char) doesn't exist, stop the (loop), (return false)
    // 4) if the (node) with this (char) exists, don't do anything, except, go to the (next node)
    // 5) once all of the (chars) of the word are inserted or checked, set (isWordEnd) to (true)

    // 1) loop through existing (nodes), start with (root node)
    let currentNode = this.root;

    // 2) split the word to the characters, loop through the characters
    for (let i = 0; i < word.length; i++) {
      const charToFind = word[i];

      // 3) if the (node) with this (char) doesn't exist
      if (!currentNode.children[charToFind]) {
        // stop the (loop), (return false)
        return false;
      }

      // 4) if the (node) with this (char) exists, don't do anything, except, go to the (next node)
      currentNode = currentNode.children[charToFind];
    }

    // once all of the word characters are checked, checked the (isWordEnd) of the last character
    return currentNode.isWordEnd;
  }

  size() {
    let size = 0;

    function fnGetChar(node) {
      // console.log(node);
      size += 1;

      const nodeChildrenKeys = Object.keys(node.children);

      if (nodeChildrenKeys) {
        nodeChildrenKeys.forEach((childNodeKey) => {
          // console.log(childNodeKey);
          fnGetChar(node.children[childNodeKey]);
        });
      }

      return size;
    }

    return fnGetChar(this.root);
  }
}

const trie = new Trie();
console.log(trie);

// insert
console.log('\n\n\n insert(\'ore\')');
console.log(trie.insert('ore'));

console.log('\n\n\n insert(\'or\') - part of (ore)');
console.log(trie.insert('or'));

console.log('insert(\'on\')');
console.log(trie.insert('on'));

console.log('insert(\'ongoing\') - part of (on)');
console.log(trie.insert('ongoing'));

console.log('insert(\'dam\')');
console.log(trie.insert('dam'));

console.log('insert(\'do\') - part of \'(d)am\'');
console.log(trie.insert('do'));

// startsWithPrefix
console.log('\n\n\n startsWithPrefix(\'no_prefix\') - false');
console.log(trie.startsWithPrefix('no_prefix'));

console.log('startsWithPrefix(\'ore\') - true');
console.log(trie.startsWithPrefix('ore'));

console.log('startsWithPrefix(\'or\') - true, a part of (or)e');
console.log(trie.startsWithPrefix('or'));

// contains
console.log('\n\n\n contains(\'no_contains\') - false');
console.log(trie.contains('no_contains'));

console.log('contains(\'o\') - false');
console.log(trie.contains('o'));

console.log('contains(\'ore\') - true');
console.log(trie.contains('ore'));

console.log('contains(\'or\') - true, a part of (or)e');
console.log(trie.contains('or'));
