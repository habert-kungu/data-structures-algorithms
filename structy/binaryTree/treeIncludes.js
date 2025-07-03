const treeIncludes = (root, target) => {
  if (root === null) return false;
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.val === target) return true;
    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }
  return false;
};
