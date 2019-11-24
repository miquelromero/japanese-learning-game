<template>
  <div>
    <ExercicesItem :exercice="exercice" />
  </div>
</template>

<script>
import ExercicesItem from '@/components/exercices/item/ExercicesItem.vue';
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
    ...mapGetters('exercices', ['getExerciceBySlug']),
    exercice() {
      return this.getExerciceBySlug(this.exerciceSlug);
    },
  },
};
</script>
