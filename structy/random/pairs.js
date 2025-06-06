// Algorithm Description:
// The 'pairs' function generates all unique pairs from an array.
// It uses nested loops to create every possible pair without repetition.
// The outer loop picks an element one by one
// The inner loop pairs the picked element with the rest of the elements
// This continues until all elements have been paired with each other

const pairs = (elements) => {
  let result = [];
  for (i = 0; i <= elements.length; i += 1) {
    for (j = i + 1; j <= elements.length; j += 1) {
      return result.push([elements[i], elements[j]]);
    }
  }
  return result;
};
pairs(["a", "b", "c"]); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]
