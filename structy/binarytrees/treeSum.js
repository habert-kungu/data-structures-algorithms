class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeSum = (root) => {
  if (root === null) return 0;
  let queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;
    if (current.right !== null) queue.push(current.right);
    if (current.left !== null) queue.push(current.left);
  }
  return sum;
};
// // the recursive type
// const treeSum = (root) => {
//   if (root === null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

// // using the iterative stack
// const treeSum = (root) => {
//   if (root === null) return 0;
//   let stack = [root];
//   let sum = 0;
//   while (stack.length > 0) {
//     const current = stack.pop();
//     sum += current.val;
//     if (current.right !== null) stack.push(current.right);
//     if (current.left !== null) stack.push(current.left);
//   }
//   return sum;
// };
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21
