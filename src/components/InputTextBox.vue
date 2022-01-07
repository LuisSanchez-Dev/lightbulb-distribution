<template>
  <div>
    <textarea
      class="matrix-input"
      id=""
      cols="30"
      rows="5"
      placeholder="Enter your matrix of 0 and 1 here..."
      v-model="value"
    ></textarea>
    <br />
    <div>
      ...you also can
      <a @click="generateRandomInput">generate a random input</a> or
      <a href="#">choose a txt file</a>
      from your computer
    </div>
    <button @click="distributeLightbulbs">DISTRIBUTE LIGHTBULBS</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";

const distribution = namespace("distribution");

export default class InputTextBox extends Vue {
  value = "";

  @distribution.Action
  public updateInput!: (input: string) => void;

  distributeLightbulbs(): void {
    this.updateInput(this.value);
  }

  generateRandomInput(): void {
    const width = 3 + Math.ceil(Math.random() * 14);
    const height = 3 + Math.ceil(Math.random() * 7);
    let output = "";
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        output += Math.random() >= 0.75 ? "1" : "0";
      }
      output += "\n";
    }
    this.value = output;
  }
}
</script>

<style scoped lang="scss">
.matrix-input {
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  outline: 2px solid #aaa;
  background: #484848;
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

a {
  margin-left: 3px;
  margin-right: 3px;
}
</style>
