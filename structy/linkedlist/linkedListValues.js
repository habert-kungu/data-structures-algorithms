// Algorithm Description:
// The 'linkedListValues' function collects all values from a linked list into an array.
// It uses recursion to traverse the list and accumulate values.

// // iterative approach
// const linkedListValues = (head) => {
//   let current = head;
//   let result = [];
//   while (current !== null) {
//     result.push(current.val);
//     current = current.next;
//   }
//   return current;
// };

// recursive approach
const linkedListValues = (head) => {
  let values = [];
  _linkedList(head, values);
  return values;
};
const _linkedList = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _linkedList(head.next, values);
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
