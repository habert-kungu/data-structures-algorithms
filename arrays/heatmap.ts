let heatmap: number[][] = Array(500)
  .fill(0)
  .map(() => Array(500).fill(0));

// Log a click
function recordClick(x: number, y: number) {
  if (x >= 0 && x < 500 && y >= 0 && y < 500) {
    heatmap[x][y]++;
  }
}

// Simulate some clicks
recordClick(100, 200);
recordClick(100, 201);
recordClick(300, 400);

// Render it (pseudo-code for a canvas)
function drawHeatmap(ctx: CanvasRenderingContext2D) {
  for (let x = 0; x < 500; x++) {
    for (let y = 0; y < 500; y++) {
      let intensity = heatmap[x][y];
      let color = `rgba(${Math.min(intensity * 50, 255)}, 0, ${255 - intensity * 50}, 0.7)`;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
