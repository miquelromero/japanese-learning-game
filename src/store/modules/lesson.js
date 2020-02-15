import lessonViews from '@/views/lesson/index';
import modalities from '@/lessons/modalities';

export default {
  namespaced: true,
  state: {
    lesson: null,
    modality: null,
    view: null,
    questionPosition: null,
    questions: null,
    answer: null,
  },
  getters: {
    currentQuestion: state => state.questions[state.questionPosition],
    isCorrectAnswer: (state, getters) =>
      state.answer !== null
        ? state.answer === getters.currentQuestion.value
        : null,
    isLastQuestion: state =>
      state.questionPosition + 1 === state.questions.length,
    isAnswerSent: state => state.answer !== null,
  },
  mutations: {
    setLesson: (state, lesson) => {
      state.lesson = lesson;
    },
    setView: (state, view) => {
      state.view = view;
    },
    setQuestionPosition: (state, questionPosition) => {
      state.questionPosition = questionPosition;
    },
    setModality: (state, modality) => {
      state.modality = modality;
    },
    setQuestions: (state, questions) => {
      state.questions = questions;
    },
    setAnswer: (state, answer) => {
      state.answer = answer;
    },
  },
  actions: {
    setLesson: ({ commit }, lesson) => {
      commit('setLesson', lesson);
      commit('setView', lessonViews.HOME);
      commit('setModality', modalities.ROMAJI);
    },
    clearLessonData: ({ commit }) => {
      commit('setLesson', null);
      commit('setView', null);
      commit('setAnswer', null);
    },
    start: ({ state, commit }) => {
      commit('setView', lessonViews.GAME);
      commit(
        'setQuestions',
        state.lesson.questions.generate({
          modality: state.modality,
          number: 30,
        }),
      );
      commit('setQuestionPosition', 0);
    },
    sendAnswer: ({ commit }, answer) => {
      commit('setAnswer', answer);
    },
    nextQuestion: ({ state, getters, commit, dispatch }) => {
      commit('setAnswer', null);
      if (getters.isLastQuestion) {
        dispatch('finish');
      } else {
        commit('setQuestionPosition', state.questionPosition + 1);
      }
    },
    finish: ({ commit }) => {
      commit('setView', lessonViews.RESULTS);
    },
    home: ({ commit }) => {
      commit('setView', lessonViews.HOME);
    },
  },
};
