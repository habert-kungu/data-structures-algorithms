// Algorithm Description:
// The 'linkedListFind' function checks if a target value exists in a linked list.
// It uses recursion to traverse the list and returns true if found.
// The function takes two arguments: the head of the linked list and the target value to find.
// If the head is null, it means the end of the list is reached, and the target is not found, so it returns undefined.
// If the value of the current node (head.val) matches the target, it returns true.
// Otherwise, it calls itself recursively with the next node (head.next) and the target value.
// This process continues until the target is found or the end of the list is reached.

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
