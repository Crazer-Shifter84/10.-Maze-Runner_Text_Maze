const maze = [
  "###########",
  "#P  #     #",
  "# # # ### #",
  "# #   #   #",
  "# ### ### #",
  "#     #   #",
  "### ### # #",
  "#   #   #E#",
  "###########"
];

let grid = maze.map(row => row.split(""));
let player = { x: 1, y: 1 };

const display = document.getElementById("maze");

function draw() {
  display.textContent = grid.map(r => r.join("")).join("\n");
}

function move(dx, dy) {
  const nx = player.x + dx;
  const ny = player.y + dy;

  const target = grid[ny][nx];

  if (target === "#") return;

  if (target === "E") {
    grid[player.y][player.x] = " ";
    grid[ny][nx] = "P";
    draw();
    setTimeout(() => alert("🎉 You escaped the maze!"), 100);
    document.removeEventListener("keydown", handleKey);
    return;
  }

  grid[player.y][player.x] = " ";
  grid[ny][nx] = "P";
  player = { x: nx, y: ny };
  draw();
}

function handleKey(e) {
  if (e.key === "w") move(0, -1);
  if (e.key === "s") move(0, 1);
  if (e.key === "a") move(-1, 0);
  if (e.key === "d") move(1, 0);
}

document.addEventListener("keydown", handleKey);
draw();