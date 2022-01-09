<template>
  <div
    class="output-grid-container"
    v-for="algorithm in algorithms"
    :key="algorithm.name"
  >
    <h3>{{ algorithm.name }} algorithm</h3>
    <p class="lightbulbs-count-container">
      <span class="lightbulbs-count">{{ algorithm.lightbulbsUsed }}</span>
      lightbulbs used
    </p>
    <div class="output-grid-table-container">
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
    <p class="algorithm-description">{{ algorithm.description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
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
  background: #121212;
  padding: 15px 45px;
  color: #fff;
  margin: auto;
  margin-bottom: 20px;
  width: 60%;
  max-width: 100%;
}
.output-grid {
  margin: 0;
  padding: 0;
  font-family: consolas;
  font-size: 24px;
  letter-spacing: 12px;
  line-height: 30px;
  text-align: center;
}
.right {
  font-family: sans-serif;
  font-size: 20px;
  font-weight: lighter;
}

.lightbulbs-count-container {
  border-bottom: 2px solid #aaa;
  margin-bottom: 10px;
}

.lightbulbs-count {
  font-size: 60px;
  font-weight: bolder;
  margin-right: 5px;
}

td {
  width: 30px;
  height: 30px;
  max-width: 30px;
  max-height: 30px;
  border: 2px solid #242424;
}
td img {
  width: 30px;
  height: 30px;
}
.floor {
  background-image: url("../assets/floor.png");
}

.wall {
  background: #111;
}

.output-grid-table-container table {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 600px) {
  .output-grid-container {
    padding: 5px 0px;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

  .algorithm-description {
    border-top: 2px solid #aaa;
    padding-top: 5px;
  }
  .output-grid-table-container {
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .algorithm-description {
    margin-left: 10px;
    margin-right: 10px;
    text-align: justify;
  }
}
</style>
