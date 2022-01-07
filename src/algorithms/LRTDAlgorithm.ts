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
    for (let x = 0; x < grid.width; x++) {
      for (let y = 0; y < grid.height; y++) {
        const square = grid.getSquareAt(x, y);
        if (!square) continue;

        if (!square.isWall && !square.isIlluminated) {
          square.isLightbulb = square.isIlluminated = true;
          let squareToRight = square.right();
          while (squareToRight && !squareToRight.isWall) {
            squareToRight.isIlluminated = true;
            squareToRight = squareToRight.right();
          }

          let squareBelow = square.below();
          while (squareBelow && !squareBelow.isWall) {
            squareBelow.isIlluminated = true;
            squareBelow = squareBelow.below();
          }
        }
      }
    }

    return Grid.toStringGrid(grid.squares);
  }
}
