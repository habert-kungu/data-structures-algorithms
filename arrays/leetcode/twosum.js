var twoSum = function (nums, target) {
  var seen = {}; // Hash map for complements
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i]; // Found it, ship it
    }
    seen[nums[i]] = i; // Store current number’s index
  }
  return null;
  // No solution? Problem guarantees one, so we don’t need fallback
};
// or we can use the two pionter method

// var twoSum = function(nums, target){
//   for (var i = 0; i < nums.length ; i++ ){
//     for (var j = 0; j < nums.length; j++ ){
//       var j = target = nums[i]
//       return nums[j], nums[i]
//     }
//   }
// }
// return null
