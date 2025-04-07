var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
const add = (numbers) => console.log(sum(...numbers));
