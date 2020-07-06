import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePattern: '',
    activeColor: '',
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
