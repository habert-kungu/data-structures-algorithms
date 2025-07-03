const bottomRightValue = (root) => {
  if (root.right === null && root.left === null) return root.val;
  let queue = [root];
  let current = null;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return current.val;
};
