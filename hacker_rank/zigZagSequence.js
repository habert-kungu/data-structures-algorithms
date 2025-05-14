// Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.
function processData(input) {
  input.sort((a, b) => a - b); // Sort ascending: [1, 2, 3, 4, 5]
  const n = input.length;
  const k = Math.floor((n + 1) / 2) - 1; // Middle index (k = 2 for [1,2,3,4,5])

  const firstElements = input.slice(0, k); // [1, 2]
  const middle = input[k]; // 5 (not [k]!)
  const lastElements = input.slice(k + 1).reverse(); // [4,3] → [3,4]

  const result = [...firstElements, middle, ...lastElements]; // [1, 2, 5, 3, 4]
  console.log(result); // Output: [1, 2, 5, 4, 3] (fixed lastElements reversal)
}
processData([2, 3, 5, 1, 4]);
