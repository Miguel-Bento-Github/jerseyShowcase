<template>
  <div class="patterns-section">
    <h2 class="title">
      Pattern
      <span class="pattern-extra-cost" v-if="activePattern !== 'plain'">
        + €10
      </span>
    </h2>
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
          <span
            :class="`checkbox-${pattern}`"
            class="checkbox-check-mark-container"
          >
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
</template>

<script>
import { CheckIcon } from "vue-feather-icons";

export default {
  name: "patterns",
  components: { CheckIcon },
  methods: {
    selectPattern(pattern) {
      this.$emit("select-pattern", pattern);
    }
  },
  computed: {
    patterns() {
      return this.$store.state.patterns;
    },
    activePattern() {
      return this.$store.state.activePattern;
    }
  }
};
</script>

<style lang="scss">
@import "../sass/_variables.scss";

.checkbox {
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
    cursor: pointer;
  }

  // patterns
  &-plain {
    background: $black;
  }

  &-split {
    background: linear-gradient(90deg, $black 0, $black 7px, $grey 8px);
  }

  &-striped {
    background-attachment: fixed;
    background: linear-gradient(
      90deg,
      $black 3px,
      $grey 4px,
      $grey 6px,
      $black 6px,
      $black 9px,
      $grey 9px,
      $grey 11px,
      $black 11px
    );
  }
}

.pattern-extra-cost {
  font-size: 8px;
  padding-left: 8px;
}
</style>