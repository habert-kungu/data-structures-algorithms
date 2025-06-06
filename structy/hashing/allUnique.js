// Algorithm Description:
// The 'allUnique' function checks if all elements in an array are unique.
// It uses a Set to filter out duplicates and compares the size of the Set to the array length.
// If they are equal, all elements are unique.

const allUnique = (items) => {
  const uniqueItems = new Set(items);
  return uniqueItems.size === items.length;
};
allUnique(["q", "r", "s", "a"]); // -> true
