// a hash tbleconsist of the following
//  this.table = new Array(137);
//  this.simpleHash = simpleHash;
//  this.showDistro = showDistro;
//  this.put = put;
//this.get = get
export class HashTable {
  constructor() {
    this.table = new Array(137);
  }
  // simple hash function
  simpleHash(key) {
    const seed = 70;
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += seed * hash + key.charCodeAt(i);
    }
    console.log("Hash value: " + key + " -> " + hash);
    hash = hash % this.table.length;
    return parseInt(hash);
  }
  // put or add the key value pair to the HashTable
  put(key, value = key) {
    const position = this.simpleHash(key);
    this.table[position] = value;
  }
  // showDistro displays all the key-value pairs in the hash table
  showDistro() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(`${i}:${this.table[i]}`);
      }
    }
  }
  get(key) {
    return this.table[this.simpleHash(key)];
  }
  remove(key) {
    const position = this.simpleHash(key);
    if (this.table[position] !== undefined) {
      delete this.table[position];
      return true;
    }
    return false;
  }
}
// Usage example
// const hashTable = new HashTable();
// hashTable.put("name", "John");
// hashTable.put("mary", "maty");
// hashTable.put("dari", 20);
// hashTable.put("maga", 34);
// hashTable.put("age", 30);
// hashTable.remove("name");
// hashTable.remove("mary");
// hashTable.showDistro();
