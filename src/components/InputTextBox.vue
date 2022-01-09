<template>
  <div>
    <textarea
      class="matrix-input"
      id=""
      cols="30"
      rows="5"
      placeholder="Enter your matrix of 0s and 1s here..."
      v-model="value"
    ></textarea>
    <br />
    <div class="error-message" v-if="errorMessage.length > 0">
      {{ errorMessage }}
    </div>
    <div>
      ...you also can
      <a @click="generateRandomInput">generate a random input</a> or
      <a @click="openFile">choose a txt file</a>
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
  errorMessage = "";

  @distribution.Action
  public updateInput!: (input: string[][]) => void;

  distributeLightbulbs(): void {
    if (this.isInputValid(this.value)) {
      const parsedInput = this.value.split("\n").map((row) => row.split(""));
      this.updateInput(parsedInput);
    }
  }

  isInputValid(input: string): boolean {
    const unexpectedCharacters = input.replace(/[01\n]/g, "");
    if (unexpectedCharacters.length > 0) {
      const notRepeatedChars = [...new Set(unexpectedCharacters)].join("");
      this.errorMessage = `Unexpected characters: ${notRepeatedChars}`;
      return false;
    }

    const rows = input.split("\n");
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].length !== rows[0].length) {
        this.errorMessage = `Size missmatch at line ${i + 1}`;
        return false;
      }
    }
    this.errorMessage = "";
    return true;
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
    this.value = output.slice(0, -1);
  }

  openFile(): void {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt";
    input.onchange = () => {
      if (input.files && input.files.length >= 1) {
        const fileType = input.files[0].type || "";
        if (!(fileType === "text/plain" || fileType === "")) {
          this.errorMessage = `File of type "${fileType}" are not supported`;
          return;
        }
      }

      const fr = new FileReader();
      fr.onload = (e) => {
        this.errorMessage = "";
        this.value = `${fr.result}`.replaceAll(/\r/g, "");
      };
      if (input.files) {
        fr.readAsText(input.files[0]);
      }
    };
    input.click();
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
  margin-bottom: 15px;
  color: #fff;
  font-family: consolas;
  font-size: 24px;
  transform: scaleX(1.25);
  letter-spacing: 12px;
  line-height: 30px;
  text-align: center;
  width: 500px;
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

.error-message {
  background: #a00000;
  border: 5px solid #b00;
  padding: 3px 8px;
  margin-bottom: 15px;
  width: 500px;
  margin: auto;
}

@media only screen and (max-width: 600px) {
  .matrix-input {
    width: 50vw;
  }
  button {
    margin-left: 30px;
    margin-right: 30px;
    font-size: 20px;
  }
  a {
    margin: 20px;
    font-weight: bolder;
    font-size: 20px;
  }
}
</style>
