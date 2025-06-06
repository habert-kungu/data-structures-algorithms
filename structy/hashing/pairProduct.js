// Algorithm Description:
// The 'pairProduct' function finds two indices in an array whose values multiply to a target product.
// It uses a hash map to store previously seen numbers for efficient lookup.
// The function iterates through the array, calculating the complement of each number
// (i.e., the value that, when multiplied by the number, equals the target product).
// If the complement is found in the hash map, the function returns the current index and
// the index of the complement. Otherwise, the number is added to the hash map, and the
// process continues until a pair is found or the end of the array is reached.

const pairProduct = (numbers, targetProduct) => {
  let previousNums = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetProduct / num;
    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }
    previousNums[num] = i;
  }
};
pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
