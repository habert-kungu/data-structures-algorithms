const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};
// const getNodeValue = (head, index) => {
//   let current = head;
//   let count = 0;
//   while (current !== null) {
//     if (count === index) {
//       return current.val;
//     }
//     current = current.next;
//     count += 1;
//   }
//   return null;
// };
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
