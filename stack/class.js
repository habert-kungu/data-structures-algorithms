// class imlpementation of a stack
// converting numbers to any of the base 2 to 9
function mulBase(num, base) {
  let s = [];
  do {
    s.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);
  var converted = "";
  while (s.length > 0) {
    converted += s.pop();
  }
  return converted;
}
console.log(mulBase(3, 4));
