let arr = [1, 2, 3, 4, 5, 6];
function reverse(arr, d) {
  let rotation = arr.splice(0, d);
  let result = arr.concat(rotation);
  console.log(result);
}
reverse(arr, 3);
