import BaseAlgorithm from "./BaseAlgorithm";

class Square {
  isWall = false;
  isIlluminated = false;
  isLightbulb = false;
  constructor(isWall: boolean) {
    this.isWall = isWall;
  }

  static toStringArrays(squares: Square[][]): string[][] {
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

export default class LRTD extends BaseAlgorithm {
  name = "LRTD";
  description =
    "Left-Right Top-Down algorithm, it goes from the upper left corner to the lower right corner, placing lightbulbs every time there is no light in that position";
  declare input: string[][];

  constructor(input: string[][]) {
    super(input);
  }

  run(): string[][] {
    const squares = this.input.map((row) => {
      return row.map((value) => {
        return new Square(value === "1");
      });
    });
    console.log(squares);
    for (let i = 0; i < squares.length; i++) {
      const row = squares[i];
      for (let j = 0; j < row.length; j++) {
        const square = row[j];
        if (!square.isWall && !square.isIlluminated) {
          square.isLightbulb = square.isIlluminated = true;
          let offsetX = 1;
          if (j + offsetX < row.length) {
            let nextSquare: Square = row[j + offsetX];
            while (!nextSquare.isWall) {
              nextSquare.isIlluminated = true;
              offsetX++;
              if (j + offsetX >= row.length) {
                break;
              }
              nextSquare = row[j + offsetX];
            }
          }
          let offsetY = 1;
          if (i + offsetY < squares.length) {
            let nextSquare: Square = squares[i + offsetY][j];
            console.log({ i, j });
            while (nextSquare != undefined && !nextSquare.isWall) {
              console.log("Starting column loop");
              console.log({ i: i + offsetY, j, nextSquare });
              nextSquare.isIlluminated = true;
              offsetY++;
              console.log("Before error");
              if (i + offsetY >= squares.length) {
                console.log("After error");
                break;
              }
              nextSquare = squares[i + offsetY][j];
              console.log({ i: i + offsetY, j, nextSquare });
              console.log("Ended column loop");
            }
          }

          console.log("Ended all collumn");
        }
      }
    }
    console.log("Converting to strings");
    return Square.toStringArrays(squares);
  }
}
