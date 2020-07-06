<template>
  <div class="home">
    <main-navbar />
    <main class="main-content">
      <div class="showcase">
        <div class="showcase-container">
          <chevron-left-icon />
          <img :src="jerseySrc" alt="jersey" />
          <chevron-right-icon @click="selectColor()" />
        </div>
        <div class="details"></div>
        <share-icon class="share" />
      </div>
      <editor />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import MainNavbar from "@/components/main-navbar";
import Editor from "@/components/editor";
import jerseys from "@/mock/data/jerseys";

// Recommended library to handle feather icons
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ShareIcon
} from "vue-feather-icons";

export default {
  name: "Home",
  components: {
    MainNavbar,
    ChevronRightIcon,
    ChevronLeftIcon,
    ShareIcon,
    Editor
  },
  data() {
    return {
      jerseySrc: jerseys[this.currentJersey]
    };
  },
  computed: {
    colors() {
      return this.$state.activeColor;
    }
  },
  methods: {
    selectColor(color = 0) {
      // TODO update jerseys on selection as an effect
      this.jerseySrc = jerseys[color];
    }
  },
  mounted() {
    this.jerseySrc = jerseys[0];
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/_variables.scss";
.home {
  background: $light-grey;
}

.main-content {
  display: grid;
  grid-template-columns: 5fr 2fr;
  height: calc(100vh - 83px);
}

.showcase {
  position: relative;

  &-container {
    height: 100%;
    display: flex;
    align-items: center;
    place-content: center;
  }
}

.share {
  position: absolute;
  top: 32px;
  right: 32px;
  stroke: $white;
  cursor: pointer;
}
</style>
