import IAlgorithm from "./IAlgorithm";

export default class BaseAlgorithm implements IAlgorithm {
  name = "Base Algorithm";
  description =
    "This is the base algorithm, make sure to extend this class and assign a value to this.lightbulbs";
  lightbulbsUsed = 0;
  input: string[][];
  output: string[][] = [[]];
  run(): string[][] {
    this.output = [
      ["L", "0", "0", "0"],
      ["0", "L", "0", "0"],
      ["0", "0", "L", "0"],
      ["0", "0", "0", "L"],
    ];
    return this.output;
  }

  constructor(input: string[][]) {
    this.input = input;
  }
}
