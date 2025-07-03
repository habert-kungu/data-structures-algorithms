const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const rightPath = treeValueCount(root.right, target);
  const leftPath = treeValueCount(root.left, target);
  const match = root.val === target ? 1 : 0;
  return match + leftPath + rightPath;
};
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   let stack = [root];
//   let count = 0;
//   while (stack.length > 0) {
//     let current = stack.pop();
//     if (current.val === target) {
//       count += 1;
//     }
//     if (current.right !== null) stack.push(current.right);
//     if (current.left !== null) stack.push(current.left);
//   }
//   return count;
// };
//      12
//    /   \
//   6     6
//  / \     \
// 4  6     12

treeValueCount(a, 12); // -> 2;
