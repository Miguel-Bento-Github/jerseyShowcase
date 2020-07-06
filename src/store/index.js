import Vue from 'vue';
import Vuex from 'vuex';
import { patterns, colors } from '../mock/data/variables';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePattern: '',
    activeColor: '',
    colors,
    patterns,
  },
  mutations: {
    setActiveColor(state, payload) {
      state.activeColor = payload;
    },
    setActivePattern(state, payload) {
      state.activePattern = payload;
    },
  },
  actions: {
    selectColor(context, payload) {
      context.commit('setActiveColor', payload);
    },
    selectPattern(context, payload) {
      context.commit('setActivePattern', payload);
    },
  },
});
