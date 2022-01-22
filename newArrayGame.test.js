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

describe("Given a function newArrayGame", () => {
  describe("When the function recives rows = 2 and column =2", () => {
    test("Then retrun an a nested array [[false, false],[false, false]]", () => {
      const rows = 2;
      const columns = 2;
      const boardGame = newArrayGame(rows, columns);
      const expectBoard = [
        [false, false],
        [false, false],
      ];
      expect(boardGame).toStrictEqual(expectBoard);
    });
  });
  describe("When the function recives rows = 5 and column =5", () => {
    test("Then retrun an a nested array [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false]]", () => {
      const rows = 5;
      const columns = 5;
      const boardGame = newArrayGame(rows, columns);
      const expectBoard = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ];
      expect(boardGame).toStrictEqual(expectBoard);
    });
  });
});

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
    // eslint-disable-next-line no-use-before-define
    this.neighborsAlive = countNeighbors(x, y);
  }
}
const arrayGame = (rows, columns) => {
  const boardGame = [[]];
  for (let i = 0; i < rows; i++) {
    boardGame[i] = [];
    for (let j = 0; j < columns; j++) {
      boardGame[i][j] = new CellDefault(i, j);
    }
  }
  return boardGame;
};

let game = arrayGame(10, 10);

const countNeighbors = (row, column) => {
  let aliveNeighbors = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (game[row + i][column + j].status && i !== 0 && j !== 0) {
        aliveNeighbors += 1;
      }
    }
  }
  return aliveNeighbors;
};

describe("Given a function countNeighbors", () => {
  describe("When the function recives a column and a row", () => {
    test.only("Then retrun the number of neighbors alive", () => {
      const row = 3;
      const column = 3;
      const cel1 = 1;
      const cel2 = 2;
      const expectResult = 0;

      game = arrayGame(row, column);
      const aliveNeighbors = countNeighbors(cel1, cel2);

      expect(aliveNeighbors).toBe(expectResult);
    });
  });
});
