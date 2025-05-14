var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];

for (var row = 0; row < grades.length; row++) {
  total = 0;
  for (var col = 0; col < grades[row].length; col++) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log("Student: " + (row + 1) + " average: " + average.toFixed(2));
}
