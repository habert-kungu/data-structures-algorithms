// Algorithm Description:
// The 'intersection' function finds the common elements between two arrays.
// It iterates through the first array and checks if each element exists in the second array.
// If an element from the first array is found in the second array, it is added to the result array.
// The process continues until all elements of the first array have been checked.
// Finally, the result array, which contains the common elements, is returned.

const intersection = (a, b) => {
  let result = [];
  for (let nums of a) {
    if (b.includes(nums)) {
      result.push(nums);
    }
  }
  return result;
};
intersection([2, 4, 6], [4, 2]); // -> [2,4]
