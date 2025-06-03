const pairs = (elements) => {
  const result = [];
  for (let i = 0; i < elements.length; i += 1) {
    for (let j = i + 1; j < elements.length; j += 1) {
      const pair = [elements[i], elements[j]];
      result.push(pair);
    }
  }
  console.log(result);
};
const elements = ["a", "b", "c", "d"];
pairs(elements);
