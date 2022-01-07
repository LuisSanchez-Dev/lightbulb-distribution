import BaseAlgorithm from "./BaseAlgorithm";
import Grid from "./Grid";

export default class LRTD extends BaseAlgorithm {
  name = "LRTD";
  description =
    "Left-Right Top-Down algorithm, it goes from the upper left corner to the lower right corner, placing lightbulbs every time there is no light in that position";
  declare input: string[][];

  constructor(input: string[][]) {
    super(input);
  }

  run(): string[][] {
    const grid = new Grid(this.input);

    const { squares } = grid;

    for (let i = 0; i < squares.length; i++) {
      const row = squares[i];
      for (let j = 0; j < row.length; j++) {
        const square = row[j];
        if (!square.isWall && !square.isIlluminated) {
          square.isLightbulb = square.isIlluminated = true;
          let offsetX = 1;
          if (j + offsetX < row.length) {
            let nextSquare = row[j + offsetX];
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
            let nextSquare = squares[i + offsetY][j];
            while (nextSquare != undefined && !nextSquare.isWall) {
              nextSquare.isIlluminated = true;
              offsetY++;
              if (i + offsetY >= squares.length) {
                break;
              }
              nextSquare = squares[i + offsetY][j];
            }
          }
        }
      }
    }

    return Grid.toStringGrid(squares);
  }
}
