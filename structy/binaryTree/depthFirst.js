class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// // this is the recursive one
// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const rightVal = depthFirstValues(root.right);
//   const leftVal = depthFirstValues(root.left);
//   return [root.val, ...leftVal, ...rightVal];
// };

//this s the iterative one
const depthFirstValues = (root) => {
  if (root === null) return [];
  let stack = [root];
  let values = [];
  while (stack.length > 0) {
    let current = stack.pop();
    values.push(current.val);
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return values;
};
