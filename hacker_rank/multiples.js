function solution(number) {
  return new Array(...number)
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((num1, num2) => num1 + num2, 0);
}
