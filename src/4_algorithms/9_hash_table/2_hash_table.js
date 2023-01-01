/* eslint-disable no-underscore-dangle */

import DoubleLinkedList from '4_algorithms/5_linked_list/2_double_linked_list/double_linked_list';

// === Concept
// Hash Table is a table with index cell, and value cell(bucket)
// index is a hash

// Hash Table is the fastest search algorithm, because you get the hash, and select the record from table using this hash with 1 operation only.

// 2nd method of solving collision: use LinkedList

export default class HashTable {
  constructor(size = 10) {
    this.buckets = new Array(size);
  }

  _hash(key) {
    // _ tells that this method should be used only in other methods, not itself
    let hash = 0;

    for (let i = 0; i < key.length; i += 1) {
      // we get the binary code of each letter of the key(word)
      hash = (hash + key.charCodeAt(i)) % this.buckets.length;
    }

    return hash;
  }

  set(key) {
    // index of item in table (hash)
    const index = this._hash(key);

    // collision - more than one record in same (bucket)

    // if (bucket) is empty
    if (!this.buckets[index]) {
      // add empty linked list to (bucket)
      this.buckets[index] = new DoubleLinkedList();
    }

    // if (bucket) is not empty, add (records) to the linked list in (bucket)
    this.buckets[index].append(key);

    return this;
  }

  get(key) {
    const index = this._hash(key);
    return this.buckets[index].find(key);
  }

  delete(key) {
    const index = this._hash(key);
    return this.buckets[index].remove(key);
  }

  values() {
    const array = [];

    for (let k = 0; k < this.buckets.length; k += 1) {
      // if (bucket) is not empty
      if (this.buckets[k]) {
        // console.log(this.buckets[k].toArray());

        // loop through each (record) in (bucket)
        for (let j = 0; j < this.buckets[k].toArray().length; j += 1) {
          // console.log(this.buckets[k].toArray()[j].value);
          array.push(this.buckets[k].toArray()[j].value);
        }
      }
    }

    return array;
  }
}

const ht = new HashTable(5);
console.log(ht);

// set
console.log("\n\n\n set('Leonid')");
ht.set('Leonid');
console.log(ht);

console.log('');
console.log("set('Mykhailo')");
ht.set('Mykhailo');
console.log(ht);

console.log('');
console.log("set('Roman')");
ht.set('Roman');
console.log(ht);

console.log('');
console.log("set('Ivan')");
ht.set('Ivan');
console.log(ht);

console.log('');
console.log("set('Igor')");
ht.set('Igor');
console.log(ht);

// get
console.log("\n\n\n get('NoName')");
console.log(ht.get('NoName'));

console.log('');
console.log("get('Roman')");
console.log(ht.get('Roman'));

console.log('');
console.log("get('Ivan')");
console.log(ht.get('Ivan'));

// delete
console.log("\n\n\n delete('NoName')");
console.log(ht.delete('NoName'));

console.log('');
console.log("delete('Igor')");
console.log(ht.delete('Igor'));

console.log('');
console.log("delete('Leonid')");
console.log(ht.delete('Leonid'));

console.log('');
console.log("delete('Ivan')");
console.log(ht.delete('Ivan'));

console.log('');
console.log(ht);

ht.set('Leonid');
ht.set('Ivan');

console.log('\n\n\n values');
console.log(ht.values());
