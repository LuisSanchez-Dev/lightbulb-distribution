<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100%;
  max-width: 100%;
  position: relative;
  overflow-x: hidden;
}

#nav {
  display: none;
}

html {
  height: 100%;
}

html,
body {
  background: linear-gradient(45deg, #242424, #484848);
  padding-bottom: 50px;
  margin: 0;
  color: #fff;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}
a {
  color: #62d9a3;
  font-weight: bolder;
  cursor: pointer;
}
</style>
