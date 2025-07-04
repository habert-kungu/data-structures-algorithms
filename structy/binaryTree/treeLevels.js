const treeLevels = (root) => {
  if (root === null) return [];
  let stack = [{ node: root, levelNum: 0 }];
  let levels = [];
  while (stack.length > 0) {
    let { node, levelNum } = stack.pop();
    if (levels.length === levelNum) {
      levels.push(node.val);
    } else {
      levels[levelNum].push(node.val);
    }
    if (node.left !== null)
      stack.push({ node: node.left, levelNum: levelNum + 1 });
    if (node.right !== null)
      stack.push({ node: node.right, levelNum: levelNum + 1 });
  }
  return levels;
};
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ];
