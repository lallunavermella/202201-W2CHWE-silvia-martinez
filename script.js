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

  checkForAliveNeighbors () ={
    
  }
}

neighbors = () =>{
  let neighborCell =  neighborCount();
  if(cell.status === "alive"){
    if(neighborCell < 2 || neighborCell > 3){
      cell.status = "dead";
    }else{
      cell.status = "alive";
    }

  }else{
    if(neighborCell === 3){
      cell.status = "alive"
    }else{
      cell.status = "dead"
    }

  }
}

console.log(nextGeneration(boardGame));
