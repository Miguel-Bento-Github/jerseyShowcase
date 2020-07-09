<template>
  <div class="home">
    <main class="main-content">
      <div class="showcase">
        <div class="showcase-container">
          <chevron-left-icon class="showcase-icon showcase-chevron-left" />
          <img class="showcase-jersey" :src="activeJerseyAsset" alt="jersey" />
          <chevron-right-icon class="showcase-icon showcase-chevron-right" />
        </div>
        <div class="details"></div>
        <share-icon class="showcase-icon share" />
      </div>
      <editor />
    </main>
  </div>
</template>

<script>
  import Editor from '@/components/editor';

  // Recommended library to handle feather icons
  import { ChevronRightIcon, ChevronLeftIcon, ShareIcon } from 'vue-feather-icons';

  export default {
    name: 'Home',
    components: {
      ChevronRightIcon,
      ChevronLeftIcon,
      ShareIcon,
      Editor,
    },
    computed: {
      activeJerseyAsset() {
        // Optional chaining is an ES2020 feature,
        // for more information please follow
        // https://v8.dev/features/optional-chaining
        return this.$store.getters.filteredActiveJersey?.src;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../sass/_variables.scss';

  .home {
    width: 100%;
  }

  .main-content {
    $navbar-height: 83px;
    height: calc(100vh - #{$navbar-height});

    display: grid;
    grid-template-columns: 5fr 2fr;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .showcase {
    background: $light-grey;
    position: relative;

    &-container {
      padding: 10vh 10vw;
      display: flex;
      align-items: center;
      place-content: center;
    }

    &-icon {
      stroke: $white;
    }

    &-chevron-left {
      margin-right: 10vw;
    }

    &-jersey {
      max-width: 100%;
      @media screen and (max-width: 768px) {
        max-width: 50%;
      }
    }

    &-chevron-right {
      margin-left: 10vw;
    }
  }

  .share {
    position: absolute;
    top: 32px;
    right: 32px;
    cursor: pointer;
  }
</style>
