// Algorithm Description:
// The 'fibonacci' function calculates the nth Fibonacci number recursively.
// It sums the two preceding numbers in the sequence until reaching the base cases of 0 or 1.

const fibonacci = (n) => {
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
fibonacci(2); // -> 1
