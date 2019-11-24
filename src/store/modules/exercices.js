import exercices from '@/exercices';

export default {
  namespaced: true,
  getters: {
    exercices: () => exercices.filter(exercice => exercice.isActive),
    getExerciceBySlug: (state, getters) => slug =>
      getters.exercices.find(exercice => exercice.slug === slug),
  },
};
