<template>
  <div class="output-grid-container">
    <table class="output-grid">
      <tr v-for="row in output" :key="row">
        <td v-for="value in row" :key="value">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";

const distribution = namespace("distribution");

export default class HelloWorld extends Vue {
  @distribution.State
  public output!: string[][];
}
</script>

<style scoped lang="scss">
.output-grid-container {
  outline: 1px solid green;
  background: #243024;
  padding: 15px 19px;
  color: #fff;
  font-family: consolas;
  font-size: 24px;
  letter-spacing: 12px;
  line-height: 30px;
  text-align: ceil($number: 0);
  margin: auto;
  margin-bottom: 100px;
}
.output-grid {
  margin: auto;
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
