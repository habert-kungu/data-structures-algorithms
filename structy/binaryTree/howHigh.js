const howHigh = (node) => {
  if (node === null) return -1;
  const rigthPath = howHigh(node.right);
  const leftPath = howHigh(node.left);
  return 1 + Math.max(rigthPath, leftPath);
};
