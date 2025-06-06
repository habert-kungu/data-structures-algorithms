// Algorithm Description:
// The 'exclusiveItems' function finds items that are exclusive to each of two arrays.
// It uses Sets to efficiently check for membership and collects items that are not present in both arrays.

// const exclusiveItems = (a, b) => {
//   let result = [];
//   for (let num of b) {
//     if (!a.includes(num)) {
//       result.push(num);
//     }
//   }
//   for (let num of a) {
//     if (!b.includes(num)) {
//       result.push(num);
//     }
//   }
//   return result;
// };
// exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [4,1,3,9,10]
const exclusiveItems = (a, b) => {
  let result = [];
  let setA = new Set(a);
  let setB = new Set(b);
  for (let num of setA) {
    if (setB.has(num)) {
      result.push(num);
    }
  }
  for (let num of setB) {
    if (setA.has(num)) {
      result.push(num);
    }
  }
  return result;
};
exclusiveItems([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [4,1,3,9,10]
