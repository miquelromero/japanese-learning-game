import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    exercices: () => config.exercices,
    getExerciceBySlug: (state, getters) => slug =>
      getters.exercices.find(exercice => exercice.slug === slug),
  },
  mutations: {},
  actions: {},
  modules: {},
});
