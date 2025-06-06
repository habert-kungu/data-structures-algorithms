// ising a obj make it fast
const pairSum = (numbers, targetSum) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }
    previousNums[num] = i;
  }
};
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

// nested loops
// const pairSum = (numbers, targetSum) => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; i < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === targetSum) {
//         return [i, j];
//       }
//     }
//   }
// };
// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
