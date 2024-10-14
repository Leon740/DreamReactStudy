/* eslint-disable no-underscore-dangle */
export default class HashTable {
  constructor(size = 1) {
    this.buckets = new Array(size);
  }

  // _ = internal or helper method, can be used only inside or in other methods, not outside
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.buckets.length;
    }

    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    // collision
    // if I set two different values with the same key, the collision will occur: the latest set method call will override the previous value

    // if bucket is empty use empty array
    if (!this.buckets[index]) {
      this.buckets[index] = { key, values: [] };
    }

    // push values to the bucket
    this.buckets[index].values.push(value);

    return this;
  }

  get(key) {
    const index = this._hash(key);

    return this.buckets[index].values || -1;
  }

  delete(key) {
    const index = this._hash(key);

    delete this.buckets[index];

    return this;
  }
}

const contacts = new HashTable(2);
console.log(contacts);

// collision
console.log(contacts.set('Leonid', '215-987-7259'));
console.log(contacts.set('Leonid', '774-420-9593'));
console.log(contacts.get('Leonid'));
console.log(contacts.set('Roman', '215-602-1636'));
console.log(contacts.get('Roman'));
console.log(contacts.delete('Name'));
// console.log(contacts.delete('Roman'));
