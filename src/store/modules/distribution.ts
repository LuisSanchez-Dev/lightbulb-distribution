import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true, name: "distribution" })
class Distribution extends VuexModule {
  public msg = "Message from state";
  @Mutation
  public setMsg(newMsg: string): void {
    this.msg = newMsg;
  }
  @Action
  public updateMsg(newMsg: string): void {
    this.context.commit("setMsg", newMsg);
  }
}
export default Distribution;
