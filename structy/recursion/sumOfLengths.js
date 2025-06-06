// Algorithm Description:
// The 'sumOfLengths' function sums the lengths of strings in an array recursively.
// It adds the length of the first string to the sum of the lengths of the rest.
// If the array is empty, it returns 0.

const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0;
  return strings[0].length + sumOfLengths(strings.slice(1));
};
sumOfLengths(["0", "313", "1234567890"]); // -> 14
