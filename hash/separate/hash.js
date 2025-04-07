import { HashTable } from "./class.js";
// Create a new hash table
const ht = new HashTable();

// Insert values
ht.put("name", "Alice");
ht.put("age", 25);
ht.put("city", "New York");

// Handle collision (different keys, same hash)
ht.put("mane", "Lion"); // Might collide with "name"

// Get values
console.log(ht.get("name")); // "Alice"
console.log(ht.get("age")); // 25

// Update value
ht.put("age", 26);
console.log(ht.get("age")); // 26

// Remove value
// ht.remove("city");

// Display all entries
ht.display();
