// Algorithm Description:
// The 'removeNode' function removes the first node with a given value from a linked list.
// It is implemented recursively and can also be done iteratively.

const removeNode = (head, targetVal) => {
  if (head === null) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};
// const removeNode = (head, targetVal) => {
//   let current = head;
//   let prev = null;
//   if (head.val === targetVal) return head.next;
//   while (current !== null) {
//     if (current.val === targetVal) {
//       prev.next = current.next;
//       break;
//     }
//     prev = current;
//     current = current.next;
//   }
//   return head;
// };
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

removeNode(a, "c");
// a -> b -> d -> e -> f
