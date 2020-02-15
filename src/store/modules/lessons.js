import lessons from '@/lessons/lessons';

export default {
  namespaced: true,
  getters: {
    lessons: () => lessons.filter(lesson => lesson.active),
    getLessonBySlug: (state, getters) => slug =>
      getters.lessons.find(lesson => lesson.slug === slug),
  },
};
