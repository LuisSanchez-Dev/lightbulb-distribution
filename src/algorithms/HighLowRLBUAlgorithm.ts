import BaseAlgorithm from "./BaseAlgorithm";
import Grid from "./Grid";
import Square from "./Square";

export default class HighLowRLBUAlgorithm extends BaseAlgorithm {
  name = "High-Low RLBU";
  description =
    "High-Low Right-Left Bottom-Up algorithm, it goes from the lower right corner to the upper left corner, gets the position where a lightbulb will illuminate the most and cycles again until everything is illuminated";
  declare input: string[][];
  declare lightbulbsUsed: number;
  declare output: string[][];

  constructor(input: string[][]) {
    super(input);
  }

  run(): string[][] {
    const grid = new Grid(this.input);

    let processFinished = false;
    while (!processFinished) {
      let highestRange = 0;
      let highestRangeSquare: Square | null = null;
      for (let x = grid.width - 1; x >= 0; x--) {
        for (let y = grid.height - 1; y >= 0; y--) {
          const square = grid.getSquareAt(x, y);
          if (!square) continue;

          if (square.illuminationRange > highestRange) {
            highestRange = square.illuminationRange;
            highestRangeSquare = square;
          }
        }
      }
      if (highestRangeSquare) {
        highestRangeSquare.placeLightbulb();
        this.lightbulbsUsed++;
      } else {
        processFinished = true;
      }
    }

    this.output = Grid.toStringGrid(grid.squares);
    return this.output;
  }
}
