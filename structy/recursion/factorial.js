// Algorithm Description:
// The 'factorial' function calculates the factorial of a number recursively.
// It multiplies the number by the factorial of the number minus one until reaching zero.
// For example, the factorial of 6 is:
// 6 * 5 * 4 * 3 * 2 * 1 = 720

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(18)); // -> 6402373705728000
