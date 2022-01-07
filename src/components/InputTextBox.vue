<template>
  <div class="hello">
    <textarea
      class="matrix-input"
      id=""
      cols="30"
      rows="5"
      placeholder="Enter your matrix of 0 and 1 here..."
      v-model="value"
    ></textarea>
    <br />
    <button @click="distributeLightbulbs">DISTRIBUTE LIGHTBULBS</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";

const distribution = namespace("distribution");

@Options({})
export default class HelloWorld extends Vue {
  value = "";
  @distribution.State
  public msg!: string;

  @distribution.Action
  public updateInput!: (input: string) => void;

  distributeLightbulbs(): void {
    this.updateInput(this.value);
  }
}
</script>

<style scoped lang="scss">
.matrix-input {
  outline: 1px solid white;
  background: #242424;
  padding: 15px 19px;
  color: #fff;
  font-family: consolas;
  font-size: 24px;
  transform: scaleX(1.25);
  letter-spacing: 12px;
  line-height: 30px;
  text-align: center;
}
button {
  margin-top: 20px;
  padding: 10px 25px;
  border-radius: 2px;
  background: #606000;
  font-size: 30px;
  color: #fff;
}
button:hover {
  background: #909000;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
