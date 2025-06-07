const linkedListFind = (head, target) => {
  if (head === null) return;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
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
