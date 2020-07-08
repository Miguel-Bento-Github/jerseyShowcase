<template>
  <section class="editor-container">
    <header class="editor-menu-control">
      <chevron-left-icon class="chevron" />
      <span class="editor-wardrobe">Shirt</span>
      <chevron-right-icon class="chevron" />
      <div class="burger-container">
        <div class="burger"></div>
      </div>
    </header>

    <div class="base">
      <div class="base-header">
        <h2 class="title">Base</h2>
        <chevron-up-icon class="chevron" />
      </div>
      <patterns @select-pattern="selectPattern" />
      <div class="colors-section">
        <color-group
          :activeColor="activePrimaryColor"
          @select-color="selectPrimaryColor"
        />

        <div v-if="activePattern !== 'plain'">
          <color-group
            :activeColor="activeSecondaryColor"
            @select-color="selectSecondaryColor"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon
} from "vue-feather-icons";
import ColorGroup from "@/components/color-group";
import Patterns from "@/components/patterns";

export default {
  name: "editor",
  components: {
    Patterns,
    ColorGroup,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon
  },
  methods: {
    selectPrimaryColor(color) {
      this.$store.dispatch("selectColor", { color, isPrimary: true });
    },
    selectSecondaryColor(color) {
      this.$store.dispatch("selectColor", { color, isPrimary: false });
    },
    selectPattern(pattern) {
      this.$store.dispatch("selectPattern", pattern);
    }
  },
  computed: {
    activePrimaryColor() {
      return this.$store.state.activeColor.primary;
    },
    activeSecondaryColor() {
      return this.$store.state.activeColor.secondary;
    },
    activePattern() {
      return this.$store.state.activePattern;
    }
  }
};
</script>

<style lang="scss">
@import "../sass/_variables.scss";

.editor {
  &-container {
    background: $white;
    padding: 8px 0;
  }

  &-wardrobe {
    margin: 0 32px;
  }
}

.chevron {
  stroke: $grey;
}

.burger {
  position: relative;
  height: 1px;
  width: 16px;
  background: $grey;

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 16px;
    background: $grey;
  }

  &::before {
    margin-top: 4px;
  }

  &::after {
    margin-top: -4px;
  }

  &-container {
    margin-left: auto;
    padding: 4px;
    margin-right: 16px;
    cursor: pointer;

    &:hover {
      filter: $drop-shadow-light;
    }
  }
}

.editor-menu-control {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px 16px;
  border-bottom: 1px solid $grey;
}

.base {
  padding-left: 16px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 32px 16px 0;
  }

  .title {
    padding: 16px 0;
    font-size: 12px;
  }
}

.colors,
.patterns {
  display: flex;
  align-items: center;
}

.active-color {
  padding-left: 1ch;
  text-transform: capitalize;
}
</style>
