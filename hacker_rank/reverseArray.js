function reverseArray(a) {
  let reversalArray = a.reverse();

  console.log(reversalArray);
}
reverseArray([1, 2, 3, 4, 5]);

// manually using a for loop

// function reverseArray(a) {
//   let reversed = [];
//   for (let i = a.length - 1; i >= 0; i--) {
//     reversed.push(a[i]);
//   }
//
//   console.log(reversed);
// }
// reverseArray([1, 2, 3, 4, 5]);
