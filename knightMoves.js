// shows the shortest possible way to get from one square to another
// by outputting all squares the knight will stop on along the way.

function knightValidMoves() {
  return [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
}

function checkValidMoves(pos) {
  return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
}

function BFS(start, end) {
  let q = [];
  let visited = new Set();

  q.push([start, [start]]);
  visited.add(`${start[0]},${start[1]}`);

  while (q.length !== 0) {
    let [currPos, path] = q.shift();

    if (currPos[0] === end[0] && currPos[1] === end[1]) {
      return path;
    }

    let moves = knightValidMoves();

    for (let move of moves) {
      let nextPos = [currPos[0] + move[0], currPos[1] + move[1]];
      let key = `${nextPos[0]},${nextPos[1]}`;

      if (checkValidMoves(nextPos) && !visited.has(key)) {
        visited.add(key);
        q.push([nextPos, path.concat([nextPos])]);
      }
    }
  }

  return null;
}

function knightMoves(start, end) {
  const path = BFS(start, end);
  if (path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((pos) => console.log(pos));
    return path;
  } else {
    console.log("No path found.");
    return [];
  }
}

knightMoves([3, 3], [4, 3]);
