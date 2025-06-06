const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0;
  return strings[0].length + sumOfLengths(strings.slice(1));
};
sumOfLengths(["0", "313", "1234567890"]); // -> 14
