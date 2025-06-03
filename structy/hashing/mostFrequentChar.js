// so this problem requires us to find the most frequent letter in a string
// initialize a count object to keep track of the frequency of each character
// we will iterate through the string and update the count object
// then we will find the character with the highest frequency
// finally we will return the character with the highest frequency
// if there are multiple characters with the same frequency, we will return the first one we encounter
const mostFrequentChar = (s) => {
  let count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  let maxCount = 0;
  let mostFrequent = "";
  for (let char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char];
      mostFrequent = char;
    }
  }
  return mostFrequent;
};

console.log(mostFrequentChar("bookeeper"));
