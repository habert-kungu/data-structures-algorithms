function factorial(number) {
  if (number == 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5));
