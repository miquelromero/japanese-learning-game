import lessons from '@/lessons';

export default {
  namespaced: true,
  getters: {
    lessons: () => lessons.filter(lesson => lesson.isActive),
    getLessonBySlug: (state, getters) => slug =>
      getters.lessons.find(lesson => lesson.slug === slug),
  },
};
