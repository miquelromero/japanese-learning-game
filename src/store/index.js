import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
import lesson from './modules/lesson';
import lessons from './modules/lessons';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    layout,
    lesson,
    lessons,
  },
});
