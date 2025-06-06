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
