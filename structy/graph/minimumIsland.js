const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = -Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  let count = 0;
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;
  const position = r + "," + c;

  if (!rowInbound || !colInbound) return 0;
  if (grid[r][c] === "W") return 0;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);

  return size;
};
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

minimumIsland(grid); // -> 2
