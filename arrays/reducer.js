var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.reduce(
  (runningTotal, currentValue) => runningTotal + currentValue,
);
console.log(sum);
