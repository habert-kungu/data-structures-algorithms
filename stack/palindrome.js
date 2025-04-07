function isPalindrome(word) {
  var stack = [];
  for (var i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  var rword = "";
  while (stack > 0) {
    rword += stack.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}
var word = "hello";
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
word = "racecar";
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
