const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const rightVal = maxPathSum(root.right);
  const leftVal = maxPathSum(root.left);
  return root.val + Math.max(rightVal, leftVal);
};

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

// maxPathSum(a); // -> 59a); // -> -8
