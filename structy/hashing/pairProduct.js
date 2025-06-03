const pairProduct = (numbers, targetProduct) => {
  let previous = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;
    if (complement in previous) {
      return [i, previous[complement]];
    }
    previous[num] = i;
  }
};

console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
