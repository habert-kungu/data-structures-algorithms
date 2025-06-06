// Algorithm Description:
// The 'mostFrequentChar' function finds the character that appears most frequently in a string.
// It counts occurrences of each character and returns the one with the highest count.

const mostFrequentChar = (s) => {
  let frequent = {};
  for (let char of s) {
    if (!(char in frequent)) {
      frequent[char] = 0;
    }
    frequent[char] += 1;
  }
  let largest = null;
  for (let char of frequent) {
    if (largest === null || frequent[char] > frequent[largest]) {
      largest = char;
    }
  }
  return largest;
};
mostFrequentChar("bookeeper"); // -> 'e'
