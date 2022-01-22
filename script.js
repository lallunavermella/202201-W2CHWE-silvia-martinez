const setRow = 10; // definides per l'usuari
const setColumn = 10; // definides per l'usuari
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
const boardGame = newArrayGame(setRow, setColumn);
console.table(boardGame);

class cell {
  status;

  row;

  column;

  neighbor;

  constructor(status, row, column, neighbor) {
    this.status = status;

    this.row = row;

    this.column = column;

    this.neighbor = neighbor;
  }
}

console.log(nextGeneration(boardGame));
