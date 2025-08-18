// // this is the depthFirst iterative version
// const depthFirst = (graph, source) => {
//   const stack = [source];
//   while (stack.length > 0) {
//     const current = stack.pop(source);
//     console.log(current);
//     for ( let neighbours of graph[current]){
//       stack.push(neighbours)
//     }
//   }
// };

// // this is the recursive vesion
// const depthFirst = (graph, source) => {
//   console.log(source)
//   for (let neighbours of graph[source]){
//     depthFirst(graph, neighbours)
//
//   }
// };

// this is the breathFirst iterative version
const depthFirst = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbours of graph[current]) {
      queue.push(neighbours);
    }
  }
};
