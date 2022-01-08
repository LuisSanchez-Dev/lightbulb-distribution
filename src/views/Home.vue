<template>
  <div class="home">
    <GitHubButton />
    <h1>💡 Lightbulb Distribution</h1>
    <InputTextBox />
    <OutputGrid />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GitHubButton from "@/components/GitHubButton.vue";
import InputTextBox from "@/components/InputTextBox.vue"; // @ is an alias to /src
import OutputGrid from "@/components/OutputGrid.vue";

@Options({
  components: {
    GitHubButton,
    InputTextBox,
    OutputGrid,
  },
})
export default class Home extends Vue {}
</script>
