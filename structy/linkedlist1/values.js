class Node {
  constructor(val) {
    (this.val = val), (this.next = null);
  }
}
// const linkedListValues = (head) => {
//   // todo
//   let result = [];
//   let current = head;
//   while (current !== null) {
//     result.push(current.val);
//     current = current.next;
//   }
//   console.log(result);
// };
const linkedListValues = (head) => {
  let result = [];
  if (head === null) return;
  result.push(head.val);
  linkedListValues(head.next);
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
