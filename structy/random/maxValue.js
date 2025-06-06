// Algorithm Description:
// The 'maxValue' function finds the maximum value in an array.
// It iterates through the array and keeps track of the largest number found.
// If the current number is greater than the 'maxValue', it updates 'maxValue'.
// Finally, it returns the largest number found in the array.

const maxValue = (nums) => {
  const maxValue = Infinity;
  for (let number = 0; number < nums.length; number++) {
    if (number > maxValue) {
      maxValue = number;
    }
  }
  return maxValue;
};
maxValue([4, 7, 2, 8, 10, 9]); // -> 10
