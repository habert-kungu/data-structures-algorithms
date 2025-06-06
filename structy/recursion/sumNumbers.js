// Algorithm Description:
// The 'sumNumbersRecursive' function sums an array of numbers recursively.
// It adds the first number to the sum of the rest of the array until the array is empty.

// this is using a simple reducer function
// const sumNumbersRecursive = (numbers) => {
//   return numbers.reduce((num1, num2) => num1 + num2, 0);
// };
// sumNumbersRecursive([5, 2, 9, 10]); // -> 26

// in this we are going to use a recursion
const sumNumbersRecursive = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};
sumNumbersRecursive([5, 2, 9, 10]); // -> 26
