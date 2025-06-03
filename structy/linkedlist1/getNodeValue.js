class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// this is the iterative approach
// const getNodeValue = (head, index) => {
//   let count = 0;
//   let current = head;
//   while (current !== null) {
//     if (count === index) console.log(current.val);
//     current = current.next;
//     count += 1;
//   }
//   return null;
// };

const getNodeValue = (head, index) => {
  let count = 0;
  if (head === null) return false;
  if (count === index) console.log(head.val);
  count += 1;
  return getNodeValue(head.next, index);
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
