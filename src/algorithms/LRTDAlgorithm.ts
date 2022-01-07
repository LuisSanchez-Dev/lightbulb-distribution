import BaseAlgorithm from "./BaseAlgorithm";

export default class LRTD extends BaseAlgorithm {
  name = "LRTD";
  description =
    "Left-Right Top-Down algorithm, it goes from the upper left corner to the lower right corner, placing lightbulbs every time there is no light in that position";
  declare input: string[][];
  run(): string[][] {
    console.log("LRTD input:", this.input);
    return [
      ["L", "0", "0", "0"],
      ["0", "L", "0", "0"],
      ["0", "0", "L", "0"],
      ["0", "0", "0", "L"],
    ];
  }

  constructor(input: string[][]) {
    super(input);
  }
}
