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

      <div class="patterns-section">
        <h2 class="title">Pattern</h2>
        <div class="patterns">
          <div v-for="pattern in patterns" :key="pattern">
            <label class="checkbox-container" :for="pattern">
              <input
                class="checkbox-input"
                type="radio"
                name="pattern"
                :id="pattern"
                @click="selectPattern(pattern)"
              />
              <span :class="pattern" class="checkbox-check-mark-container">
                <check-icon
                  size="1x"
                  class="checkbox-check-mark"
                  v-show="activePattern === pattern"
                />
              </span>
            </label>
          </div>
        </div>
      </div>

      <div class="colors-section">
        <h2 class="title">Color {{ activeColor }}</h2>
        <div class="colors">
          <div v-for="color in colors" :key="color">
            <label class="checkbox-container" :for="color">
              <input
                class="checkbox-input"
                type="radio"
                name="color"
                :id="color"
                @click="selectColor(color)"
              />
              <!-- Bind class to background colors. Could also use inline styles for a larger number of colors -->
              <span :class="color" class="checkbox-check-mark-container">
                <check-icon
                  size="1x"
                  class="checkbox-check-mark"
                  v-show="activeColor === color"
                />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CheckIcon
} from "vue-feather-icons";

export default {
  name: "editor",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CheckIcon
  },
  computed: {
    activeColor() {
      return this.$store.state.activeColor;
    },
    activePattern() {
      return this.$store.state.activePattern;
    },
    patterns() {
      return this.$store.state.patterns;
    },
    colors() {
      return this.$store.state.colors;
    }
  },
  methods: {
    selectColor(color) {
      this.$store.dispatch("selectColor", color);
    },
    selectPattern(pattern) {
      this.$store.dispatch("selectPattern", pattern);
    }
  }
};
</script>

<style lang="scss" scoped>
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
  cursor: pointer;
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
  }
}

.editor-menu-control {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px 8px;
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

.checkbox {
  &-input {
    display: none;
  }

  // artificial checkbox
  &-input + &-check-mark-container {
    height: 17px;
    width: 17px;
    border: 1px solid $grey;
    background-size: 25px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    margin-right: 16px;

    // patterns
    &.plain {
      background: $black;
    }

    &.split {
      background: linear-gradient(-90deg, $black 0%, $black 49%, $grey 50%);
    }

    &.stripes {
      background: repeating-linear-gradient(
        90deg,
        $black 0,
        $grey 20%,
        $black 40%,
        $grey 60%,
        $black 80%
      );
    }
  }

  // colors
  &-check-mark-container {
    &.black {
      background-color: $black;
    }
    &.white {
      background-color: $white;
    }
    &.yellow {
      background-color: $yellow;
    }
    &.orange {
      background-color: $orange;
    }
    &.red {
      background-color: $red;
    }
    &.blue {
      background-color: $blue;
    }
    &.purple {
      background-color: $purple;
    }
    &.green {
      background-color: $green;
    }
  }

  &-check-mark {
    position: absolute;
    stroke: $white;
  }
}
</style>
