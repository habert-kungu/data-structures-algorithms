class Node {
  constructor(val) {
    this.val = val;
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

// this is travesing the ll using the iterative approach
// const printLinkedList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
// };
// printLinkedList(a);
// now we are going to use the recursive approach
const printLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  return printLinkedList(head.next);
};
printLinkedList(a);
