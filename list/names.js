// list are arrays
var list = [];
list.push("Alice"); // Add
list.push("Bob");
list.splice(1, 0, "Charlie"); // Insert at index 1
list.splice(list.indexOf("Bob"), 1); // Remove "Bob"
console.log(list.toString()); // "Alice,Charlie"
