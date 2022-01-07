import Square from "./Square";

export default class Grid {
  squares: Square[][];

  constructor(inputGrid: string[][]) {
    this.squares = [];
    for (let y = 0; y < inputGrid.length; y++) {
      const row = [];
      for (let x = 0; x < inputGrid[y].length; x++) {
        row.push(
          new Square({
            isWall: inputGrid[y][x] === "1",
            grid: this,
            x,
            y,
          })
        );
      }
      this.squares.push(row);
    }
  }

  public get width(): number {
    return this.squares[0].length;
  }

  public get height(): number {
    return this.squares.length;
  }

  getOriginSquare(): Square {
    return this.squares[0][0];
  }

  getSquareAt(x: number, y: number): Square | null {
    if (
      x >= this.squares[0].length ||
      x < 0 ||
      y >= this.squares.length ||
      y < 0
    ) {
      return null;
    }
    return this.squares[y][x];
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
