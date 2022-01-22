const cellsAB = [
  ["A", "A", "A", "B"],
  ["A", "A", "B", "B"],
  ["A", "B", "A", "A"],
  ["A", "A", "A", "A"],
];
const row = 2;
const column = 2;
const newArrayGame = (rows, columns) => {
  const boardGame = [];
  for (let i = 0; i < rows; i++) {
    boardGame.push([]);
    for (let j = 0; j < columns; j++) {
      boardGame[i][j] = false;
    }
  }
  return boardGame;
};
const boardGame = newArrayGame(row, column);
