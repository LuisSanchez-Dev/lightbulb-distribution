export default class Square {
  isWall = false;
  isIlluminated = false;
  isLightbulb = false;
  constructor(isWall: boolean) {
    this.isWall = isWall;
  }
}
