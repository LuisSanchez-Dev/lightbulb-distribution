import Grid from "./Grid";

export default class Square {
  isWall = false;
  isIlluminated = false;
  isLightbulb = false;
  private grid: Grid;
  private x: number;
  private y: number;
  constructor(squareOptions: {
    isWall: boolean;
    grid: Grid;
    x: number;
    y: number;
  }) {
    this.isWall = squareOptions.isWall;
    this.grid = squareOptions.grid;
    this.x = squareOptions.x;
    this.y = squareOptions.y;
  }

  left(): Square | null {
    return this.grid.getSquareAt(this.x - 1, this.y);
  }
  right(): Square | null {
    return this.grid.getSquareAt(this.x + 1, this.y);
  }
  above(): Square | null {
    return this.grid.getSquareAt(this.x, this.y - 1);
  }
  below(): Square | null {
    return this.grid.getSquareAt(this.x, this.y + 1);
  }
}
