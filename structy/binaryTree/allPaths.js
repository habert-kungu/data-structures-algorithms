const allTreePaths = (root) => {
  const paths = _allTreePaths(root);
  for (let path of paths) {
    path.reverse();
  }
  return paths;
};
const _allTreePaths = (root) => {
  if (root === null) return [];
  if (root.right === null && root.left === null) return [[root.val]];

  const allPath = [];
  const leftPath = _allTreePaths(root.left);
  for (path of leftPath) {
    path.push(root.val);
    allPath.push(path);
  }
  const rightPath = _allTreePaths(root.right);
  for (path of rightPath) {
    path.push(root.val);
    allPath.push(path);
  }
  return allPath;
};
