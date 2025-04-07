export class HashTable {
  constructor(size = 137) {
    this.table = new Array(size);
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.table[i] = [];
    }
  }
  hash(key) {
    let seed = 33;
    let hash = 293;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * seed + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  put(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] == key) {
        bucket[i] == value;
        return;
      }
    }
    bucket.push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (const [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket.splice(i, 1)[0][1];
      }
    }
    return undefined;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i].length > 0) {
        console.log(`${i}:`, this.table[i]);
      }
    }
  }
}
