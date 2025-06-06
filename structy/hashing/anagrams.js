// Algorithm Description:
// The 'anagrams' function checks if two strings are anagrams of each other.
// It counts the frequency of each character in the first string, then decrements
// the count for each character found in the second string. If all counts return to zero
// and no extra characters are found, the strings are anagrams.

const anagrams = (s1, s2) => {
  let count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char] -= 1;
    }
  }
  console.log(count);
  for (let char in count) {
    if (count[char] !== 0) return false;
  }
  return true;
};
anagrams("restful", "fluster"); // -> true
