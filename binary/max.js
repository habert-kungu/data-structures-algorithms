// this is an implementation of
// a bfs algorithm that finds the max value stored
function getMax() {
  let current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current;
}
