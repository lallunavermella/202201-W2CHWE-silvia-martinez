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
  describe("When the function recives rows = 1 and column =2", () => {
    test("Then retrun an a nested array [[false, false,],[false, false]]", () => {
      const rows = 2;
      const columns = 2;

      const boardGame = newArrayGame(rows, columns);

      // Act
      const expectBoard = [
        [false, false],
        [false, false],
      ];
      // Assert
      expect(boardGame).toStrictEqual(expectBoard);
    });
  });
});
