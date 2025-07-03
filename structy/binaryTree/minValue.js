const treeMinValue = (root) => {
  if (root.left && root.right === null) return root.val;
  let minVal = Infinity;
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.val < minVal) {
      minVal = current.val;
    }
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return minVal;
};
