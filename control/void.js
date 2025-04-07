function curve(arr, amount) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += amount;
  }
}
var grades = [77, 55, 70, 60];
curve(grades, 5);
console.log(grades);
