const treeSum = (root) => {
  if (root === null) return 0;
  const rightVal = treeSum(root.right);
  const leftVal = treeSum(root.left);
  return root.val + rightVal + leftVal;
};
