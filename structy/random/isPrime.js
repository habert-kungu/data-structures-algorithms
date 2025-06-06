// Algorithm Description:
// The 'isPrime' function checks if a number is prime.
// It returns false for numbers less than 2 and checks divisibility up to the square root of n.
// If the number is divisible by any number other than 1 and itself, it is not prime.
// The function returns true if the number is prime, and false otherwise.

const isPrime = (n) => {
  if (n < 2) return false;
  for (i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
    return false;
  }
  return true;
};
isPrime(2); // -> true
