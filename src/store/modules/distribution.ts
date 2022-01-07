import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { LRTDAlgorithm } from "../../algorithms";

@Module({
  namespaced: true,
})
class Distribution extends VuexModule {
  public msg = "Message from state";
  public output: string[][] = [["0", "0"]];

  @Mutation
  public setOutput(output: string[][]): void {
    this.output = output;
  }
  @Action
  public updateInput(input: string): void {
    const lrtd = new LRTDAlgorithm([["0", "1"]]);
    this.context.commit("setOutput", lrtd.run());
  }
}
export default Distribution;
