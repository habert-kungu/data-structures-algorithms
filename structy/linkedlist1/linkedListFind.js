class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const linkedListFind = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) return true;
//     current = current.next;
//   }
//   return false;
//   // return 1
// };

const linkedListFind = (head, target) => {
  if (head == null) return false;
  if (head === target) return true;
  linkedListFind(head.next, target);
  // return 1
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "c"); // true
