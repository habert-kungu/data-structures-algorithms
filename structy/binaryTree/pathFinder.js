const pathFind = (root, target) => {
  const result = pathFindHelper(root, target);
  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
};
const pathFindHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFindHelper(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);

    return leftPath;
  }

  const rightPath = pathFindHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);

    return rightPath;
  }
  return null;
};
