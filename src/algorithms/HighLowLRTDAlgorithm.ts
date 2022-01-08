import BaseAlgorithm from "./BaseAlgorithm";
import Grid from "./Grid";
import Square from "./Square";

export default class HighLowLRTD extends BaseAlgorithm {
  name = "High-Low LRTD";
  description =
    "High-Low Left-Right Top-Down algorithm, it goes from the upper left corner to the lower right corner, gets the position where a lightbulb will illuminate the most and cycles again until everything is illuminated";
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
      for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
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
