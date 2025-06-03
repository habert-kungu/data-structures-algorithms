// for this problem, we will use a hash table to count the occurrences of each character
// in the first string and then decrement the count for each character in the second string.
// If all counts are zero at the end, the strings are anagrams.call

const anagrams = (s1, s2) => {
  let count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  for (let char of s2) {
    if (char in count) {
      count[char] -= 1;
    } else return false;
  }
  for (char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  return true;
};
// Test cases
console.log(anagrams("restful", "fluster"));
