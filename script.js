const setRow = 9; // definides per l'usuari
const setColumn = 9; // definides per l'usuari

/*  for (let i = 0; i < 3; i++) {
  const element = document.createElement("div");
  element.appendChild(document.createTextNode(""));
  document.querySelector("#super-grid").appendChild(element);
}  */
class CellDefault {
  row;
  column;
  status = "deadd";
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

  nextGeneration() {
    if (this.status) {
      if (this.neighborsAlive < 2 || this.neighborsAlive > 3) {
        this.status = "dead";
      }
    } else if (this.neighborsAlive === 3) {
      this.status = "alive";
    }
  }
}

const newArrayGame = (rows, columns) => {
  const boardGame = [];
  for (let i = 0; i < rows; i++) {
    boardGame.push([]);
    const divOut = document.createElement("div");
    divOut.id = `${i}`;
    divOut.className = "divOut";

    document.querySelector("#super-grid").appendChild(divOut);

    for (let j = 0; j < columns; j++) {
      boardGame[i][j] = new CellDefault(i, j);

      const divInside = document.createElement("div");
      divInside.id = `${i}-${j}`;
      divInside.className = "divInside";

      divOut.appendChild(divInside);
    }
  }
  return boardGame;
};

const boardGame = newArrayGame(setRow, setColumn);

const countNeighbors = (row, column) => {
  let aliveNeighbors = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (row === 0 && column === 0 && i !== -1 && j !== -1) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (row === 0 && column === setColumn - 1 && i !== -1 && j !== 1) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (row === setRow - 1 && column === 0 && i !== 1 && j !== -1) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (
        row === setRow - 1 &&
        column === setColumn - 1 &&
        i !== 1 &&
        j !== 1
      ) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      }

      if (row === 0 && i !== -1) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (row === setRow - 1 && i !== 1) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (column === 0 && j !== -1) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      } else if (column === setColumn - 1 && j !== 1) {
        if (boardGame[row + i][column + j].status) {
          aliveNeighbors += 1;
        }
      }

      if (boardGame[row + i][column + j].status && i !== 0 && j !== 0) {
        aliveNeighbors += 1;
      }
    }
  }
  return aliveNeighbors;
};
