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
}

#nav {
  display: none;
}

html,
body {
  background: linear-gradient(45deg, #242424, #484848);
  padding-bottom: 50px;
  color: #fff;
}
a {
  color: #62d9a3;
  font-weight: bolder;
}
</style>
