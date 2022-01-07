<template>
  <div class="home">
    <h1>💡 Lightbulb Distribution</h1>
    <InputTextBox />
    <OutputGrid />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InputTextBox from "@/components/InputTextBox.vue"; // @ is an alias to /src
import OutputGrid from "@/components/OutputGrid.vue";

@Options({
  components: {
    InputTextBox,
    OutputGrid,
  },
})
export default class Home extends Vue {}
</script>
