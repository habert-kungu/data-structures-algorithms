// if the matrix where to beof square
// function diagonalDifference(arr) {
//     let leftDiagonal = 0;
//     let rightDiagonal = 0;
//     const n = arr.length;
//
//     for (let i = 0; i < n; i++) {
//         leftDiagonal += arr[i][i];               // Left diagonal (top-left to bottom-right)
//         rightDiagonal += arr[i][n - 1 - i];      // Right diagonal (top-right to bottom-left)
//     }
//
//     return Math.abs(leftDiagonal - rightDiagonal);
// }
function diagonalDifference(arr) {
  let rows = arr.length;
  let column = arr[0]?.length || 0;
  let minDim = Math.min(rows, column);

  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < minDim; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][minDim - 1 - i];
  }
  return Math.abs(leftDiagonal - rightDiagonal);
}
const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
console.log(diagonalDifference(matrix)); // Output: 0 (|1+7+13+19| - |5+9+13+17| = |40 - 44| = 4)
