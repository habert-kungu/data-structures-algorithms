// const isEven = (num) => num % 2 == 0;
// const isOdd = (num) => num % 2 != 0;
//
// var nums = [];
// for (var i = 0; i < 20; i++) {
//   nums[i] = i + 1;
// }
// console.log("Even numbers : " + nums.filter(isEven));
// console.log("Odd numbers : " + nums.filter(isOdd));
//
const isEven = (num) => num % 2 === 0; // Strict equality, one function
const nums = Array.from({ length: 20 }, (_, i) => i + 1); // Clean array creation

const [even, odd] = nums.reduce(
  ([evens, odds], num) =>
    isEven(num) ? [evens.concat(num), odds] : [evens, odds.concat(num)],
  [[], []],
);

console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);
