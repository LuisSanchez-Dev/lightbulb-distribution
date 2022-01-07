import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { RLBUAlgorithm } from "../../algorithms";

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
  @Action({ rawError: true })
  public updateInput(input: string): void {
    const lrtd = new RLBUAlgorithm([
      ["0", "0", "0", "0", "0"],
      ["0", "0", "0", "1", "0"],
      ["0", "0", "0", "1", "0"],
      ["0", "0", "0", "1", "0"],
      ["0", "0", "0", "0", "0"],
    ]);
    this.context.commit("setOutput", lrtd.run());
  }
}
export default Distribution;
