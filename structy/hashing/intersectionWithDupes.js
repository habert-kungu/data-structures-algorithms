// Algorithm Description:
// The 'intersectionWithDupes' function finds the intersection of two arrays, including duplicate elements.
// It counts occurrences of each element in both arrays and includes the minimum count in the result.
// For example, intersectionWithDupes(["q", "b", "m", "s", "s", "s"], ["s", "m", "s"])
// would return ["m", "s", "s"] because "m" appears once in each array and "s" appears three times in the first
// array and twice in the second, so the minimum count of "s" is two, and thus, "s" is included twice in the result.

const intersectionWithDupes = (a, b) => {
  let countA = elementCount(a);
  let countB = elementCount(b);
  let result = [];
  for (let element in countA) {
    if (element in countB) {
      for (let i = 0; i < Math.min(countA[element], countB[element]); i++) {
        result.push(element);
      }
    }
  }
  return result;
};
const elementCount = (elements) => {
  const count = {};
  for (let element of elements) {
    if (!(element in count)) {
      count[element] = 0;
    }
    count[element] += 1;
  }
  return count;
};
intersectionWithDupes(["q", "b", "m", "s", "s", "s"], ["s", "m", "s"]); // -> ["m", "s", "s"]
