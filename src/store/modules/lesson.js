import lessonScreens from '@/components/lesson-screens';

export default {
  namespaced: true,
  state: {
    lesson: undefined,
    screen: undefined,
    score: undefined,
  },
  mutations: {
    setLesson: (state, lesson) => {
      state.lesson = lesson;
    },
    setScreen: (state, screen) => {
      state.screen = screen;
    },
    setScore: (state, score) => {
      state.score = score;
    },
    clearScore: state => {
      state.score = undefined;
    },
  },
  actions: {
    setLesson: ({ commit }, lesson) => {
      commit('setLesson', lesson);
      commit('clearScore');
      commit('setScreen', lessonScreens.HOME);
    },
    clearLessonData: ({ commit }) => {
      commit('setLesson', undefined);
      commit('clearScore');
      commit('setScreen', undefined);
    },
    start: ({ commit }) => {
      commit('clearScore');
      commit('setScreen', lessonScreens.GAME);
    },
    finish: ({ commit }, { score }) => {
      commit('setScore', score);
      commit('setScreen', lessonScreens.RESULTS);
    },
    home: ({ commit }) => {
      commit('clearScore');
      commit('setScreen', lessonScreens.HOME);
    },
  },
};
