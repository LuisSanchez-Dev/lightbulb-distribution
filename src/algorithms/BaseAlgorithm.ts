import IAlgorithm from "./IAlgorithm";

export default class BaseAlgorithm implements IAlgorithm {
  name = "Base Algorithm";
  description =
    "This is the base algorithm, make sure to extend this class and assign a value to this.lightbulbs";
  lightbulbsUsed = 0;
  input: string[][];
  run(): string[][] {
    return [
      ["L", "0", "0", "0"],
      ["0", "L", "0", "0"],
      ["0", "0", "L", "0"],
      ["0", "0", "0", "L"],
    ];
  }

  constructor(input: string[][]) {
    this.input = input;
  }
}
