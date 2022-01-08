<template>
  <a
    href="https://github.com/LuisSanchez-Dev/lightbulb-distribution"
    target="_blank"
    class="gh-button"
  >
    <div class="row">
      <div class="column">
        <span><img src="../assets/gh.png" alt="GitHub logo" /></span>
      </div>
      <div class="column gh-text">
        View it on <br /><span class="gh-name">GitHub</span>
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
.gh-button {
  position: absolute;
  top: 20px;
  right: 20px;
  border: 4px solid #4078c0;
  border-radius: 2px;
  background: #333;
  padding: 5px 10px;
  color: #fafafa;
  font-weight: lighter;
}
img {
  width: auto;
  height: 30px;
  vertical-align: middle;
}

.column {
  float: left;
  width: 33%;
}

.gh-text {
  width: 67%;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.gh-name {
  font-size: 20px;
  font-weight: bolder;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class GitHubButton extends Vue {}
</script>
