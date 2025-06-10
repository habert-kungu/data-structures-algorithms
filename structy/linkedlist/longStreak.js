const longestStreak = (head) => {
  let currentNode = head;
  let maxStreak = 0;
  let currentStreak = 0;
  let prevVal = null;
  while (currentNode !== null) {
    if (currentNode === prevVal) {
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
    prevVal = currentNode.val;
    currentNode = currentNode.next;
  }
  return maxStreak;
};
const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3
