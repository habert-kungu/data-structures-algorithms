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
