/* eslint-disable no-underscore-dangle */

// === Concept
// Hash Table is a table with index cell, and value cell(bucket)
// index is a hash

// Hash Table is the fastest search algorithm, because you get the hash, and select the record from table using this hash with 1 operation only.

// 1st method of solving collision: use { key, value }

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

  set(key, value) {
    // index of item in table (hash)
    const index = this._hash(key);

    // collision - more than one record in same (bucket)
    if (!this.buckets[index]) {
      // if (bucket) is empty, add empty array to (bucket)
      this.buckets[index] = [];
    }
    // if (bucket) is not empty, add (records) to the array in (bucket)
    this.buckets[index].push({ key, value });

    return this;
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    // 1 - no such (record)
    // 2 - one (record) in (bucket)
    // 3 - more than one record in (bucket)

    if (bucket.length) {
      // if there is a (bucket) on this index(hash)
      for (let i = 0; i < bucket.length; i += 1) {
        // loop through each (record) in (bucket)
        if (bucket[i] && bucket[i].key === key) {
          // if (record) exists and the (key) of (record) = (key), return the (value) of (record)
          return bucket[i].value;
        }
      }
    }
    // if there is no (bucket) on this index(hash)
    return null;
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    // 1 - no such (record)
    // 2 - one (record) in (bucket)
    // 3 - more than one record in (bucket)

    if (bucket.length) {
      // if there is a (bucket) on this index(hash)
      for (let i = 0; i < bucket.length; i += 1) {
        // loop through each (record) in (bucket)
        if (bucket[i] && bucket[i].key === key) {
          // if (record) exists and the (key) of (record) = (key), delete (record)
          const record = bucket[i];
          delete bucket[i];
          return record;
        }
      }
    }
    // if there is no (bucket) on this index(hash)
    return -1;
  }

  keys() {
    const array = [];

    for (let k = 0; k < this.buckets.length; k += 1) {
      if (this.buckets[k]) {
        // if (bucket) is not empty
        // console.log(this.buckets[k]);

        for (let j = 0; j < this.buckets[k].length; j += 1) {
          // loop through each (record) in (bucket)
          // console.log(this.buckets[k][j]);
          if (this.buckets[k][j]) {
            // if (record) exists
            array.push(this.buckets[k][j].key);
          }
        }
      }
    }

    return array;
  }

  values() {
    const array = [];

    for (let k = 0; k < this.buckets.length; k += 1) {
      if (this.buckets[k]) {
        // if (bucket) is not empty
        // console.log(this.buckets[k]);

        for (let j = 0; j < this.buckets[k].length; j += 1) {
          // loop through each (record) in (bucket)
          // console.log(this.buckets[k][j]);
          if (this.buckets[k][j]) {
            // if (record) exists
            array.push(this.buckets[k][j].value);
          }
        }
      }
    }

    return array;
  }

  entries() {
    const array = [];

    for (let k = 0; k < this.buckets.length; k += 1) {
      if (this.buckets[k]) {
        // if (bucket) is not empty
        // console.log(this.buckets[k]);

        for (let j = 0; j < this.buckets[k].length; j += 1) {
          // loop through each (record) in (bucket)
          // console.log(this.buckets[k][j]);
          if (this.buckets[k][j]) {
            // if (record) exists
            array.push([this.buckets[k][j].key, this.buckets[k][j].value]);
          }
        }
      }
    }

    return array;
  }
}

const ht = new HashTable(5);
console.log(ht);

// set
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
console.log('\n\n\n');
console.log(ht.entries());

console.log('');
console.log("delete('NoName')");
console.log(ht.delete('NoName'));

console.log('');
console.log("delete('Igor')");
console.log(ht.delete('Igor'));

console.log('');
console.log("delete('Leonid')");
console.log(ht.delete('Leonid'));

console.log('');
console.log(ht.entries());
console.log('');

console.log("get('Leonid')");
console.log(ht.get('Leonid'));

// keys
console.log('\n\n\n keys');
console.log(ht.keys());

// values
console.log('\n\n\n values');
console.log(ht.values());

// entries
console.log('\n\n\n entries');
console.log(ht.entries());
