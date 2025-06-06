// Algorithm Description:
// The 'fizzBuzz' function generates an array of numbers from 1 to n, replacing multiples of 3 with 'fizz',
// multiples of 5 with 'buzz', and multiples of both with 'fizzbuzz'.

const fizzBuzz = (n) => {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};
fizzBuzz(11); // -> [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]
