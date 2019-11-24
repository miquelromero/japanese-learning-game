import Vue from 'vue';
import Vuex from 'vuex';

import exercices from './modules/exercices';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    exercices,
  },
});
