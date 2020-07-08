<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "robey-app"
};
</script>

<style lang="scss">
@import "./sass/reset";
@import "./sass/variables";
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

body {
  font-family: "Poppins", sans-serif;
}

.feather {
  cursor: pointer;

  &:hover {
    filter: $drop-shadow-light;
  }
}
</style>
