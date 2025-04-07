function Dictionary() {
  this.datastore = [];
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = this.showAll;
}
function add(key, value) {
  return (this.datastore[key] = value);
}
function find(key) {
  return this.datastore[key];
}
function remove(key, value) {
  delete this.datastore[key];
}
function showAll() {
  for (var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
  }
}
let pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll;
