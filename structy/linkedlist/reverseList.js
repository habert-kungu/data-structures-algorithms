// Algorithm Description:
// The 'reverseList' function reverses a linked list.
// It is implemented recursively and can also be done iteratively.

// const reverseList = (head) => {
//   let current = head;
//   let prev = null;
//   while (current !== null) {
//     const next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// };
// N <-  a <-  b  c -> d -> e -> f
//                             prev  c   next
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

reverseList(a); // f -> e -> d -> c -> b -> a
