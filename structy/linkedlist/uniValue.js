// Algorithm Description:
// The 'isUnivalueList' function checks if all nodes in a linked list have the same value.
// It iterates through the list and compares each value to the first.
// If it finds a different value, it returns false.
// If it reaches the end of the list without finding a difference, it returns true.

const isUnivalueList = (head) => {
  let current = head;
  while (current !== null) {
    if (current.val !== current.val) return false;
    current = current.next;
  }
  return true;
};
const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

isUnivalueList(u); // true
