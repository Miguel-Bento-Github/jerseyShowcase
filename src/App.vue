<template>
  <div id="app">
    <main-navbar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavbar from "@/components/main-navbar";

export default {
  name: "robey-app",
  components: {
    MainNavbar
  }
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
