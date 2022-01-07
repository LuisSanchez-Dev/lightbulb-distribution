export default interface IAlgorithm {
  name: string;
  description: string;
  input: string[][];
  lightbulbsUsed: number;
  run: () => string[][];
}
