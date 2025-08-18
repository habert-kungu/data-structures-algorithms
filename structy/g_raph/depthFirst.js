const depthFirst = (graph, source) => {
  console.log(source);
  for (let neighbour of graph[neighbour]) {
    depthFirst(graph, neighbour);
  }
};
