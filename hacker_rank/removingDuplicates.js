// // classic version
// let arr = [2, 3, 1, 2, 3];
// function findDuplicates(arr) {
//   let duplicates = arr.filter((item, index) => {
//     return arr.indexOf(item) !== index;
//   });
//   console.log(duplicates);
// }
//
// findDuplicates(arr);

// this is the optimized version
function findDuplicates(arr) {
  const answer = [];
  const hashedMap = new Map();
  for (const k of arr) {
    hashedMap.set(k, (hashedMap.get(k) || 0) + 1);
  }
  for (const [key, value] of hashedMap) {
    if (value > 1) {
      answer.push(key);
    }
  }
  return answer;
}
