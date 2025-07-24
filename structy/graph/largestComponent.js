const largestComponent = (graph) => {
  let largest = 0;
  const visited = new Set();
  for (let node in graph) {
    const size = explore(graph, node, visited);
    if (size > largest) largest = size;
  }
  return largest;
};
const explore = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));
  let size = 1;
  for (let neighbours of graph[node]) {
    size += explore(graph, neighbours, visited);
  }
  return size;
};

largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
}); // -> 4
