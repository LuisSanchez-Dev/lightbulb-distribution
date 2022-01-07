import Square from "./Square";

export default class Grid {
  squares: Square[][];

  constructor(input: string[][]) {
    this.squares = input.map((row) => {
      return row.map((value) => {
        return new Square(value === "1");
      });
    });
  }

  static toStringGrid(squares: Square[][]): string[][] {
    return squares.map((row) => {
      return row.map((square) => {
        if (square.isWall) {
          return "1";
        } else if (square.isIlluminated && !square.isLightbulb) {
          return "0";
        } else if (square.isLightbulb) {
          return "L";
        } else {
          return "-";
        }
      });
    });
  }
}
