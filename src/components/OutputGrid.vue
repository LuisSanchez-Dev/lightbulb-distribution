<template>
  <div
    class="output-grid-container"
    v-for="algorithm in algorithms"
    :key="algorithm.name"
  >
    <h3>{{ algorithm.name }} algorithm</h3>
    <div class="row">
      <div class="column left">
        <table class="output-grid">
          <tr v-for="row in algorithm.output" :key="row">
            <td v-for="value in row" :key="value">
              {{ value }}
            </td>
          </tr>
        </table>
      </div>
      <div class="column right">
        {{ algorithm.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";
import IAlgorithm from "@/algorithms/IAlgorithm";

const distribution = namespace("distribution");

export default class OutputGrid extends Vue {
  @distribution.State
  public algorithms!: IAlgorithm[][];
}
</script>

<style scoped lang="scss">
.output-grid-container {
  outline: 1px solid green;
  background: #142014;
  padding: 15px 45px;
  color: #fff;
  margin: auto;
  margin-bottom: 20px;
  width: 60%;
  max-width: 100%;
}
.output-grid {
  margin: auto;
  font-family: consolas;
  font-size: 24px;
  letter-spacing: 12px;
  line-height: 30px;
  text-align: center;
}
.column {
  float: left;
}
.left {
  width: 35%;
}
.right {
  position: relative;
  padding-top: 50px;
  width: 65%;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: lighter;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
