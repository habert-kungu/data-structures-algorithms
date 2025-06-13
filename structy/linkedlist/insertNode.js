// Algorithm Description:
// The 'insertNode' function inserts a new node with a given value at a specified index in a linked list.
// It handles insertion at the head and traverses the list to insert elsewhere.

const insertNode = (head, value, index) => {
  let current = head;
  let count = 0;
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  while (current !== null) {
    if (index - 1 === count) {
      const temp = current.next;
      current.next = new Node(value);
      current.next.next = temp;

      break;
    }
    value = current;
    count++;
    current = current.next;
  }
  return head;
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, "x", 2);
// a -> b -> x -> c -> d
