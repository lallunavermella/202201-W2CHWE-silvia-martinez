const setRow = 10; // definides per l'usuari
const setColumn = 10; // definides per l'usuari

const newArrayGame = (rows, columns) => {
  const boardGame = [[]];
  for (let i = 0; i < rows; i++) {
    boardGame.push([]);
    for (let j = 0; j < columns; j++) {
      // eslint-disable-next-line no-use-before-define
      boardGame[i][j] = new CellDefault(i, j);
    }
  }
  return boardGame;
};

const boardGame = newArrayGame(setRow, setColumn);
console.table(boardGame);

const countNeighbors = (row, column) => {
  let aliveNeighbors = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (boardGame[row + i][column + j].status && i !== 0 && j !== 0) {
        aliveNeighbors += 1;
      }
    }
  }
  return aliveNeighbors;
};
class CellDefault {
  row;
  column;
  status = "";
  neighborsAlive;

  constructor(row, column) {
    this.row = row;

    this.column = column;
  }

  checkForAliveNeighbors() {
    const x = this.row;
    const y = this.column;
    this.neighborsAlive = countNeighbors(x, y);
  }
}
console.log(CellDefault);
