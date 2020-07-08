import Vue from 'vue';
import Vuex from 'vuex';
import { patterns, colors } from '../utils/variables';
import jerseys from '../mock/jerseys';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jerseys,
    patterns,
    colors,
    activeJersey: null,
    activePattern: 'striped',
    activeColor: {
      primary: 'black',
      secondary: 'yellow',
    },
  },
  /**
   * Getters are similar to computed properties for stores.
   * A getters result is cached based on its dependencies,
   * and will only re- evaluate when some of its dependencies have changed
   */
  getters: {
    /**
     * Checks if the pattern is plain, if so,
     * will return the jersey correspondent to its active color.
     * Otherwise filters all the jerseys with all active colors.
     *
     * @returns the active jersey
     */
    filteredActiveJersey: (state) => {
      const jerseys = Object.values(state.jerseys);

      const singleColorJerseys = jerseys.filter(({ colors }) => {
        return state.activeColor.primary === colors[0];
      });

      /**
       * Converts the current active colors into an array.
       * Trim whitespace with replace(/ /g, '') and converts the string into an array
       * Compares arrays and @returns the new active jersey
       */
      const multiColorJerseys = jerseys.filter((jersey) => {
        const activeColors = Object.values(state.activeColor);
        const colorArray = jersey.colors[0].replace(/ /g, '').split(',');
        return JSON.stringify(colorArray) === JSON.stringify(activeColors);
      });

      if (state.activePattern === patterns.plain) {
        return singleColorJerseys[0];
      } else if (state.activePattern === patterns.striped) {
        return multiColorJerseys[0];
      }

      if (!singleColorJerseys[0] || !multiColorJerseys[0]) {
        throw new Error('Failed to load a jersey. Asset is probably missing');
      }
      // currently there's no logic for the split jerseys as there are none, should be one of the next steps.
    },
  },
  mutations: {
    setActiveJersey(state, payload) {
      state.activeJersey = payload;
    },
    /**
     * Checks if selected the color is the primary color(color A in the designs).
     * Assigns the @param payload.color to the correspondent state activeColor.
     *
     * @param {object} state.activeColor
     * @param {object} payload.isPrimary
     * @param {object} payload.color
     */
    setActiveColor({ activeColor }, { isPrimary, color }) {
      isPrimary ? (activeColor.primary = color) : (activeColor.secondary = color);
    },
    setActivePattern(state, payload) {
      state.activePattern = payload;
    },
  },
  actions: {
    selectColor({ commit }, payload) {
      commit('setActiveColor', payload);
    },
    selectPattern({ commit }, payload) {
      commit('setActivePattern', payload);
    },
  },
});
