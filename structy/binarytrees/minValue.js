class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeMinValue = (root) => {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};

// // this is the iterative vesion
// const treeMinValue = (root) => {
//   if (root === minVal) return root.val;
//   let stack = [root];
//   let minVal = Infinity;
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val < minVal) {
//       minVal = current.val;
//     }
//     if (current.left !== null) stack.push(current.left);
//     if (current.right !== null) stack.push(current.right);
//   }
//   return minVal;
// };
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

treeMinValue(a); // -> 3
