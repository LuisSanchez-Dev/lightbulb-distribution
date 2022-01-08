import Grid from "./Grid";

export default class Square {
  isWall = false;
  isIlluminated = false;
  isLightbulb = false;
  private grid: Grid;
  x: number;
  y: number;
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

  public get illuminationRange(): number {
    if (this.isWall) {
      return -1;
    }
    let range = this.isIlluminated ? 0 : 1;
    let squareAbove = this.above();
    while (squareAbove != null && !squareAbove.isWall) {
      if (!squareAbove.isIlluminated) {
        range++;
      }
      squareAbove = squareAbove.above();
    }

    let squareToRight = this.right();
    while (squareToRight != null && !squareToRight.isWall) {
      if (!squareToRight.isIlluminated) {
        range++;
      }
      squareToRight = squareToRight.right();
    }

    let squareBelow = this.below();
    while (squareBelow != null && !squareBelow.isWall) {
      if (!squareBelow.isIlluminated) {
        range++;
      }
      squareBelow = squareBelow.below();
    }

    let squareToLeft = this.left();
    while (squareToLeft != null && !squareToLeft.isWall) {
      if (!squareToLeft.isIlluminated) {
        range++;
      }
      squareToLeft = squareToLeft.left();
    }
    return range;
  }

  placeLightbulb(): void {
    this.isLightbulb = this.isIlluminated = true;
    let squareAbove = this.above();
    while (squareAbove != null && !squareAbove.isWall) {
      squareAbove.isIlluminated = true;
      squareAbove = squareAbove.above();
    }

    let squareToRight = this.right();
    while (squareToRight != null && !squareToRight.isWall) {
      squareToRight.isIlluminated = true;
      squareToRight = squareToRight.right();
    }

    let squareBelow = this.below();
    while (squareBelow != null && !squareBelow.isWall) {
      squareBelow.isIlluminated = true;
      squareBelow = squareBelow.below();
    }

    let squareToLeft = this.left();
    while (squareToLeft != null && !squareToLeft.isWall) {
      squareToLeft.isIlluminated = true;
      squareToLeft = squareToLeft.left();
    }
  }
}
