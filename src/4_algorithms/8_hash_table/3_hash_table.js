/* eslint-disable no-underscore-dangle */

// === Concept
// Hash Table is a table with index cell, and value cell(bucket)
// index is a hash

// Hash Table is the fastest search algorithm, because you get the hash, and select the record from table using this hash with 1 operation only.

// 3rd method of solving collision: use Map

export default class HashTable {
  constructor(size = 10) {
    this.buckets = Array(size);

    for (let i = 0; i < this.buckets.length; i += 1) {
      this.buckets[i] = new Map();
    }
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

  set(key, value) {
    // index of item in table (hash)
    const index = this._hash(key);

    this.buckets[index].set(key, value);

    return this;
  }

  get(key) {
    const index = this._hash(key);
    return this.buckets[index].get(key);
  }

  delete(key) {
    const index = this._hash(key);
    return this.buckets[index].delete(key);
  }

  keys() {
    const array = [];

    for (let i = 0; i < this.buckets.length; i += 1) {
      // if (cell) is not empty
      if (this.buckets[i].size) {
        // console.log(this.buckets[i].keys());
        array.push(...this.buckets[i].keys());
      }
    }

    return array;
  }

  values() {
    const array = [];

    for (let i = 0; i < this.buckets.length; i += 1) {
      // if (cell) is not empty
      if (this.buckets[i].size) {
        // console.log(this.buckets[i].values());
        array.push(...this.buckets[i].values());
      }
    }

    return array;
  }

  entries() {
    const array = [];

    for (let i = 0; i < this.buckets.length; i += 1) {
      // if (cell) is not empty
      if (this.buckets[i].size) {
        // console.log(this.buckets[i].entries());
        array.push(...this.buckets[i].entries());
      }
    }

    return array;
  }
}

const ht = new HashTable(5);
console.log(ht);

console.log("\n\n\n set('Leonid', '1-215-987-7259')");
ht.set('Leonid', '1-215-987-7259');
console.log(ht);

console.log('');
console.log("set('Mykhailo', '1-215-808-7888')");
ht.set('Mykhailo', '1-215-808-7888');
console.log(ht);

console.log('');
console.log("set('Roman', '1-215-602-1636')");
ht.set('Roman', '1-215-602-1636');
console.log(ht);

console.log('');
console.log("set('Ivan', '1-215-808-3611')");
ht.set('Ivan', '1-215-808-3611');
console.log(ht);

console.log('');
console.log("set('Igor', '1-215-602-1330')");
ht.set('Igor', '1-215-602-1330');
console.log(ht);

console.log("\n\n\n get('Roman')");
console.log(ht.get('Roman'));

console.log('');
console.log("get('Leonid')");
console.log(ht.get('Leonid'));

console.log('');
console.log("get('Ivan')");
console.log(ht.get('Ivan'));

console.log("\n\n\n delete('Roman')");
console.log(ht.delete('Roman'));

console.log("delete('Ivan')");
console.log(ht.delete('Ivan'));

console.log('\n\n\n keys');
console.log(ht.keys());

console.log('\n\n\n values');
console.log(ht.values());

console.log('\n\n\n entries');
console.log(ht.entries());
