// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   let result = [];
//   let stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);
//
//     if (current.right !== null) stack.push(current.right);
//     if (current.left !== null) stack.push(current.left);
//   }
//   return result;
// };
//
//

const depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  const currentResult = [root.val, ...leftValues, ...rightValues];

  return currentResult;
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
