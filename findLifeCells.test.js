function findLifeCells() {
  return [
    ["A", "A", "A"],
    ["B", "A", "B"],
  ];
}

describe("Given a function findLifeCells", () => {
  describe("When the function recives an array ", () => {
    test("Then retrun a new array", () => {
      const array = [
        ["A", "A", "A"],
        ["B", "A", "B"],
      ];

      const lifeCells = findLifeCells(array);
      const expectResult = [
        ["A", "A", "A"],
        ["B", "A", "B"],
      ];

      expect(lifeCells).toStrictEqual(expectResult);
    });
  });
});
