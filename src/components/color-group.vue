<template>
  <div>
    <h2 class="title">
      Color:
      <span class="active-color">{{ activeColor }}</span>
    </h2>
    <div class="colors">
      <div v-for="color in colors" :key="color">
        <label class="checkbox-container">
          <input
            class="checkbox-input"
            type="radio"
            name="color"
            @click="selectColor(color)"
          />
          <!-- Binds class to background colors.
          Could also use inline styles for a larger number of colors -->
          <span
            :class="`checkbox-${color}`"
            class="checkbox-check-mark-container"
          >
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
</template>

<script>
import { CheckIcon } from "vue-feather-icons";

export default {
  name: "color-group",
  props: {
    activeColor: {
      type: String,
      default: ""
    }
  },
  components: {
    CheckIcon
  },
  methods: {
    selectColor(color) {
      this.$emit("select-color", color);
    }
  },
  computed: {
    colors() {
      return this.$store.state.colors;
    }
  }
};
</script>

<style lang="scss">
@import "../sass/_variables.scss";

.checkbox {
  &-input {
    display: none;
  }

  // colors
  &-black {
    background-color: $black;
  }
  &-white {
    background-color: $white;
  }
  &-yellow {
    background-color: $yellow;
  }
  &-orange {
    background-color: $orange;
  }
  &-red {
    background-color: $red;
  }
  &-blue {
    background-color: $blue;
  }
  &-purple {
    background-color: $purple;
  }
  &-green {
    background-color: $green;
  }

  &-green &-check-mark,
  &-yellow &-check-mark {
    stroke: $black;
  }

  &-check-mark {
    position: absolute;
    stroke: $white;
  }
}
</style>