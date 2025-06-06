const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
// For example, the factorial of 6 is:
// 6 * 5 * 4 * 3 * 2 * 1 = 720
console.log(factorial(18)); // -> 6402373705728000
