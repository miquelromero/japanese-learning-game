<template>
  <div>
    <h1>Exercice</h1>
    <ExercicesItem :exercice="exercice" />
  </div>
</template>

<script>
import ExercicesItem from '@/components/ExercicesItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ExercicesItem,
  },
  props: {
    exerciceSlug: {
      type: String,
      mandatory: true,
      default: null,
    },
  },
  computed: {
    ...mapGetters(['getExerciceBySlug']),
    exercice() {
      return this.getExerciceBySlug(this.exerciceSlug);
    },
  },
};
</script>
