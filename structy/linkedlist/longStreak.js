// Algorithm Description:
// The 'longestStreak' function finds the length of the longest streak of consecutive nodes with the same value in a linked list.
// It iterates through the list, tracking the current and maximum streaks.
// If the value of the current node is the same as the previous node, the current streak is increased.
// If not, the current streak is reset to 1.
// The maximum streak is updated if the current streak exceeds it.
// The process continues until all nodes are visited.
// The function returns the length of the longest streak found in the list.

const longestStreak = (head) => {
  let currentNode = head;
  let maxStreak = 0;
  let currentStreak = 0;
  let prevVal = null;
  //null ->  5 -> 5 -> 7 -> 7 -> 7 -> 6
  //prevVal
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
