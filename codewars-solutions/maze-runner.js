function mazeRunner(maze, directions) {
  const points = findPoints(maze);
  let nextPosition = points.start;

  for (const d of directions) {
    nextPosition = move(d, nextPosition);

    if (isOutOfMaze(nextPosition, maze.length) || isWall(maze, nextPosition))
      return "Dead";

    if (isExit(maze, nextPosition)) return "Finish";
  }

  return "Lost";
}

const move = (direction, position) => {
  switch (direction) {
    case "N":
      return moveNorth(position);
    case "S":
      return moveSouth(position);
    case "E":
      return moveEast(position);
    case "W":
      return moveWest(position);
  }
};

const moveNorth = ([row, col]) => {
  return [row - 1, col];
};

const moveSouth = ([row, col]) => {
  return [row + 1, col];
};

const moveEast = ([row, col]) => {
  return [row, col + 1];
};

const moveWest = ([row, col]) => {
  return [row, col - 1];
};

const isOutOfMaze = (position, dimension) => {
  return position.some((p) => p >= dimension || p < 0);
};

const isWall = (maze, [row, col]) => {
  return maze[row][col] === 1;
};

const isExit = (maze, [row, col]) => {
  return maze[row][col] === 3;
};

const findPoints = (maze) => {
  const points = { start: [0, 0], finish: [0, 0] };

  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze.length; col++) {
      if (maze[row][col] === 2) points.start = [row, col];
      if (maze[row][col] === 3) points.finish = [row, col];
    }
  }

  return points;
};

const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

const directions = [
  "N",
  "N",
  "N",
  "N",
  "N",
  "E",
  "E",
  "S",
  "S",
  "S",
  "S",
  "S",
  "S",
];
const output = mazeRunner(maze, directions);
console.log(output);
