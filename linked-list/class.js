class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;
//
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.value);
//     current = current.next;
//   }
// };
const printLinkedList = (head) => {
  let val = [];
  if (head === null) return;
  val.push(head);
  console.log(printLinkedList(head.next));
};
printLinkedList(a);
