const fizzBuzz = (n) => {
  let answer = [];
  for (let number = 0; number <= n; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      answer.push("fizzbuzz");
    } else if (number % 3 === 0) {
      answer.push("fizz");
    } else if (number % 5 === 0) {
      answer.push("buzz");
    } else {
      answer.push(number);
    }
  }
  console.log(answer);
};
fizzBuzz(20);
