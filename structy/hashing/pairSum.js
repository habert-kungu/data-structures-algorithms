const pairSum = (numbers, targetSum) => {
  const previous = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previous) {
      return [i, previous[complement]];
    }
    previous[num] = i;
  }
};
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
