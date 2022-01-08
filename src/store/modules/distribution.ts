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
  public updateInput(input: string[][]): void {
    let algorithms = Algorithms.map((AlgorithmClass) => {
      const algorithm = new AlgorithmClass(input);
      algorithm.run();
      return algorithm;
    });
    algorithms = algorithms.sort((a, b) => {
      return a.lightbulbsUsed - b.lightbulbsUsed;
    });
    this.context.commit("setAlgorithms", algorithms);
  }
}
export default Distribution;
