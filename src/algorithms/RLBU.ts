import BaseAlgorithm from "./BaseAlgorithm";
import Grid from "./Grid";

export default class RLBU extends BaseAlgorithm {
  name = "RLBU";
  description =
    "Right-LEFT Bottom-Up algorithm, it goes from the lower right corner to the upper left corner, placing lightbulbs every time there is no light in that position";
  declare input: string[][];
  declare lightbulbsUsed: number;

  constructor(input: string[][]) {
    super(input);
  }

  run(): string[][] {
    const grid = new Grid(this.input);
    for (let x = grid.width - 1; x >= 0; x--) {
      for (let y = grid.height - 1; y >= 0; y--) {
        const square = grid.getSquareAt(x, y);
        if (!square) continue;

        if (!square.isWall && !square.isIlluminated) {
          square.isLightbulb = square.isIlluminated = true;
          this.lightbulbsUsed++;
          let squareToLeft = square.left();
          while (squareToLeft && !squareToLeft.isWall) {
            squareToLeft.isIlluminated = true;
            squareToLeft = squareToLeft.left();
          }

          let squareAbove = square.above();
          while (squareAbove && !squareAbove.isWall) {
            squareAbove.isIlluminated = true;
            squareAbove = squareAbove.above();
          }
        }
      }
    }

    return Grid.toStringGrid(grid.squares);
  }
}
