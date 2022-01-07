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
            <td :class="getClass(value)" v-for="value in row" :key="value">
              <img
                v-if="value === 'L'"
                src="../assets/lightbulb.png"
                alt="lightbulb"
              />
              <!-- {{ value }} -->
            </td>
          </tr>
        </table>
      </div>
      <div class="column right">
        <p class="lightbulbs-count-container">
          <span class="lightbulbs-count">{{ algorithm.lightbulbsUsed }}</span>
          lightbulbs used
        </p>
        <p>{{ algorithm.description }}</p>
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

  getClass(squareType: string): string {
    if (squareType === "1") {
      return "wall";
    }
    return "floor";
  }
}
</script>

<style scoped lang="scss">
.output-grid-container {
  outline: 1px solid yellow;
  border-radius: 1px;
  background: #404030;
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
.lightbulbs-count-container {
  text-align: left;
}

.lightbulbs-count {
  font-size: 60px;
  font-weight: bolder;
  margin-right: 5px;
}

td {
  width: 30px;
  height: 30px;
  outline: 1px solid black;
}
td img {
  width: 32px;
  height: 32px;
}
.floor {
  background-image: url("../assets/floor.png");
}

.wall {
  background: #111;
}
</style>
