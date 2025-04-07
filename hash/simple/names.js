import { HashTable } from "./HashTable.js";
let hTable = new HashTable();
let someNames = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];
for (let i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
