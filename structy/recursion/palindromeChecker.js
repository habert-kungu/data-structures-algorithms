// Algorithm Description:
// The 'palindrome' function checks if a string is a palindrome using recursion.
// It compares the first and last characters and recursively checks the substring in between.
// Base cases:
// - If the string is empty or has a length of 1, it is a palindrome (returns true).
// - If the first and last characters are not the same, it is not a palindrome (returns false).
// Recursive case:
// - The function calls itself with the substring that excludes the first and last characters.

const palindrome = (s) => {
  // basecase
  if (s.length === 0 || s.length === 1) return true;
  // check if first and last char arenot the same
  if (s[0] !== s[s.length - 1]) {
    return false;
  }
  // check if the middle char are the same
  palindrome(s.slice(1, -1));
};
palindrome("pops"); // -> false
