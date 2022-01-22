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

const countNeighbors = (row, column) => {
  let aliveNeighbors = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; i++) {
      if (boardGame[row + i][column + j].status && i !== 0 && j !== 0) {
        aliveNeighbors += 1;
      }
    }
  }
  return aliveNeighbors;
};
class CellDefault {
  status = "";

  row;

  column;

  neighborsAlive;

  constructor(status, row, column) {
    this.status = status;

    this.row = row;

    this.column = column;
  }

  checkForAliveNeighbors = () => {
    const x = this.row;
    const y = this.column;
    countNeighbors(x, y);
  };
}
console.log(CellDefault);
