import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import Algorithms from "@/algorithms";
import IAlgorithm from "@/algorithms/IAlgorithm";

@Module({
  namespaced: true,
})
class Distribution extends VuexModule {
  public algorithms: IAlgorithm[] = [];

  @Mutation
  public setAlgorithms(algorithms: IAlgorithm[]): void {
    this.algorithms = algorithms;
  }

  @Action({ rawError: true })
  public updateInput(input: string): void {
    const customInput = [
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "1", "0"],
      ["0", "0", "0", "1", "0"],
      ["0", "0", "0", "1", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    const algorithms = Algorithms.map((AlgorithmClass) => {
      const algorithm = new AlgorithmClass(customInput);
      algorithm.run();
      return algorithm;
    });
    this.context.commit("setAlgorithms", algorithms);
  }
}
export default Distribution;
