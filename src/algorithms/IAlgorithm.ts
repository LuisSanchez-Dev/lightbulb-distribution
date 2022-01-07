export default interface IAlgorithm {
  name: string;
  description: string;
  input: string[][];
  lightbulbsUsed: number;
  output: string[][];
  run: () => string[][];
}
